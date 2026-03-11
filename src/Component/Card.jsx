import { Link } from "react-router-dom"

function Card(props) {

    const {data} = props
    console.log(data)

    return (
        <>

            <Link to={`/Pdetail/${data.id}`} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-3 cursor-pointer">
                <figure className="overflow-hidden rounded-lg">
                    <img
                        src={data.image}
                        alt="product"
                        className="w-full h-56 object-cover transition duration-300 hover:scale-105"
                    />
                </figure>
                <div className="mt-3">
                    <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
                        {data.title}
                    </h3>
                    <p className="text-red-500 font-bold text-lg">
                        ${data.price}
                    </p>
                </div>
            </Link>

        </>
    )
}

export default Card