import {useContext} from "react";
import  FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";


function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);

    //如果没有收藏的话，提示，你可以添加一些收藏
    let content;
    if (favoritesCtx.totalFavorites ===0){
        content = <p>You got no favorites yet. Start adding some?</p>
    }else {
        //如果有收藏的话，显示收藏列表
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }


    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;