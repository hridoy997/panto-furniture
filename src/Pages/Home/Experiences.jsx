import ExperiencesImg from '../../assets/expricences.png';
import Button from '../../Components/Button/Button';

const Experiences = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            <div className="md:w-1/2 md:h-[541px]">
                <img src={ExperiencesImg} className='w-full h-full ' alt="Experiences" srcset="" />
            </div>
            <div className="md:w-1/2 mx-auto">
                <h3 className='uppercase text-lg font-semibold text-primary mb-4'>Our Experiences</h3>
                <h2 className="capitalize text-4xlmb-4 font-bold md:w-1/2">we provide you the best experience</h2>
                <p className="text-secondary dark:text-white mb-5 md:w-2/3">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials.</p>
                <Button text="More Info" />
            </div>
        </section>
    );
};

export default Experiences;