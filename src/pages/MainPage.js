import Header from '../modules/common/header/Header';
import Poster from '../modules/poster/Poster';
import ProfilesList from '../modules/profiles-list/ProfilesList';
import AboutBlock from '../modules/about-us/AboutBlock';
import Footer from '../modules/common/footer/Footer';

export default function MainPage() {
    return (
        <>
            <Header/>
            <main>
                <Poster/>
                <ProfilesList/>
                <AboutBlock/>
            </main>
            <Footer/>
        </>
    );
}