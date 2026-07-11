import { useState } from 'react';
import { products } from '../../Utils/Products';
import ProductCart from './ProductCart';
import Button from '../../Components/Button/Button';

const Products = ({ headLine }) => {

    const categories = ["Chair","Beds", "Sofa", "Lamp"];
    const [selectedCategory, setSelectedCategory] = useState("Chair");
    const [visibleProducts, setVisibleProducts] = useState(4);
    const filteredProducts = products.filter(product => product.category === selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    const handleLoadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
        console.log("clicked button")
    }

    return (
        <div>
            <div className="section-container">
                <h2 className='text-4xl font-bold text-center my-8'>{headLine}</h2>
                {/* category tabs */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className='flex flex-col md:flex-row items-center md:justify-between justify-center gap-4'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                                    selectedCategory === category ? 'bg-primary text-white' : 'text-secondary'
                                }`}
                                onClick={() => {
                                    handleCategoryClick(category)
                                    setVisibleProducts(4)
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                {/* products grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16'>
                    {
                        filteredProducts.slice(0, visibleProducts).map((product, index) => (
                            <ProductCart key={index} product={product} />
                        ))
                    }
                </div>
                {/* load more button */}
                {
                    visibleProducts < filteredProducts.length && (
                        <div className='flex justify-center items-center mt-8'>
                            <Button onClick={() => handleLoadMore()} text="View All" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;