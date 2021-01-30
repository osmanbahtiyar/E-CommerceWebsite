import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
/*We will use bootstrap grid with Row and Col*/
import { LinkContainer } from 'react-router-bootstrap';
/*we will use LinkContainer instead of href*/

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                {/*bg-> background, variant->text color */}
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>My E-CommerceApp</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            {/*ml-auto -> margin left auto, used to attach right side */}
                            <LinkContainer to='/cart'>
                                <Nav.Link className='fas fa-shopping-cart'>
                                    {/*fas->font awesome, fa-shopping-car -> shopping cart icon in font awesome */}
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link className='fas fa-user'>
                                    {/*fas->font awesome, fa-user -> user icon in font awesome */}
                                    SignIn
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
