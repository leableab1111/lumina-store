import { Link, useParams } from "react-router-dom";
import useGetoneProduct from "../Hook/useGetoneProduct";

function ProductDetail() {

    const route = useParams()
    const {data, isLoading, qty, increase, decrease} = useGetoneProduct(route.id)

    return (
        <>

            {isLoading && (
                <div className="flex items-center justify-center my-10">
                    <div className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-primary animate-spin"></div>
                    <p>Loading...</p>
                </div>
            )}

            {
                isLoading == false && (
                    <div>

                        <div className="bg-gray-100 py-3">
                            <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-2 text-gray-600">
                                <Link to="/" className="hover:text-primary">Home</Link>

                                <span>›</span>

                                <Link to="/products" className="hover:text-primary">
                                    Product
                                </Link>

                                <span>›</span>

                                <span className="font-semibold text-gray-800">
                                    Men Shoes
                                </span>
                            </div>
                        </div>


                        <div className="my-14 max-w-[90%] lg:max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-10 items-start">

                                <div className="bg-white p-4 rounded-xl shadow-md">
                                    <img
                                        src={data.image}
                                        alt="product"
                                        className="w-full rounded-lg object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <div className="space-y-4">

                                    <h1 className="text-3xl font-bold text-gray-800">
                                        Men's Fashion Shoes
                                    </h1>

                                    <p className="text-gray-500">
                                        {data.title}
                                    </p>


                                    <div className="text-2xl font-bold text-red-500">
                                        ${data.price}
                                    </div>

                                    <div className="flex gap-4 pt-4">

                                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                            <button onClick={decrease} className="px-3 py-2 bg-gray-100 hover:bg-gray-200"> -</button>

                                            <span className="px-4 font-semibold">{qty}</span>

                                            <button onClick={increase} className="px-3 py-2 bg-gray-100 hover:bg-gray-200"> + </button>
                                        </div>

                                        <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition">
                                            Add to Cart
                                        </button>

                                        <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
                                            Buy Now
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                )
            }


        </>
    );
}

export default ProductDetail;