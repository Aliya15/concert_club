import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './ProfileCard.scss';
import apiClient from '../../api/ApiClient';
import ProfileHeader from './components/profile-header/ProfileHeader';
import ProfilePosts from './components/profile-posts/ProfilePosts';
import ProfilePublications from './components/profile-publications/ProfilePublications';

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
            <ProfilePosts posts={profilesPosts}/>
            <ProfilePublications/>
        </>
    );
}