import Products from '../Shop/Products';
import Experiences from './Experiences';
import Hero from './Hero';
import WhyChoosingUs from './WhyChoosingUs';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChoosingUs />
            <Products headLine="Best Selling Product" />
            <Experiences />
        </>
    )
}

export default Home
