import { Nav } from 'react-bootstrap'
import './LeftMenu.css'


/** Компонент с отображением левого меню */
export const LeftMenu = () => {
    return (
        <>
            <div className="left">
            <img
          className="img-fluid rounded-pill" 
          src='./images/port.jpeg'
          alt="First slide"
        />
            <h5>PROJECTS</h5>
            <Nav className="flex-column">
                <Nav.Link href="/project#website">WEBSITE</Nav.Link>
                <Nav.Link href="/project#programm">PROGRAMM</Nav.Link>
                <Nav.Link href="/project#game">GAME</Nav.Link>
                <Nav.Link href="/project#tehno">TEHNO</Nav.Link>
            </Nav>
            </div>
        </>
    );
};