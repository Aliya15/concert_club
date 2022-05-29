import * as React from 'react';
import {useEffect, useState} from 'react';
import './ProfilesList.scss';
import {useNavigate} from 'react-router-dom';

export default function ProfilesList() {
    const [profiles, setProfiles] = useState();
    const navigate = useNavigate();

    const getProfilesList = async () => {
        const list = await fetch('https://my-json-server.typicode.com/aliya15/concert_club/profilesList');
        const listToJson = await list.json();
        await setProfiles(listToJson);
        console.log(listToJson);
    };

    useEffect(() => {
        getProfilesList().then();
    }, []);

    return (
        <div className="profilesList">
            <div className="profilesList_title">
                <h2>Купили билеты</h2>
                <p>932/1000</p>
            </div>
            <div className="profilesList_profiles">
                {
                    profiles?.map((item, index) => {
                        return (
                            // TODO Chnage index to ID
                            <div key={index} className="profilesList_profiles_item">
                                <h4>{`${item.name} ${item.surname}`}</h4>
                                <p>{item.city}</p>
                                <button onClick={() => navigate(`../profile/${item.name}_${item.surname}`, {
                                    state: {
                                        name: item.name,
                                        surname: item.surname
                                    }
                                })}>
                                    Смотреть профиль
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

