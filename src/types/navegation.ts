import React from "react";

export type INavegation = {
	categoria: string;
	icon: React.ReactNode;
	items: {
		name: string;
		link?: string | undefined;
		icon?: React.ReactNode;
		items?: {
			name: string;
			link: string;
			icon?: React.ReactNode;
		}[];
	}[];
};
