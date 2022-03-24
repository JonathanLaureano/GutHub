class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: recipes, status: :ok
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    private

    def find_recipe
        Recipe.find(params[:id])
    end
end
