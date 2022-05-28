import * as React from 'react';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import './ProfilesList.scss'

export default function ProfilesList() {
    const [profiles, setProfiles] = useState();

    const getProfilesList = async () => {
        const list = await fetch('https://my-json-server.typicode.com/aliya15/concert_club/profilesList')
        const listToJson = await list.json();
        await setProfiles(listToJson);
        console.log(listToJson)
    }

    useEffect(() => {
        getProfilesList().then();
        console.log(profiles)
    })

    return (
        <div className='profilesList'>
            <div className='profilesList_title'>
                <h2>Купили билеты</h2>
                <p>932/1000</p>
            </div>
            <div className='profilesList_profiles'>
                {
                    profiles?.map((item) => {
                        return (
                            <div className='profilesList_profiles_item'>
                                <h4>{item.name}</h4>
                                <p>{item.city}</p>
                                <Button>Смотреть профиль</Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

