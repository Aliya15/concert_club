import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage";
import OpenProfile from "./components/OpenProfile";
import NotFoundTheLocation from "./components/NotFoundTheLocation";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/profile/:name" element={<OpenProfile/>}/>
                    <Route path="*" element={<NotFoundTheLocation/>}/>
                </Routes>
            </Router>
        </div>
    );
}
