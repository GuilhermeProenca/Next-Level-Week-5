import { CgDarkMode } from 'react-icons/cg';
import { DarkUsePlayer } from '../../contexts/PlayerContextDarkTheme';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
import React from 'react';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    const {
        darkTheme,
        isDark,
    } = DarkUsePlayer();

    return (
        <header className={isDark ? styles.darkHeaderContainer : styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>O melhor para você ouvir, sempre.</p>

            <span>{currentDate}<CgDarkMode onClick={darkTheme} className={styles.darkModeButton} /></span>
        </header>
    );
}