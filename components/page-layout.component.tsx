import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import MenuBar from './menu-bar.component';
import Nav from './nav.component';

interface Props {
    children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {

    const [navVisible, setNavVisible] = useState(false);

    const isSmall = useMediaQuery({ query: '(max-width: 720px)' });
    
    useEffect(() => {
        setNavVisible(false);
    }, [children]);

    if (isSmall) {
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
        )
    } else {
        return (
            <>
                <Nav setNavVisible={setNavVisible} />
                {children}
            </>
        )
    }
}

export default PageLayout;