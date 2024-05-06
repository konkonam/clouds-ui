import { useMediaQuery } from '@vueuse/core';

export const useScreen = () => {
    const isLargeScreen = useMediaQuery('(min-width: 768px)');

    return {
        isLargeScreen,
    };
};
