import Card from "../Component/Card";
import useGetAllProduct from "../Hook/useGetAllProduct";

function Products() {

    const {data, isLoading} = useGetAllProduct()

    return (
        <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">

            <h1 className="text-center text-3xl font-bold uppercase">
                All Products
            </h1>


            {isLoading && (
                <div className="flex items-center justify-center my-10">
                    <div className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-primary animate-spin"></div>
                    <p>Loading...</p>
                </div>
            )}

            {!isLoading && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">

                    {data?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}

                </div>
            )}

        </div>
    );
}

export default Products;