class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all
        render json: ingredients, include: "ingredients", status: :ok
    end

    def show
        ingredient = find_ingredient
        render json: ingredient, status: :ok
    end

    private

    def find_ingredient
        Ingredient.find(params[:id])
    end
end
