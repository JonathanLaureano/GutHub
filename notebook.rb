test={"mix":[
    { "ingredient_id": 1, "parts": 1.33 },
    { "ingredient_id": 2, "parts": 0.33 },
    { "ingredient_id": 15, "parts": 0.66 },
    { "ingredient_id": 19, "parts": 0.33 },
    { "ingredient_id": 39, "parts": 1.0 },
    { "ingredient_id": 24, "parts": 1.0 },
    {"ingredient_id": 35, "parts": 1.3}
]}



mix.map{|ingred| dr.map{|recipes| recipes.ingredient_id == ingred[:ingredient_id] && recipes.parts == ingred[:parts]}.include? true}.all?{|item| item==true}

mix.map{|ingred| Drink.all.map{|dr| dr.recipes.map{|recipes| recipes.ingredient_id == ingred[:ingredient_id] && recipes.parts == ingred[:parts]}.includ? true}}

Drink.all.map{|drink| mix.map{|ingred| drink.recipes.map{|recipes| recipes.ingredient_id == ingred[:ingredient_id] && recipes.parts == ingred[:parts]}.include? true}}

Drink.all.map{|drink| drink.recipes.map{|recipe| mix.map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}

Drink.all.filter{|drink| drink.recipes.map{|recipe| mix.map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}

Drink.all.map{|drink| drink.recipes.map{|recipe| posted_object[:mix].map{|ingred| recipe.ingredient_id == ingred[:ingredient_id] && recipe.parts == ingred[:parts]}.include? true}.all?{|item| item==true}}