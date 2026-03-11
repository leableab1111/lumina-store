import { useState, useEffect } from "react";
import Card from "../Component/Card"
import axios from "axios"

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products?limit=8')
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                console.log('Error:', error)
            }
        }
        fetchData()
    }, [])




    return (
        <>

            <div className='font-jost'>

                <div style={{backgroundImage: "url('./slide.png')"}} className='bg-[#FFCAA6] bg-center bg-cover lg:bg-contain bg-no-repeat flex items-center h-screen px-4 lg:px-40'>
                    <div>
                        <p className='text-xl font-blod'>New Collection</p>
                        <h1 className='text-6xl lg:text-7xl font-bold mb-4'>Luxury Without <br /> Label</h1>
                        <p>Explore new-in Product and best Seller</p>
                        <button className='bg-primary text-white px-8 py-2'>Views Collection</button>
                    </div>
                </div>

                <div className='my-20 max-w-[90%] lg:max-w-5xl mx-auto'>
                    <h2 className='text-center text-3xl font-bold'>Best Seller</h2>
                    <p className='text-center'>Explore Seller Product</p>

                    <div className='grid grid-cols-1  grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mt-5'>

                        {
                            data?.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                        }



                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2 border-1 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300 shadow-md hover:shadow-lg">
                        Explore More
                    </button>
                </div>




            </div>


        </>
    )
}

export default Home