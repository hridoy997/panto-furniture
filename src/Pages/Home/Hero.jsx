import { FaSearch } from 'react-icons/fa';
import Banner from '../../assets/banner.png'

const Hero = () => {
    return (
        <section className="h-screen relative w-full bg-cover bg-center text-white" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="px-2 pt-24 md:pt-44 text-center space-y-6 md:w-1/2 mx-auto">
                <h1 className="text-4xl lg:text-6xl font-medium leading-snug lg:leading-tight">Make your interior more minimalistic & modern</h1>
                <p className="text-2xlfont-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                {/* search field */}
                <div className="relative inline-block z-30">
                    <input type="text" placeholder="Search furniture..." className="w-full md:w-80 px-6 py-2 bg-white/25 placeholder:text-white rounded-full border border-gray-300 focus:outline-none" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
                        <FaSearch />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
