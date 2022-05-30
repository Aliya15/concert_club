import * as React from 'react';
import {useState} from 'react';
import './AboutBlock.scss';

export default function AboutBlock() {
    const [value, setValue] = useState('');
    const handleSubmit = () => {
    };

    const handleChange = () => {
    };

    return (
        <section className="about-block">
            <div className="about-block_wrapper">
                <div className="about-block_description">
                    <h2>О площадке</h2>
                    <p>Современная площадка для проведения концертов и других мероприятий любой сложности.</p>
                    <p>
                        Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все
                        основные
                        задачи любого события,
                        а также современное оборудование, соответствующее самым высоким мировым стандартам.
                    </p>
                </div>
                <div className="about-block_form">
                    <h4>Оставить заявку на проведение концерта</h4>
                    <form onSubmit={handleSubmit}>
                        <input className="about-block_form_input" type="text" value={value} onChange={handleChange}/>
                        <input className="about-block_form_submit" type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        </section>
    );
}