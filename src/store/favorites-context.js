import {createContext, useState} from "react";
/**
 *  createContext 上下文
 *  应用程序访问状态管理解决方案的上下文
 *  初始化该组件
 *
 */

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

/**
 * 收藏夹上下文提供者
 * 负责管理收藏夹上下文的状态，包括更新上下文值
 * @constructor
 */
export function FavoritesContextProvider(props){
    //管理收藏的状态
    const [useFavorites,setUserFavorites] = useState([]);



    /**
     * 添加收藏处理
     * @param favoriteMeetup
     */
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    /**
     * 删除收藏处理
     * @param meetupId
     */
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    /**
     * 判断是否是收藏
     * @param meetupId
     * @returns {boolean}
     */
    function itemIsFavoriteHandler(meetupId) {
        return useFavorites.some(meetup => meetup.id === meetupId);
    }

    //传递上下文需要更新的值
    const context={
        favorites: useFavorites,
        totalFavorites: useFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };




    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;

