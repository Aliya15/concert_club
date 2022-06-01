import './header.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const bodyElement = document.body;

    const handleEnlargeText = () => {
        if (bodyElement.classList.contains('_visually-impaired')) {
            bodyElement.classList.remove('_visually-impaired');
        } else {
            bodyElement.classList.add('_visually-impaired')
        }
    };

    return (
        <header className="header">
            <div className="header_wrapper">
                <h1 className="header_title" onClick={() => navigate(`/`)}>Concert Club</h1>
                <div className="header_buttons">
                    <Button variant="contained" color="secondary" onClick={handleEnlargeText}>Версия для слабовидящих</Button>
                    <Button variant="contained" color="secondary">Мой профиль</Button>
                </div>
            </div>
        </header>
    );
}