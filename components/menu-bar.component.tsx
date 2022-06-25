import React from 'react';
import MenuIcon from './menu-icon.component';

import styles from '../styles/MenuBar.module.scss';

interface Props {
    setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuBar: React.FC<Props> = ({ setNavVisible }) => (
    <div className={styles['menu-bar']}>
        <button className={styles['menu-button']} onClick={() => setNavVisible(true)}>
            <MenuIcon size={60} />
        </button>
    </div>
);

export default MenuBar;