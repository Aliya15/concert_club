import apiClient from '../../api/ApiClient';
import {useEffect, useState} from 'react';
import './Post.scss';
import PostComments from './components/post-comments/PostComments';

export default function Post() {
    const [detailedPost, setDetailedPost] = useState();

    const getPosts = async () => {
        const posts = await apiClient('/detailed-post');
        const postToJson = await posts.data;
        await setDetailedPost(postToJson);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="post">
            <h2 className="post_title">{detailedPost?.title}</h2>
            <div className="post_meta-information">
                <span className="post_author">{detailedPost?.author}</span>
                <span className="post_date">{detailedPost?.date}</span>
            </div>
            <p className="post_text">{detailedPost?.text}</p>

            <PostComments/>
        </div>
    );
}