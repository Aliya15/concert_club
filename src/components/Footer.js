import './header.scss';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer_title'>О группе</h2>
            <p>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и
                на данный момент состоит из Тайлера Джозефа и Джоша Дана.
                Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
        </footer>
    )
}