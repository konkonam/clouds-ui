import type { AppLink, ISbStoryData, ISbLink, PageStoryblok } from "~/types";

export const useLinks = () => {
	const { public: publicConfig } = useRuntimeConfig();

	const sanitize = (slug?: string) => slug?.replace(publicConfig.storyblokBasePath, '');

	const buildNavigation = (links: Record<string, ISbLink>, stories: ISbStoryData[], parentId?: number): AppLink[] => {
		const ids = Object.values(links).map(link => link.id);

		let parents = Object.values(links).filter(link => !ids.includes(link.parent_id));
		if (parentId) parents = Object.values(links).filter(link => link.parent_id === parentId);

		return parents.map<AppLink>(value => {
			const story = stories.find(story => story.id === value.id)?.content as PageStoryblok | undefined;

			return {
				id: value.id ?? -1,
				slug: sanitize(value.slug) ?? '',
				name: value.name ?? '',
				description: story?.description ?? '',
				children: buildNavigation(links, stories, value.id),
			};
		});
	};

	return {
		buildNavigation,
	};
}
