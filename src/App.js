import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
// Pages
import HomeContainer from "./pages/home/HomeContainer";
import { ExploreContainer } from "./pages/explore/ExploreContainer";
import NotificationsContainer from "./pages/notifications/NotificationsContainer";
import { MessagesContainer } from "./pages/messages/MessagesContainer";
import { LIstContainer } from "./pages/list/LIstContainer";
import { ProfileContainer } from "./pages/profile/ProfileContainer";
// Styles
import "./App.scss"



function App() {
    return (
        <BrowserRouter>
        <SideBar />
        <NavBar />
        <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="explore" element={<ExploreContainer />}></Route>
            <Route path="notifications" element={<NotificationsContainer />}></Route>
            <Route path="messages" element={<MessagesContainer />}></Route>
            <Route path="list" element={<LIstContainer />}></Route>
            <Route path="profile" element={<ProfileContainer />}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
