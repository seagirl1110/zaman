import axios from 'axios';

interface ImagesItem {
    button_text: string,
    id: number,
    image: string,
    link: string,
    product: null,
    story: number
}

export interface Stories {
    description: string,
    id: number,
    image: string,
    images: ImagesItem[],
    name: string,
    order_number: number,
    shop: number,
}

export const getStories = async () => {
    const { data } = await axios<Stories[]>('https://tcode.online/api/tubatay/stories/');
    return data;
}