import {Link} from "react-router-dom";
import styles from './MainNavigation.module.css'


function MainNavigation() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>New-meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation