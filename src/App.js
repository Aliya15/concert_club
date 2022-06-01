import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';

const darkTheme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            main: '#262626',
            darker: '#000',
        }
    }
});

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/profile/:name" element={<ProfilePage/>}/>
                        <Route path="/post/:id" element={<PostPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}
