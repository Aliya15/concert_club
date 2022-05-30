import './ProfilePosts.scss';
import {useNavigate} from 'react-router-dom';

export default function ProfilePosts({posts}) {
    const navigate = useNavigate();
    return (
        <div className="profile-posts">
            <div className="profile-posts_wrapper">
                <h2 className="profile-posts_title">Посты</h2>
                <div className="profile-posts_item">
                    {
                        posts?.map((item) => (
                            <div key={item.id} className="profile-posts_item_info" onClick={() => navigate(`../post/${item.id}`)}>
                                <div className="profile-posts_item_title">
                                    <h2 className="profile-posts_item_title-text">{item.title}</h2>
                                    <p className="profile-posts_item_title-date">{item.date}</p>
                                </div>
                                <p className="profile-posts_item_text">{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}