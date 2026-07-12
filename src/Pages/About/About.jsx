import AboutImg from '../../assets/about-background.jpg';
import Experiences from '../Home/Experiences';

const About = () => {
    return (
        <section>
            {/* banner */}
            <div className='w-full h-[400px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url(${AboutImg})` }} >
                <h1 className='text-5xl font-bold underline underline-offset-4'>About Us Page</h1>
            </div>
            <Experiences />
        </section>
    );
};

export default About;