import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Navigation from './navigation/navigation.component';

interface Props {
    children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {
    const [navVisible, setNavVisible] = useState(false);
    
    const pathName = usePathname();

    useEffect(() => {
        setNavVisible(false);
    }, [pathName]);
    
    useEffect(() => {
        navVisible
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'visible'
    }, [navVisible]);

    return (
        <>
            <Navigation navVisible={navVisible} pathName={pathName} setNavVisible={setNavVisible} />
            {children}
        </>
    );
}

export default PageLayout;