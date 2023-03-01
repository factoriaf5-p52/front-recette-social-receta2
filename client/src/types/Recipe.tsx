export type Recipe = {
    _id: string;
    title: string;
    description: string;
    ingredients: string[];
    time: number;
    is_private: boolean;
    tags: string[];
    comments: string[];
}