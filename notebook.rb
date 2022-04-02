testTrue={"mix":[
    { "ingredient_id": 1, "parts": 1.33 },
    { "ingredient_id": 2, "parts": 0.33 },
    { "ingredient_id": 15, "parts": 0.66 },
    { "ingredient_id": 19, "parts": 0.33 },
    { "ingredient_id": 39, "parts": 1.0 },
    { "ingredient_id": 24, "parts": 1.0 }
]}

testLong={"mix":[
    { "ingredient_id": 1, "parts": 1.33 },
    { "ingredient_id": 2, "parts": 0.33 },
    { "ingredient_id": 15, "parts": 0.66 },
    { "ingredient_id": 19, "parts": 0.33 },
    { "ingredient_id": 39, "parts": 1.0 },
    { "ingredient_id": 24, "parts": 1.0 },
    {"ingredient_id": 35, "parts": 1.3}
]}

testShort={"mix":[
    { "ingredient_id": 1, "parts": 1.33 },
    { "ingredient_id": 2, "parts": 0.33 },
    { "ingredient_id": 15, "parts": 0.66 },
    { "ingredient_id": 19, "parts": 0.33 },
    { "ingredient_id": 39, "parts": 1.0 },
]}




mix.map{|ingred| dr.map{|recipes| recipes.ingredient_id == ingred[:ingredient_id] && recipes.parts == ingred[:parts]}.include? true}.all?{|item| item==true}

mix.map{|ingred| Drink.all.map{|dr| dr.recipes.map{|recipes| recipes.ingredient_id == ingred[:ingredient_id] && recipes.parts == ingred[:parts]}.includ? true}}

Drink.all.map{|drink| mix.map{|ingred| drink.recipes.map{|recipes| recipes.ingredient_id == ingred[:ingredient_id] && recipes.parts == ingred[:parts]}.include? true}}

Drink.all.map{|drink| drink.recipes.map{|recipe| mix.map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}

Drink.all.filter{|drink| drink.recipes.map{|recipe| mix.map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}


# WITH MAPPING -> TO SEE TRUE/FALSE INDEX LISTs
# Will return drinks where all of the recipes can be found in the provided object but does not account for additonal recipes in the provided object
def MixMatchMap obj
    Drink.all.map{|drink| drink.recipes.map{|recipe| obj[:mix].map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}
end

# Will return drinks where all of the recipes found in the provided can also be found in the drink but does not account for recipes that are in the drink and missing from the provided object 
def MixMatchMapAlt obj
    Drink.all.map{|drink| obj[:mix].map{|ingred| drink.recipes.map{|recipe| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}
end

def MixMatchMapComplete obj
    Drink.all.map{|drink| (drink.recipes.map{|recipe| obj[:mix].map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}) && (obj[:mix].map{|ingred| drink.recipes.map{|recipe| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}) }
end


# WITH FILTERS -> Return only the matching drink
def MixMatchFilter obj
    Drink.all.filter{|drink| drink.recipes.map{|recipe| obj[:mix].map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}
end

# Will return drinks where all of the recipes found in the provided can also be found in the drink but does not account for recipes that are in the drink and missing from the provided object 
def MixMatchFilterAlt obj
    Drink.all.filter{|drink| obj[:mix].map{|ingred| drink.recipes.map{|recipe| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}
end

def MixMatchFilterComplete obj
    Drink.all.filter{|drink| (drink.recipes.map{|recipe| obj[:mix].map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}) && (obj[:mix].map{|ingred| drink.recipes.map{|recipe| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}) }
end