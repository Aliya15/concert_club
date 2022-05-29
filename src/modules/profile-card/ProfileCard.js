import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './ProfileCard.scss';
import apiClient from '../../api/ApiClient';

export default function ProfileCard() {
    const params = useParams();
    const [chosenProfile, setChosenProfile] = useState();
    const [profilesPosts, setProfilesPosts] = useState();
    const navName = params.name;
    const name = navName.split('_')[0];
    const surname = navName.split('_')[1];

    const getProfile = async () => {
        const list = await apiClient('/profile');
        const listToJson = await list.data;
        await setChosenProfile(listToJson);
    };

    const getPosts = async () => {
        const posts = await apiClient('/posts');
        const postsToJson = await posts.data;
        postsToJson.filter(item => item.name === name && item.surname === surname);
        await setProfilesPosts(postsToJson);
    };

    useEffect(() => {
        getProfile().then();
        getPosts().then();
    }, []);

    return (
        <>
            <div>
                <div className="profile-name">
                    <div className="profile-name_frame"></div>
                    <div className="profile-name_title">
                        <h1>{`${surname} ${name}`}</h1>
                    </div>
                    <div className="profile-name_frame"></div>
                </div>
                <div className="profile-information">
                    <div className="profile-information_frame"></div>
                    <div className="profile-information_item">
                        <p>{chosenProfile?.city}</p>
                    </div>
                    <div className="profile-information_item">
                        <p>{chosenProfile?.email}</p>
                    </div>
                    <div className="profile-information_item">
                        <p>{chosenProfile?.phone}</p>
                    </div>
                    <button className="profile-information_button">Написать сообщение</button>
                    <button className="profile-information_button second">Предложить сходить на концерт</button>
                    <div className="profile-information_frame"></div>
                </div>
            </div>
            <div className="profile-posts">
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
            <div className="profile-publications">
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
        </>
    );
}