import { useEffect, useState } from 'react';

import Nav from './nav.component';

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
            <Nav navVisible={navVisible} setNavVisible={setNavVisible} />
            {children}
        </>
    );
}

export default PageLayout;