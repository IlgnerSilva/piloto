"use client";

//Context
import { LayoutContext } from "@/providers/context/layoutContext";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
	const [hovered, setHovered] = useState(false);
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
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
						className={`h-full bg-red-600 fixed z-1 rounded-r transition-all p-2 ${
							fixed ? "w-52" : `${hovered ? "w-52" : "w-16"}`
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
										onClick={() => setFixed(true)}
										className="pi pi-lock cursor-pointer"
									/>
								)}
							</div>
							<div className="h-[90%]">Navegation</div>
							<div>Footer</div>
						</div>
					</div>
					{/* End Navegation */}

					{/* Start Main */}
					<div className={`absolute w-full transition-all ${fixed ? "w-[calc(100%-14rem)] pl-[14rem]" : "w-[calc(100%-4.5rem)] pl-[4.5rem]"} pt-[4.5rem]`}>
						{children}
					</div>
					{/* End Main */}
				</div>
			</div>
		</>
	);
}
