import './PostCommentItem.scss';

export default function PostCommentItem({comment}) {

    return (
        <div className="post-comment-item">
            <p className="post-comment-item_author">{comment?.name}</p>
            <p className="post-comment-item_comment">{comment?.comment}</p>
        </div>
    );
}