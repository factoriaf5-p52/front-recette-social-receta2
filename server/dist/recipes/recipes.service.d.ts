import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';
import { Model } from 'mongoose';
export declare class RecipesService {
    private readonly recipeModel;
    constructor(recipeModel: Model<RecipeDocument>);
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByName(name: string): Promise<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne2(id: string): Promise<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addComment(id: string, comment: any): Promise<RecipeDocument>;
    addIngredient(recipeId: string, ingredient: any): Promise<Recipe>;
}
