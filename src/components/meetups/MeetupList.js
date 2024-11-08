import styles from './MeetupList.module.css'
import MeetupItem from "./MeetupItem";


/**
 * 这是一个复用的组件，用于展示所有的meetup列表
 *  所以这个组件，可以是不同的数据源
 *  数据从哪里来？
 *      1. 从父组件AllMeetupsPage传递过来的，通过props
 * @returns {JSX.Element}
 * @constructor
 */
function MeetupList(props) {
    return (
        <ul className={styles.list}>
            {props.meetups.map(meeup =>
                <MeetupItem key={meeup.id}
                    id={meeup.id}
                    name={meeup.name}
                    profession={meeup.profession}
                    address={meeup.address}/>)
            }
        </ul>
    )
}

// 列表是每一个item展示，并且item是一个可复用的组件
export default MeetupList