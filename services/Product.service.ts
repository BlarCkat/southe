// services/productService.ts
import { supabase } from '@/lib/supabase';
import { TShirt } from '@/lib/model';

export const fetchProducts = async (): Promise<TShirt[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return data || [];
};

export const getProductImageUrl = (imagePath: string): string => {
  const { data } = supabase
    .storage
    .from('product-images')
    .getPublicUrl(imagePath);
  
    console.log(data)
  return data.publicUrl;
};

export const uploadProductImage = async (file: File): Promise<string> => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase
    .storage
    .from('product-images')
    .upload(fileName, file);

  if (error) {
    console.error('Error uploading image:', error);
    throw error;
  }

  return data.path;
};

export const createProduct = async (product: Omit<TShirt, 'id' | 'created_at'>): Promise<TShirt> => {
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .select()
    .single();

  if (error) {
    console.error('Error creating product:', error);
    throw error;
  }

  return data;
};