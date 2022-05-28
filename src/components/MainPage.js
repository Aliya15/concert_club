import Header from "./Header";
import Poster from "./Poster";
import ProfilesList from "./ProfilesList";
import AboutBlock from "./AboutBlock";
import Footer from "./Footer";


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
    )
}