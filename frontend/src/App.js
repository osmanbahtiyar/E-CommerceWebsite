import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                {/*We added some padding to top and bottom with y axis */}
                <Container>
                    {/*Container is a react-bootstrap element*/}
                    <h1>Hello I am Osman</h1>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
