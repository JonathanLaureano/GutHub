puts "Seeding Users..."
User.create!([
    {
        first_name: "Henry"
        last_name: "Miller"
        username: "Mozart@guthub.com"
        password_digest: "1234"
        image_url: ""
        description: ""
        favorites: []
    }
    {
        first_name: "Jonathan"
        last_name: "Laureano"
        username: "Socrates@guthub@.com"
        password_digest: "1234"
        image_url: ""
        description: ""
        favorites: []
    }
])

puts "Seeding Drinks..."
user = User.find(User.pluck(:id).sample)
Drink.create!([
    {
        name: "Margarita"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Mojito"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Long Island Ice Tea"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Bloody Mary"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Manhattan"
        image_url: ""
        user_id: user.id
    }
    {
        name: "White Russian"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Martini"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Daiquiri"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Mai Tai"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Capirinha"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Rum and Coke"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Old Fashioned"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Gin & Tonic"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Cosmopolitan"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Screwdriver"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Tequila Sunrise"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Whiskey Sour"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Piña Colada"
        image_url: ""
        user_id: user.id
    }
    {
        name: "Irish Coffee"
        image_url: ""
        user_id: user.id
    }
    {
        name: "The Godfather"
        image_url: ""
        user_id: user.id
    }
])

puts "Seeding Ingredients..."
Ingredient.create!([
    {
        name: "Tequila"
        image_url: ""
    }
    {
        name: "Triple Sec"
        image_url: ""
    }
    {
        name: "Scotch"
        image_url: ""
    }
    {
        name: "Vodka"
        image_url: ""
    }
    {
        name: "Almond Liquer"
        image_url: ""
    }
    {
        name: "White Rum"
        image_url: ""
    }
    {
        name: "Gin"
        image_url: ""
    }
    {
        name: "Whiskey"
        image_url: ""
    }
    {
        name: "Wine"
        image_url: ""
    }
    {
        name: "Bourbon"
        image_url: ""
    }
    {
        name: "Brandy"
        image_url: ""
    }
    {
        name: "Orange Juice"
        image_url: ""
    }
    {
        name: "Pineapple Juice"
        image_url: ""
    }
    {
        name: "Coconut Cream"
        image_url: ""
    }
    {
        name: "Lime Juice"
        image_url: ""
    }
    {
        name: "Cranberry Juice"
        image_url: ""
    }
    {
        name: "Lemon Juice"
        image_url: ""
    }
    {
        name: "Grenadine"
        image_url: ""
    }
    {
        name: "Simple Syrup"
        image_url: ""
    }
    {
        name: "Tonic"
        image_url: ""
    }
    {
        name: "Coke"
        image_url: ""
    }
    {
        name: "Milk"
        image_url: ""
    }
    {
        name: "Coffee"
        image_url: ""
    }
    {
        name: "Salt"
        image_url: ""
    }
    {
        name: "Tobasco Sauce"
        image_url: ""
    }
    {
        name: "Worcestershire Sauce"
        image_url: ""
    }
    {
        name: "Pepper"
        image_url: ""
    }
    {
        name: "Peprika"
        image_url: ""
    }
    {
        name: "Horse Radish"
        image_url: ""
    }
    {
        name: "Egg"
        image_url: ""
    }
    {
        name: "Nutmeg"
        image_url: ""
    }
    {
        name: "Bitter"
        image_url: ""
    }
    {
        name: "Olive"
        image_url: ""
    }
    {
        name: "Cinnamon Stick"
        image_url: ""
    }
    {
        name: "Sugar"
        image_url: ""
    }
    {
        name: "Mint Leaves"
        image_url: ""
    }
    {
        name: "Orange"
        image_url: ""
    }
    {
        name: "Lemon"
        image_url: ""
    }
    {
        name: "Lime"
        image_url: ""
    }
    {
        name: "Tomato Juice"
        image_url: ""
    }
])

puts "Seeding Recipes..."

Recipe.create!(drink_id: 1, ingredient_id: 1, parts: 1.33)
Recipe.create!(drink_id: 1, ingredient_id: 2, parts: 0.33)
Recipe.create!(drink_id: 1, ingredient_id: 15, parts: .66)
Recipe.create!(drink_id: 1, ingredient_id: 19, parts: 0.33)
Recipe.create!(drink_id: 1, ingredient_id: 39, parts: 1)
Recipe.create!(drink_id: 1, ingredient_id: 24, parts: 1)
Recipe.create!(drink_id: 2, ingredient_id: 6, parts: 1.33)
Recipe.create!(drink_id: 2, ingredient_id: 36, parts: 1)
Recipe.create!(drink_id: 2, ingredient_id: 39, parts: 1)
Recipe.create!(drink_id: 2, ingredient_id: 19, parts: 0.33)
Recipe.create!(drink_id: 2, ingredient_id: 15, parts: 0.5)
Recipe.create!(drink_id: 2, ingredient_id: 20, parts: 5)
Recipe.create!(drink_id: 3, ingredient_id: 4, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 6, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 1, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 7, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 2, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 19, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 17, parts: 0.5)
Recipe.create!(drink_id: 3, ingredient_id: 21, parts: 5)
Recipe.create!(drink_id: 3, ingredient_id: 38, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 4, parts: 1.33)
Recipe.create!(drink_id: 4, ingredient_id: 38, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 39, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 40, parts: 2.66)
Recipe.create!(drink_id: 4, ingredient_id: 29, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 25, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 26, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 27, parts: 1)
Recipe.create!(drink_id: 4, ingredient_id: 28, parts: 1)
Recipe.create!(drink_id: 5, ingredient_id: 8, parts: 1.66)
Recipe.create!(drink_id: 5, ingredient_id: 9, parts: 0.66)
Recipe.create!(drink_id: 5, ingredient_id: 32, parts: 1)
Recipe.create!(drink_id: 6, ingredient_id: 4, parts: 1)
Recipe.create!(drink_id: 6, ingredient_id: 22, parts: 1)
Recipe.create!(drink_id: 6, ingredient_id: 23, parts: 1)
Recipe.create!(drink_id: 7, ingredient_id: 7, parts: 2)
Recipe.create!(drink_id: 7, ingredient_id: 9, parts: 0.5)
Recipe.create!(drink_id: 7, ingredient_id: 38, parts: 1)
Recipe.create!(drink_id: 7, ingredient_id: 33, parts: 1)
Recipe.create!(drink_id: 8, ingredient_id: 6, parts: 1.33)
Recipe.create!(drink_id: 8, ingredient_id: 15, parts: 0.5)
Recipe.create!(drink_id: 8, ingredient_id: 19, parts: 0.5)
Recipe.create!(drink_id: 8, ingredient_id: 39, parts: 1)
Recipe.create!(drink_id: 9, ingredient_id: 6, parts: 1)
Recipe.create!(drink_id: 9, ingredient_id: 2, parts: 0.33)
Recipe.create!(drink_id: 9, ingredient_id: 19, parts: 0.33)
Recipe.create!(drink_id: 9, ingredient_id: 13, parts: 0.5)
Recipe.create!(drink_id: 9, ingredient_id: 12, parts: 0.33)
Recipe.create!(drink_id: 9, ingredient_id: 32, parts: 1)
Recipe.create!(drink_id: 9, ingredient_id: 34, parts: 1)
Recipe.create!(drink_id: 9, ingredient_id: 37, parts: 1)
Recipe.create!(drink_id: 10, ingredient_id: 6, parts: 1.33)
Recipe.create!(drink_id: 10, ingredient_id: 15, parts: 1)
Recipe.create!(drink_id: 10, ingredient_id: 35, parts: 1)
Recipe.create!(drink_id: 11, ingredient_id: 6, parts: 1.33)
Recipe.create!(drink_id: 11, ingredient_id: 21, parts: 4)
Recipe.create!(drink_id: 12, ingredient_id: 10, parts: 1.66)
Recipe.create!(drink_id: 12, ingredient_id: 19, parts: 0.33)
Recipe.create!(drink_id: 12, ingredient_id: 32, parts: 1)
Recipe.create!(drink_id: 12, ingredient_id: 38, parts: 1)
Recipe.create!(drink_id: 12, ingredient_id: 37, parts: 1)
Recipe.create!(drink_id: 13, ingredient_id: 7, parts: 1.33)
Recipe.create!(drink_id: 13, ingredient_id: 20, parts: 4)
Recipe.create!(drink_id: 14, ingredient_id: 4, parts: 1)
Recipe.create!(drink_id: 14, ingredient_id: 16, parts: 0.33)
Recipe.create!(drink_id: 14, ingredient_id: 15, parts: 0.5)
Recipe.create!(drink_id: 14, ingredient_id: 2, parts: 0.5)
Recipe.create!(drink_id: 15, ingredient_id: 4, parts: 1.33)
Recipe.create!(drink_id: 15, ingredient_id: 12, parts: 4)
Recipe.create!(drink_id: 16, ingredient_id: 1, parts: 1.33)
Recipe.create!(drink_id: 16, ingredient_id: 12, parts: 4)
Recipe.create!(drink_id: 16, ingredient_id: 18, parts: 0.33)
Recipe.create!(drink_id: 17, ingredient_id: 8, parts: 1.33)
Recipe.create!(drink_id: 17, ingredient_id: 17, parts: 0.66)
Recipe.create!(drink_id: 17, ingredient_id: 19, parts: 0.5)
Recipe.create!(drink_id: 17, ingredient_id: 30, parts: 1)
Recipe.create!(drink_id: 18, ingredient_id: 6, parts: 1.33)
Recipe.create!(drink_id: 18, ingredient_id: 14, parts: 1.33)
Recipe.create!(drink_id: 18, ingredient_id: 13, parts: 1.33)
Recipe.create!(drink_id: 19, ingredient_id: 11, parts: 1)
Recipe.create!(drink_id: 19, ingredient_id: 9, parts: 1.66)
Recipe.create!(drink_id: 19, ingredient_id: 30, parts: 1)
Recipe.create!(drink_id: 19, ingredient_id: 31, parts: 1)
Recipe.create!(drink_id: 20, ingredient_id: 3, parts: 1.33)
Recipe.create!(drink_id: 20, ingredient_id: 5, parts: 0.33)
Recipe.create!(drink_id: 20, ingredient_id: 17, parts: 1)

puts "Seeding Done!"