class DrinksController < ApplicationController

    def index
        drinks = Drink.all
        render json: drinks, include: ["recipes.ingredient", "user"], status: :ok
    end

    def show
        drink = find_drink
        render json: drink, include: ["recipes.ingredient", "user"], status: :ok
    end

    def create
        drink = Drink.create!(drink_params)
        drink.save
        render json: drink, status: :created
    end

    def update
        drink = find_drink
        drink.update(drink_params)
        render json: drink, status: :ok
    end

    def destroy
        drink = find_drink
        drink.destroy
        head :no_content
    end

    def mix
        @mix = params[:mix]
        drinks = Drink.all.filter{|drink| drink.recipes.map{|recipe| @mix.map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}
        render json: drinks, include: ["recipes.ingredient", "user"], status: :ok
    end

    def search
        @query = params[:query]
        # drink = Drink.where("drinks.name LIKE ?", ["%#{@query.capitalize}%"])
        # drinks = Drink.all.filter{|drink| drink.name.downcase.include? @query.downcase}
        # drinks = Drink.all.filter{|drink| drink.ingredients.map{|ingredient| ingredient.name.downcase.include? @query.downcase}.include? true}
        drinks = Drink.all.filter{|drink| (drink.name.downcase.include? @query.downcase) || (drink.ingredients.map{|ingredient| ingredient.name.downcase.include? @query.downcase}.include? true)}
        render json: drinks, include: ["recipes.ingredient", "user"], status: :ok
    end 


    private

    def find_drink
        Drink.find(params[:id])
    end

    def drink_params
        params.permit(:name, :image_url,
                    recipe_attributes: [:drink_id, :ingredient_id, :parts])
    end


end
