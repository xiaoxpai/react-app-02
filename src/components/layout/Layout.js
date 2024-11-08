import styles from './Layout.module.css'
import MainNavigation from "./MainNavigation";

/**
 *  这是一个布局组件，用于包裹整个页面
 *      这里的props.children是指的是Layout组件的子组件（也就是<Routers>this</Routers>）
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Layout(props){
    return (
        <div>
            <MainNavigation/>
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    )
}



export default Layout