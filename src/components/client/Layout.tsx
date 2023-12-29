"use client";

import { Header } from "@/components/client/Header";
import { Navegation } from "@/components/client/Navegation";

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
					<LayoutContext.Provider value={{ hovered, setHovered, fixed, setFixed }}>
						{LayoutContext.displayName}
						<Header />
						<Navegation />
						<div className="absolute w-full transition-all pl-[13rem] pt-[4.5rem]">
							{children}
						</div>
					</LayoutContext.Provider>
				</div>
			</div>
		</>
	);
}
