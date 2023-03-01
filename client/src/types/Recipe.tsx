type Author = {
    username:string;
  }
  
  type Ingredient = {
    name:string;
    measure_unit:string;
  }
  type Comment = {
    title:string;
    statrs:number;
    comment:string;
  }
  
  export type Recipe = {
    _id:string;
    title: string;
    description: string;
    author:Author;
    time:string 
    tags: Array<any>;
    comments: Comment[];
    ingredients:Ingredient[] 
  }


  export type CrearRecipe = {
    _id:string;
    title: string;
    description: string;
    author:Author;
    time:string 
    tags: Array<string>;
   
  }
import React from "react";