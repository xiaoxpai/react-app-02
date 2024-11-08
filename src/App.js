// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {

    //url localhost:3000/
    ///new-meetups
    ///favorites
    return (
        <div>
            <MainNavigation/>
            <Routes>
                <Route path="/" element={<AllMeetupsPage/>}/>
                <Route path="/new-meetups" element={<NewMeetupsPage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
