import PostCommentItem from '../post-comment-item/PostCommentItem';
import './PostComments.scss';
import PostCommentDialog from '../post-comment-dialog/PostCommentDialog';
import apiClient from '../../../../api/ApiClient';
import {useEffect, useState} from 'react';

export default function PostComments() {
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const comments = await apiClient('/post-comments');
        const postToJson = await comments.data;
        await setComments(postToJson);
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="post-comments">
            <h3 className="post-comments_title">Коментарии</h3>
            {comments?.map((comment) => (<PostCommentItem key={comment.id} comment={comment}/>))}
            <PostCommentDialog/>
        </div>
    );
}