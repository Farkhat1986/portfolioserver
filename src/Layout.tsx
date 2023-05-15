import { Container, Navbar, Nav, Row, Col } from "react-bootstrap"
import { LeftMenu } from "./components/LeftMenu/LeftMenu"
import { NavLink, Outlet } from "react-router-dom"
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';


/** Шаблон. */
export const Layout = () => {
    return (
        <>
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-end">
                <Container>
                    <Navbar.Brand>
                        PORTFOLIO BAYRAMOV FARHAT 
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            HOME
                        </NavLink>
                        <NavLink to={'project'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            PROJECT
                        </NavLink>
                        <NavLink to={'about'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            ABOUT FARHAT 
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row style={{ marginTop: '30px'}}>
                    <Col sm={2} md={2} lg={2}>
                        <LeftMenu />
                    </Col>
                    <Col style={{ backgroundColor: 'BlueViolet' }} sm={10} md={10} lg={10}>
                        <Outlet />
                    </Col>
                    <Col style={{ marginTop: '30px'}}>
                        <footer />
                    </Col>
                </Row>
            </Container>
            <footer>
            <MDBFooter className='bg-dark text-center text-white'>
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://github.com/Farkhat1986'>
          PORTFOLIO BAYRAMOV FARHAT
        </a>
      </div>
    </MDBFooter>
                    
            </footer>
        </div>    
        </>
    );
};