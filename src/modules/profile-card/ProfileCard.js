import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './ProfileCard.scss';
import apiClient from '../../api/ApiClient';
import ProfileHeader from './components/profile-name/ProfileHeader';

export default function ProfileCard() {
    const params = useParams();
    const [chosenProfile, setChosenProfile] = useState();
    const [profilesPosts, setProfilesPosts] = useState();
    const userId = params.name;

    const getProfile = async () => {
        const list = await apiClient('/profiles-list');
        const profile = await list.data?.find((profile) => profile.id === userId);
        await setChosenProfile(profile);
    };

    const getPosts = async () => {
        const posts = await apiClient('/posts');
        const postsToJson = await posts.data;
        postsToJson.filter(post => post.userId === userId);
        await setProfilesPosts(postsToJson);
    };

    useEffect(() => {
        getProfile();
        getPosts();
    }, []);

    return (
        <>
            <ProfileHeader profileCard={chosenProfile}/>

            <div className="profile-posts">
                <div className="profile-posts_wrapper">
                    <h2>Посты</h2>
                    <div className="profile-posts_item">
                        {profilesPosts?.map((item) => {
                            return (
                                <div key={item.id} className="profile-posts_item_info">
                                    <div className="profile-posts_item_title">
                                        <h2>{item.title}</h2>
                                        <p>{item.date}</p>
                                    </div>
                                    <p className="profile-posts_item_text">{item.text}</p>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </div>
            <div className="profile-publications">
                <div className="profile-publications_wrapper">
                    <h2>Публикации</h2>
                    <div className="profile-publications_block">
                        <div className="profile-publications_item"></div>
                        <div className="profile-publications_item"></div>
                        <div className="profile-publications_item"></div>
                        <div className="profile-publications_item"></div>
                        <div className="profile-publications_item"></div>
                        <div className="profile-publications_item"></div>
                    </div>
                </div>
            </div>
        </>
    );
}