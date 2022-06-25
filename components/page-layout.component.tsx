import { useEffect, useState } from 'react';

import MenuBar from './menu-bar.component';
import Nav from './nav.component';

interface Props {
    children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {

    const [navVisible, setNavVisible] = useState(false);
    
    useEffect(() => {
        setNavVisible(false);
    }, [children]);

    return (
        <>
            {
                navVisible
                ? <Nav setNavVisible={setNavVisible} />
                :
                    <>
                        <MenuBar setNavVisible={setNavVisible} />
                        {children}
                    </>
            }
        </>
    );
}

export default PageLayout;