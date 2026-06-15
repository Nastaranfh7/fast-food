import { Link } from "react-router-dom";

export default function Home(){
    const food = [
        {id : 1, name:'Salmon', price: '10$', img:'/src/images/item-1.png' },
        {id : 2, name:'Burger', price: '12$', img:'/src/images/item-2.png' },
        {id : 3, name:'checkin strips', price: '13$', img:'/src/images/item-3.png' }
    ];
    
    return(
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Fast Food</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {
                    food.map(
                        (item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img className="w-full h-48 object-cover" src={item.img} alt={item.name} />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-lg text-green-600 font-bold mb-4">{item.price}</p>
                                    <Link to={`/product/${item.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">View Details</Link>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}