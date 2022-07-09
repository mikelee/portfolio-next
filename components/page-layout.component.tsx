import { useEffect, useState } from 'react';

import Navigation from './navigation.component';

interface Props {
    children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {
    const [navVisible, setNavVisible] = useState(false);
    
    useEffect(() => {
        setNavVisible(false);
    }, [children]);
    
    useEffect(() => {
        navVisible
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'visible'
    }, [navVisible]);

    return (
        <>
            <Navigation navVisible={navVisible} setNavVisible={setNavVisible} />
            {children}
        </>
    );
}

export default PageLayout;