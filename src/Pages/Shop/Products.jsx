import React from 'react';

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
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {/* product card */}
                    <div className='bg-[#EEEEEE] rounded-lg p-4'>
                        <img src="https://via.placeholder.com/300x200" alt="Product" className='w-full h-48 object-cover rounded-lg mb-4' />
                        <h3 className='text-lg font-semibold mb-2'>Product Name</h3>
                        <p className='text-gray-600 mb-2'>$99.99</p>
                        <button className='bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors'>Add to Cart</button>
                    </div>
                    {/* Repeat product card as needed */}
                </div>
            </div>
        </div>
    );
};

export default Products;