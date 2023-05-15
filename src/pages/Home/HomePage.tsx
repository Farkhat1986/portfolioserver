import './HomePage.css'
import { Categories } from '../../components/Categories/Categories'
import { website, programm, game, tehno } from '../../orders'
import Carousel from 'react-bootstrap/Carousel';

/** Главная страница. */
export const HomePage = () => {
    return (
        <>
            <div className='hi'>
                
            <h1>HELLO I,AM FARHAT</h1>
            <h2>I AM A DEVELOPER OF WEBSITES PROGRAMS AND GAMES</h2>
            </div>

            <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./images/two.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PROJECTS</h3>
          <h3>WEBSITE</h3>
          <p>Проекты разработанных сайтов</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/two.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>PROJECTS</h3>
          <h3>PROGRAMM</h3>
          <p>Разработанные программы и утилиты</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./images/two.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>PROJECTS</h3>
          <h3>GAME</h3>
          <p>
            Проекты разработанных игр
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./images/two.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PROJECTS</h3>
          <h3>TEHNO</h3>
          <p>Технологии используемые в проектах</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        
        </>
    );
};