import './ProfileHeader.scss';

export default function ProfileHeader({profileCard}) {
    return (
        <div className="profile-header">
            <div className="profile-header_wrapper">
                <div className="profile-header_frame"></div>
                <div className="profile-header_title">
                    <h1>{profileCard ? `${profileCard?.surname} ${profileCard?.name}` : ''}</h1>
                </div>
                <div className="profile-header_frame"></div>
            </div>

            <div className="profile-header_information">
                <div className="profile-header_information_wrapper">
                    <div className="profile-header_information_item">
                        <p>{profileCard?.city}</p>
                    </div>
                    <div className="profile-header_information_item">
                        <p>{profileCard?.email}</p>
                    </div>
                    <div className="profile-header_information_item">
                        <p>{profileCard?.phone}</p>
                    </div>
                    <button className="profile-header_information_button">Написать сообщение</button>
                    <button className="profile-header_information_button second">Предложить сходить на концерт</button>
                </div>
            </div>
        </div>
    );
}