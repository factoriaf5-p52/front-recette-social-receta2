import { createContext, useContext } from "react";

export const RecipeContext = createContext({});

export const recipeContext = () =>{
    const context = useContext(RecipeContext)
    if(!context){
        throw new Error ('useUsers must be use whithin a UsersContextProvier')
    }
    return context;
};

