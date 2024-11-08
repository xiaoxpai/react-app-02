import styles from './MeetupItem.module.css'

/**
 *  数据从哪里来？
 *      从父组件MeetupsList.js传递过来的，通过props
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function MeetupItem(props){
    return (
       <li className={styles.item}>
           <div className={styles.content}>
               <h3>{props.name}</h3>
               <address>{props.address}</address>
                <p>{props.profession}</p>
           </div>
           <div className={styles.actions}>
               <button>To Favorites</button>
           </div>
       </li>
    )
}

export default MeetupItem