import { useContext } from "react";
import { LayoutContext } from "@/providers/context/layoutContext";

export function Navegation() {
	const context = useContext(LayoutContext);
	return (
		<div
			onMouseEnter={() => context?.setHovered(true)}
			onMouseLeave={() => context?.setHovered(false)}
			className={`h-full bg-red-600 fixed z-1 rounded-r transition-all p-2 ${
				context?.fixed ? "w-52" : `${context?.hovered ? "w-52" : "w-16"}`
			}`}
		>
			<div className="flex flex-col gap-1 w-full h-full justify-between items-center">
				<div className="flex gap-2 items-center">
					<div>Logo</div>
					{context?.fixed ? (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<i
							onClick={() => context?.setFixed(false)}
							className="pi pi-lock-open cursor-pointer"
						/>
					) : (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<i
							onClick={() => context?.setFixed(true)}
							className="pi pi-lock cursor-pointer"
						/>
					)}
				</div>
				<div>Navegation</div>
				<div>Footer</div>
			</div>
		</div>
	);
}
