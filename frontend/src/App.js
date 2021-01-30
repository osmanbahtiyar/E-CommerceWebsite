import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// we will use these as router
import ProductScreen from './screens/ProductScreen';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/' component={HomeScreen} exact />

                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

/*We added some padding to top and bottom with y axis */

/*Container is a react-bootstrap element*/

/*With the help of Route we can set which component will shown in this path, if we not type exact it shows the component in every / path but we want it only in real / screen*/

/*With the help of this Route we can access the specified products screen with :id placeholder */

export default App;
