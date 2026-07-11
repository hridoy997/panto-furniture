import Products from '../Shop/Products';
import Experiences from './Experiences';
import Hero from './Hero';
import Materials from './Materials';
import WhyChoosingUs from './WhyChoosingUs';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChoosingUs />
            <Products headLine="Best Selling Product" />
            <Experiences />
            <Materials />
        </>
    )
}

export default Home
