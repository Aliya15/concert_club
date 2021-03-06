import * as React from 'react';
import Button from '@mui/material/Button';
import './poster.scss';

export default function Poster() {
    return (
        <section className="poster">
            <div className="poster_wrapper">
                <div className="poster_title">
                    <h2>Twenty One Pilots</h2>
                    <h3>22.02.23 в 21:00</h3>
                </div>
                <div className="poster_button">
                    <Button variant="contained" color="secondary"><span>Купить билет</span></Button>
                </div>
            </div>
            <div className="poster_shadow"></div>
        </section>
    );
}