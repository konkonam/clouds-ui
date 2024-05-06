import type { Ref } from "#imports";

export type AppLink = {
	id: number,
	slug: string,
	name: string,
	description?: string,
	children?: AppLink[],
}

export type Bounding = {
	x: Ref<number>,
	y: Ref<number>,
	width: Ref<number>,
	height: Ref<number>,
};

export type OpenMenuFunction = (bounding: Bounding) => void;
export type CloseMenuFunction = () => void;
