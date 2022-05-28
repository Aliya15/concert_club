import * as React from 'react';
import Button from '@mui/material/Button';
import './AboutBlock.scss';

export default function AboutBlock() {
    return (
        <div className='aboutBlock'>
            <div className='aboutBlock_description'>
                <h2>О площадке</h2>
                <p>Современная площадка для проведения концертов и других мероприятий любой сложности.</p>
                <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события,
                    а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
            </div>
            <div className='aboutBlock_form'>
                <h4>Оставить заявку на проведение концерта</h4>
                <form>CITY</form>
                <Button>Отправить</Button>
            </div>
        </div>
    )
}