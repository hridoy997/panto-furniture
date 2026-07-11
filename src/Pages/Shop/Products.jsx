import { products } from '../../Utils/Products';
import ProductCart from './ProductCart';

const Products = ({ headLine }) => {

    const categories = ["Chair","Bed", "Sofa", "Lamp"];

    return (
        <div>
            <div className="section-container">
                <h2 className='text-4xl font-bold text-center my-8'>{headLine}</h2>
                {/* category tabs */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className='flex flex-col md:flex-row items-center md:justify-between justify-center gap-4'>
                        {categories.map((category, index) => (
                            <button key={index} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors`}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                {/* products grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16'>
                    {
                        products.map((product, index) => (
                            <ProductCart key={index} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;