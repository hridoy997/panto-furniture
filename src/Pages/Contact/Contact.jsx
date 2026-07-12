import ContactImg from '../../assets/contact-background.jpg';
import Materials from '../Home/Materials';
import Testimonials from '../Home/Testimonials';

const Contact = () => {
    return (
        <section>
            {/* banner */}
            <div className='w-full h-[400px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url(${ContactImg})` }} >
                <h1 className='text-5xl font-bold underline underline-offset-4'>Contact Us Page</h1>
            </div>
            <Materials />
            <Testimonials />
        </section>
    );
};

export default Contact;