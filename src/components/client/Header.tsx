import { useContext } from "react";
import { LayoutContext } from "@/providers/context/layoutContext";

export function Header() {
	const context = useContext(LayoutContext);
	return (
		<div className={`${context?.fixed ? "w-[calc(100%-13rem)] ml-[13rem]" : "w-[calc(100%-4.5rem)] ml-[4.5rem]"} transition-all bg-slate-500 absolute `}>
			<h1 className="">Header</h1>
		</div>
	);
}
