import Button from '../../Components/Button/Button';
import Material1 from '../../assets/material1.png';
import Material2 from '../../assets/material2.png';
import Material3 from '../../assets/material3.png';

const Materials = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            <div className="md:w-1/2 mx-auto">
                <h3 className='uppercase text-lg font-semibold text-primary mb-4'>Materials</h3>
                <h2 className="capitalize text-4xl mb-4 font-bold md:w-1/2">Very serious materials for making furniture</h2>
                <p className="text-secondary dark:text-white mb-5 md:w-2/3">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <Button text="More Info" />
            </div>
            <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end  items-center">
                <div>
                    <img src={Material1} className='' alt="Material 1" srcset="" />
                    <img src={Material2} className='' alt="Material 2" srcset="" />
                </div>
                <div className='md:col-span-2 col-span-1'>
                    <img src={Material3} className='w-full md:h-[541px]' alt="Material 3" srcset="" />
                </div>
            </div>
        </section>
    );
};

export default Materials;