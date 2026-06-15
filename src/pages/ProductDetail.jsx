import { Link, useParams } from "react-router-dom";

export default function ProductDetail(){
    let { id } = useParams()
    
    const foods = [
        {id : 1, name:'Salmon', price: '10$', img:'/src/images/item-1.png' },
        {id : 2, name:'Burger', price: '12$', img:'/src/images/item-2.png' },
        {id : 3, name:'Checkin strips', price: '13$', img:'/src/images/item-3.png' }
    ];
    
    let food = foods.find((item) => item.id == id)
    
    return(
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-64 object-cover" src={food.img} alt={food.name} />
                <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{food.name}</h3>
                    <p className="text-2xl text-green-600 font-bold mb-6">{food.price}</p>
                    <Link to="/" className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors duration-300">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}