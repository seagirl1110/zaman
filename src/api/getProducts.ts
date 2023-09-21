import axios from "axios";

export type Categories = 'Шеф-меню' | 'Супы' | 'Горячее' | 'Закуски' | 'Салаты' | 'Выпечка' | 'Напитки' | 'Завтраки' | 'Десерты';

interface Category {
    id: number,
    real_name: Categories,
    image: null
}

export interface Product {
    id: number,
    real_name: string,
    description: string,
    price: number,
    image: string,
    thumbnail: string,
    modifiers: Object,
    modifiers_as_hint: Boolean,
    energy: number,
    weight: number,
    weight_measure: string,
    fat: number,
    proteins: number,
    carbohydrates: number,
    intro_text: string,
    category: Category,
}

export const getProducts = async () => {
    const {data} = await axios ('https://tcode.online/api/zaman/products/');
    return data;
}