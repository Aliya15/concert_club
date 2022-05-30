import './ProfilePosts.scss';

export default function ProfilePosts({posts}) {
    return (
        <div className="profile-posts">
            <div className="profile-posts_wrapper">
                <h2>Посты</h2>
                <div className="profile-posts_item">
                    {
                        posts?.map((item) => (
                            <div key={item.id} className="profile-posts_item_info">
                                <div className="profile-posts_item_title">
                                    <h2>{item.title}</h2>
                                    <p>{item.date}</p>
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