import './header.scss';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <header>
            <div className='header'>
                <h1 className='header_title'>Concert Club</h1>
                <div className='header_buttons'>
                    <Button variant="contained"><span>Версия для слабовидящих</span></Button>
                    <Button variant="contained"><span>Мой профиль</span></Button>
                </div>
            </div>
        </header>
    )
}