import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scrollPositon, setScrollPosition] = useState(0);

    useEffect(() => {
        const updateScrollPosition = () => {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', updateScrollPosition);

        updateScrollPosition();

        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    return scrollPositon;
}