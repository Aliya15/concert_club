import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './ProfileCard.scss';
import apiClient from '../../api/ApiClient';

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
            <div className="profile-name">
                <div className="profile-name_wrapper">
                    <div className="profile-name_frame"></div>
                    <div className="profile-name_title">
                        <h1>{chosenProfile ? `${chosenProfile?.surname} ${chosenProfile?.name}` : ''}</h1>
                    </div>
                    <div className="profile-name_frame"></div>
                </div>

                <div className="profile-information">
                    <div className="profile-information_wrapper">
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
                    </div>
                </div>
            </div>

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