import '../styles/global.scss'

import styles from '../styles/app.module.scss';

import { Header } from '../components/Header'
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import { DarkPlayerContextProvider } from '../contexts/PlayerContextDarkTheme';

function MyApp({ Component, pageProps }) {
  return (
      <DarkPlayerContextProvider>
        <PlayerContextProvider>
          <div className={styles.wrapper}>
            <main>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </div>
        </PlayerContextProvider>
      </DarkPlayerContextProvider>
  )
}

export default MyApp