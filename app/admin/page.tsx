// app/admin/products/page.tsx
"use client";

import { createProduct, uploadProductImage } from '@/services/Product.service';
import { useState } from 'react';

export default function ProductAdminPage() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    sizes: ['S', 'M', 'L'],
    colors: ['#000000'],
    image: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let imagePath = '';
      if (formData.image) {
        imagePath = await uploadProductImage(formData.image);
      }

      await createProduct({
        ...formData,
        image_path: imagePath,
        price: Number(formData.price)
      });

      alert('Product created successfully!');
      setFormData({
        name: '',
        price: 0,
        description: '',
        sizes: ['S', 'M', 'L'],
        colors: ['#000000'],
        image: null
      });
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        {/* Form fields for product details */}
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        {/* Add other form fields similarly */}
        
        <div className="mb-4">
          <label className="block mb-2">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Creating...' : 'Create Product'}
        </button>
      </form>
    </div>
  );
}