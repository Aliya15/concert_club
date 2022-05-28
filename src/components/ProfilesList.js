import * as React from 'react';
import Button from '@mui/material/Button';

export default function ProfilesList() {

    return (
        <div className='profilesList'>
            <div className='profilesList_title'>
                <h2>Купили билеты</h2>
                <p>932/1000</p>
            </div>
            <div className='profilesList_profiles'>
                <h4>NAME</h4>
                <p>CITY</p>
                <Button>Смотреть профиль</Button>
            </div>
        </div>
    )
}