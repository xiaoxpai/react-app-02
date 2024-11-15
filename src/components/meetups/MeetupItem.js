import styles from './MeetupItem.module.css'
import Card from "../layout/ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";


/**
 *  数据从哪里来？
 *      从父组件MeetupsList.js传递过来的，通过props
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function MeetupItem(props){

    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite =  favoritesCtx.itemIsFavorite(props.id);


    /**
     * useContext hook: 允许建立连接，在这个组件和上下文之间
     */
    function toggleFavoritesStatusHandler(){
        //需要来自上下文的参数，meetup是否取消收藏夹中

        if (itemIsFavorite) {
            //取消收藏
            favoritesCtx.removeFavorite(props.id);
        }else {
            //添加收藏
            favoritesCtx.addFavorite({
                id: props.id,
                name: props.name,
                address: props.address,
                profession: props.profession
            });

        }

    }

    return (
       <li className={styles.item}>
         <Card>
             <div className={styles.content}>
                 <h3>{props.name}</h3>
                 <address>{props.address}</address>
                 <p>{props.profession}</p>
             </div>
             <div className={styles.actions}>
                 <button onClick={toggleFavoritesStatusHandler}>
                     {itemIsFavorite ? '取消收藏': '收藏'}
                 </button>
             </div>
         </Card>
       </li>
    )
}

export default MeetupItem