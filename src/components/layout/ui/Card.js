import styles from './Card.module.css'

/**
 *  卡片组件
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Card(props){
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default Card