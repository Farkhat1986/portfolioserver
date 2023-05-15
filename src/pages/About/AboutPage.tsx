import { Accordion } from 'react-bootstrap'
import './AboutPage.css'

/** Страница "О нас". */
export const AboutPage = () => {
    return (
        <>
        <div className='about'>
            <h1>HELLO I,AM FARHAT</h1>
            <h5>About Me</h5>
            <h4>Приветствую на Моей страничке. Здесь Вы познакомитесь со Мной! Технологии, которые Я использую! Самое главное Моё ХОББИ!</h4>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>ТЕХНОЛОГИИ</Accordion.Header>
                    <Accordion.Body>
                    В своих работах Я использую языки JavaScript, Python, а так же HTML, CSS.
                    Технологии REACT SASS/SCSS BOOTSTRAP EXPRESS REACT ROUTER DOM
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>ХОББИ</Accordion.Header>
                    <Accordion.Body>
                    Мои Хобби это Постоянное Обучение программированию, а так же занятия спортом (тяжелая атлетика)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>ОБРАЗОВАНИЕ</Accordion.Header>
                    <Accordion.Body>
                    Обучение УЛГТУ "ВЕБ Программирование"
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </>
    );
};