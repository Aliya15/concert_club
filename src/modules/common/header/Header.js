import './header.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header_wrapper">
                <h1 className="header_title" onClick={() => navigate(`/`)}>Concert Club</h1>
                <div className="header_buttons">
                    <Button variant="contained" color="secondary"><span>Версия для слабовидящих</span></Button>
                    <Button variant="contained" color="secondary"><span>Мой профиль</span></Button>
                </div>
            </div>
        </header>
    );
}