"use client";

import { TShirt } from '@/lib/model';
import { getProductImageUrl } from '@/services/Product.service';
import Image from 'next/image';

interface TShirtCardProps {
  product: TShirt;
  isInCart: boolean;
  onAddToCart: (id: number) => void;
}

const ProductCard = ({ product, isInCart, onAddToCart }: TShirtCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-shadow duration-300 p-2 border-2 border-gray-100">
      <div className="h-64 bg-gray-200 relative">
        <Image 
          src={product.image_path} 
          alt={product.name}
          layout='fill'
          objectFit='cover'
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=T-Shirt+Image';
          }}
        />
        {isInCart && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            In Cart
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <div className="flex space-x-1">
            {product.colors.map((color) => (
              <span 
                key={color} 
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes.map((size) => (
            <span 
              key={size} 
              className="px-2 py-1 text-xs bg-gray-100 rounded"
            >
              {size}
            </span>
          ))}
        </div>
        
        <button 
          onClick={() => onAddToCart(product.id)}
          className={`w-full py-2 px-4 rounded transition-colors duration-300 cursor-pointer ${
            isInCart 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#151515] hover:bg-green-600 text-white'
          }`}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;