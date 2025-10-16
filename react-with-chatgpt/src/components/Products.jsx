import React from 'react'
import { useState, useEffect } from 'react';


function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products');

                if(!response.ok){
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setProducts(data);
            } catch(err){
                setError(err.message);
            }finally {
                setLoading(false);
            }

        }
        fetchProducts();
    }, [])

    if(loading) return <p>Loading Products....</p>;
    if(error) return <p>Error: {error}</p>;

  return (
    <div className='p-4 grid grid-cols-2 md:grid-cols-4 gap-6 mt-[50px]'>
        
        {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-3"
          />
          <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600 font-medium">${product.price}</p>
        </div>
      ))}
        

    </div>
  )
}

export default Products