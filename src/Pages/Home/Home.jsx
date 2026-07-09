import Products from '../Shop/Products';
import Hero from './Hero';
import WhyChoosingUs from './WhyChoosingUs';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChoosingUs />
            <Products headLine="Best Selling Product" />
        </>
    )
}

export default Home
