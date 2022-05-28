import * as React from 'react';
import './AboutBlock.scss';
import {useState} from "react";

export default function AboutBlock() {
    const [value, setValue] = useState('');
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <div className='aboutBlock'>
            <div className='aboutBlock_description'>
                <h2>О площадке</h2>
                <p>Современная площадка для проведения концертов и других мероприятий любой сложности.</p>
                <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные
                    задачи любого события,
                    а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
            </div>
            <div className='aboutBlock_form'>
                <h4>Оставить заявку на проведение концерта</h4>
                <form onSubmit={handleSubmit}>
                    <input className='aboutBlock_form_input' type="text" value={value} onChange={handleChange}/>
                    <input className='aboutBlock_form_submit' type="submit" value="Отправить"/>
                </form>
            </div>
        </div>
    )
}