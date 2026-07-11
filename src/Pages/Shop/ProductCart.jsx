import { FiPlus } from "react-icons/fi";
import Rating from "../../Components/Rating/Rating";
import { getImgUrl } from "../../Utils/getImageURL";

const ProductCart = ({product}) => {
    return (
        <div>
            <div className='bg-[#FFFFFF] '>
                <img src={getImgUrl(product.imageUrl)} alt={product.name} />
            </div>
            <div className="p-6 bg-white dark:bg-black shadow-sm">
                <h4 className="text-base mb-1">{product.category}</h4>
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <Rating rating={product.rating} />
                <div className="flex items-center justify-between mt-5">
                    <p className="text-secondary dark:text-white font-bold text-lg">
                        <sup>$</sup>
                        {product.price.toFixed(2)}
                    </p>
                    <button className="bg-secondary text-white p-2 rounded-full hover:bg-black/65">
                        <FiPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;