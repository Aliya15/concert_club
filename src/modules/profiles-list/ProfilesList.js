import * as React from 'react';
import {useEffect, useState} from 'react';
import './ProfilesList.scss';
import {useNavigate} from 'react-router-dom';
import apiClient from '../../api/ApiClient';

export default function ProfilesList() {
    const [profiles, setProfiles] = useState();
    const navigate = useNavigate();

    const getProfilesList = async () => {
        const list = await apiClient('/profiles-list');
        const listToJson = await list.data;
        await setProfiles(listToJson);
    };

    useEffect(() => {
        getProfilesList();
    }, []);

    return (
        <section className="profiles-list">
            <div className="profiles-list_wrapper">
                <div className="profiles-list_title">
                    <h2>Купили билеты</h2>
                    <div className="profiles-list_counter">
                        <span className="profiles-list_counter-value">932/</span>
                        <span className="profiles-list_counter-value _total">1000</span>
                    </div>
                </div>
                <div className="profiles-list_profiles">
                    {
                        profiles?.map((item) => {
                            return (
                                <div key={item.id} className="profiles-list_profiles_item">
                                    <h4>{`${item.name} ${item.surname}`}</h4>
                                    <p>{item.city}</p>
                                    <button onClick={() => navigate(`../profile/${item.id}`, {
                                        state: {
                                            ...item
                                        }
                                    })}
                                    >
                                        Смотреть профиль
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

