import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
/*We will use bootstrap grid with Row and Col*/

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        {/*text-center is a bootstrap class in bootstrap.min.css makes element center and py-3 adds padding category 3 */}
                        Copyright &copy; My E-Commerce App
                        {/*&copy is a html tag for copyright sign */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
