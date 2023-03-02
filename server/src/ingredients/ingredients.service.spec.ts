import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import mongoose from 'mongoose';
import { find } from 'rxjs';
import { RecipesService } from 'src/recipes/recipes.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { IngredientsService } from './ingredients.service';

const mockIngredientModel = {
  create: jest.fn().mockImplementation(dto => ({
    _id: new mongoose.Types.ObjectId(),
    ...dto

  })),
  find: jest.fn().mockImplementation(()=>{
    return {exec:()=>{
      return [{name:'harina'}]
    }}
  }),
  findOne:jest.fn().mockImplementation(()=>{
    return[{id:'00299122'}]
  }),
  findByIdAndRemove:jest.fn().mockImplementation(()=>{
    return{exec:()=>{
      return [{id:'00299122'}]
    }}
  }),
  findOneAndUpdate:jest.fn().mockImplementation(()=>{
    return [{id:'090990'}]
    
  })

}


describe('IngredientsService', () => {
  let service: IngredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IngredientsService, {
          provide: getModelToken("Ingredient"),
          useValue: mockIngredientModel  
        }],
    }).compile();

    service = module.get<IngredientsService>(IngredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a ingredient', async ()=>{
    const createIngredientDto:CreateIngredientDto = {
      name:"azucar",
      measure_unit:"gr"
    }
    expect (await service.create(createIngredientDto)).toMatchObject({
      _id:expect.any(mongoose.Types.ObjectId),
      ...createIngredientDto
    })
  });

 it('should return an array', async ()=>{
  expect(await service.findAll()).toMatchObject([{name:'harina'}])
 });

 it('find a ingredient should retur "findIngredient whit id"', async()=>{
  expect(await service.findOne('')).toMatchObject([{id:'00299122'}])
 });

 it('remove (00299122) should return "remove whit ingredient:"', async ()=>{
  expect(await service.remove('00299122')).toMatchObject([{id:'00299122'}])
 });

//  it('update recipes("00299122", {title:"myrecipe"}) shoul return the recipe title', async ()=>{
//   const recipeUpdated = {title:"myrecipe"}
//   expect(await service.update('00299122', recipeUpdated)).toMatchObject([{"id": "090990"}]);
//  })

});




