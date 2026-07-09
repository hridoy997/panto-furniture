import { FaSearch } from 'react-icons/fa';
import Banner from '../../assets/banner.png'
import TooltipButton from '../../Components/TooltipButton/TooltipButton';

const Hero = () => {
    return (
        <section className="h-screen relative w-full bg-cover bg-center text-white" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="px-2 pt-24 md:pt-44 text-center space-y-6 md:w-1/2 mx-auto">
                <h1 className="text-4xl lg:text-6xl font-medium leading-snug lg:leading-tight">Make your interior more minimalistic & modern</h1>
                <p className="text-2xl font-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                {/* search field */}
                <div className="relative inline-block z-30">
                    <input type="text" placeholder="Search furniture..." className="w-full md:w-80 px-6 py-2 bg-white/25 placeholder:text-white rounded-full border border-gray-300 focus:outline-none" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
                        <FaSearch />
                    </div>
                </div>
            </div>
            {/* bottom blur effect */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />
            {/* hover button for displaying tooltip box  */}
            <div className="hidden lg:block absolute bottom-40 left-24">
                <TooltipButton position="bottom" colors={['bg-red-700', 'bg-green-700', 'bg-blue-700']} />
            </div>
            <div className="hidden lg:block absolute bottom-52 left-96">
                <TooltipButton position="bottom" colors={['bg-red-700', 'bg-green-700', 'bg-blue-700']} />
            </div>
            <div className="hidden lg:block absolute bottom-24 right-[820px]">
                <TooltipButton position="bottom" colors={['bg-red-700', 'bg-green-700', 'bg-blue-700']} />
            </div>
            <div className="hidden lg:block absolute bottom-12 right-14">
                <TooltipButton position="bottom" colors={['bg-red-700', 'bg-green-700', 'bg-blue-700']} />
            </div>
        </section>
    )
}

export default Hero
