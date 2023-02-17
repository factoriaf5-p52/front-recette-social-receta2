import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    create(createRecipeDto: CreateRecipeDto): Promise<import("./schemas/recipe.schema").Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("./schemas/recipe.schema").Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("./schemas/recipe.schema").Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByName(title: string): Promise<(import("./schemas/recipe.schema").Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<import("./schemas/recipe.schema").Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addIngredient(id: string, updateRecipeDto: UpdateRecipeDto): Promise<import("./schemas/recipe.schema").Recipe>;
    remove(id: string): Promise<import("./schemas/recipe.schema").Recipe & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addComment(id: string, comment: CreateCommentDto): Promise<import("./schemas/recipe.schema").RecipeDocument>;
}
