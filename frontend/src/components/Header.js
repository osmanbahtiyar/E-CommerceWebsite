import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
/*We will use bootstrap grid with Row and Col*/

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                {/*bg-> background, variant->text color */}
                <Container>
                    <Navbar.Brand href='/'>My E-CommerceApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            {/*ml-auto -> margin left auto, used to attach right side */}
                            <Nav.Link
                                href='/cart'
                                className='fas fa-shopping-cart'
                            >
                                {/*fas->font awesome, fa-shopping-car -> shopping cart icon in font awesome */}
                                Cart
                            </Nav.Link>
                            <Nav.Link href='/login' className='fas fa-user'>
                                {/*fas->font awesome, fa-user -> user icon in font awesome */}
                                SignIn
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
