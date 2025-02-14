"use client"


import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data as Product[]);
      }
    }
    console.log(products.length)
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
