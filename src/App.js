// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {

    //url localhost:3000/
    ///new-meetups
    ///favorites
    return (
        <Layout>
            {/*<MainNavigation/>*/}
            <Routes>
                <Route path="/" element={<AllMeetupsPage/>}/>
                <Route path="/new-meetups" element={<NewMeetupsPage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Routes>

        </Layout>
    );
}

export default App;

//重点!!! MainNavigation已经在Layout中引入了，所以这里不需要再引入了