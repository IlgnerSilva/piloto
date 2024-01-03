"use client";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";

import { useState } from "react";
import { INavegation } from "@/types/navegation";

import Link from "next/link";

const items: INavegation[] = [
	{
		categoria: "Playground",
		icon: "pi-play",
		items: [
			{
				name: "IA Generator",
				icon: "pi-angle-double-right",
				link: undefined,
				items: [
					{
						name: "SQL Generator",
						link: "/playground/generate-sql",
						icon: "pi-android",
					},
				],
			},
			{
				name: "Brasil API",
				icon: "pi-globe",
				link: undefined,
				items: [
					{
						name: "Cep",
						link: "/playground/cep",
						icon: "pi-code",
					},
				],
			},
		],
	},
];
export function Layout({ children }: { children: React.ReactNode }) {
	const [open, setopen] = useState(false);
	const [fixed, setFixed] = useState(false);
	return (
		<>
			<div className="bg-slate-200 h-full relative w-full max-w-full">
				<div className="w-full h-full">
					{/*Start Header */}
					<div
						className={`${
							fixed
								? "w-[calc(100%-13rem)] ml-[13rem]"
								: "w-[calc(100%-4.5rem)] ml-[4.5rem]"
						} transition-all bg-slate-500 absolute `}
					>
						<h1 className="">Header</h1>
					</div>
					{/*End Header */}

					{/*Start Navegation */}
					<div
						onMouseEnter={fixed ? () => setopen(true) : () => setopen(true)}
						onMouseLeave={fixed ? () => {} : () => setopen(false)}
						className={`h-full bg-red-600 fixed z-1 rounded-r transition-all p-2 ${
							fixed ? "w-52" : `${open ? "w-52" : "w-16"}`
						}`}
					>
						<div className="flex flex-col gap-1 w-full h-full justify-between items-center">
							<div className="flex gap-2 items-center">
								<div>Logo</div>
								{fixed ? (
									// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
									<i
										onClick={() => setFixed(false)}
										className="pi pi-lock-open cursor-pointer"
									/>
								) : (
									// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
									<i
										onClick={() => {
											setFixed(true)
											setopen(undefined)
										}}
										className="pi pi-lock cursor-pointer"
									/>
								)}
							</div>
							<div className="h-[90%] gap-3 bg-orange-400 w-full">
								{items.map((navegation) =>
									open === true || fixed === true ? (
										<Card className="w-full" >
											<Accordion className="w-full">
												<AccordionTab header={navegation.categoria}>
													{navegation.items.map((item) => (
														<>
															{item.items ? (
																item.items.map((subItem) => (
																	<div>
																		<Link
																			className="flex gap-2 items-center"
																			href={subItem.link}
																		>
																			<i className={subItem.icon}></i>
																			<p>{subItem.name}</p>
																		</Link>
																	</div>
																))
															) : (
																<div>
																	<Link
																		className="flex gap-2 items-center"
																		href={item.link}
																	>
																		<i className={item.icon}></i>
																		<p>{item.name}</p>
																	</Link>
																</div>
															)}
														</>
													))}
												</AccordionTab>
											</Accordion>
										</Card>
										// <div>
										// 	{navegation.categoria}
										// 	<div>
										// 		{navegation.items.map((item) => (
										// 			<div>{item.name}</div>
										// 		))}
										// 	</div>
										// </div>
									) : (
										<div>
											<i className={navegation.icon}></i>
										</div>
									),
								)}
							</div>
							<div>Footer</div>
						</div>
					</div>
					{/* End Navegation */}

					{/* Start Main */}
					<div
						className={`absolute w-full transition-all ${
							fixed
								? "w-[calc(100%-14rem)] pl-[14rem]"
								: "w-[calc(100%-4.5rem)] pl-[4.5rem]"
						} pt-[4.5rem]`}
					>
						{children}
					</div>
					{/* End Main */}
				</div>
			</div>
		</>
	);
}
