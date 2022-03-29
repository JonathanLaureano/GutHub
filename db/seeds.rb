puts 'Removing Previous Data'
User.destroy_all
Drink.destroy_all
Ingredient.destroy_all
Recipe.destroy_all

puts "Seeding Users..."
User.create!([
    {
        first_name: "Henry",
        last_name: "Miller",
        username: "mozart@guthub.com",
        password: "1234",
        image_url: "",
        description: "",
        favorites: []
    },
    {
        first_name: "Jonathan",
        last_name: "Laureano",
        username: "socrates@guthub.com",
        password: "1234",
        image_url: "",
        description: "",
        favorites: []
    }
])

puts "Seeding Drinks..."
Drink.create!([
    {
        name: "Margarita",
        image_url: "",
        user_id: 1
    },
    {
        name: "Mojito",
        image_url: "",
        user_id: 1
    },
    {
        name: "Long Island Ice Tea",
        image_url: "",
        user_id: 1
    },
    {
        name: "Bloody Mary",
        image_url: "",
        user_id: 1
    },
    {
        name: "Manhattan",
        image_url: "",
        user_id: 1
    },
    {
        name: "White Russian",
        image_url: "",
        user_id: 1
    },
    {
        name: "Martini",
        image_url: "",
        user_id: 1
    },
    {
        name: "Daiquiri",
        image_url: "",
        user_id: 1
    },
    {
        name: "Mai Tai",
        image_url: "",
        user_id: 1
    },
    {
        name: "Capirinha",
        image_url: "",
        user_id: 1
    },
    {
        name: "Rum and Coke",
        image_url: "",
        user_id: 1
    },
    {
        name: "Old Fashioned",
        image_url: "",
        user_id: 1
    },
    {
        name: "Gin & Tonic",
        image_url: "",
        user_id: 1
    },
    {
        name: "Cosmopolitan",
        image_url: "",
        user_id: 1
    },
    {
        name: "Screwdriver",
        image_url: "",
        user_id: 1
    },
    {
        name: "Tequila Sunrise",
        image_url: "",
        user_id: 1
    },
    {
        name: "Whiskey Sour",
        image_url: "",
        user_id: 1
    },
    {
        name: "Piña Colada",
        image_url: "",
        user_id: 1
    },
    {
        name: "Irish Coffee",
        image_url: "",
        user_id: 1
    },
    {
        name: "The Godfather",
        image_url: "",
        user_id: 1
    }
])

puts "Seeding Ingredients..."
Ingredient.create!([
    {
        name: "Tequila",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Triple Sec",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Scotch",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Vodka",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Almond Liquer",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "White Rum",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Gin",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Whiskey",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Wine",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Bourbon",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Brandy",
        image_url: "",
        ingredient_type: "Alcohol"
    },
    {
        name: "Orange Juice",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Pineapple Juice",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Coconut Cream",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Lime Juice",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Cranberry Juice",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Lemon Juice",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Grenadine",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Simple Syrup",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Tonic",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Coke",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Milk",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Coffee",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Salt",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Tobasco Sauce",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Worcestershire Sauce",
        image_url: "",
        ingredient_type: "Liquid"
    },
    {
        name: "Pepper",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Peprika",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Horse Radish",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Egg",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Nutmeg",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Bitter",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Olive",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Cinnamon Stick",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Sugar",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Mint Leaves",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Orange",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Lemon",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Lime",
        image_url: "",
        ingredient_type: "Solid"
    },
    {
        name: "Tomato Juice",
        image_url: "",
        ingredient_type: "Liquid"
    }
])

puts "Seeding Recipes..."

    Recipe.create!(drink_id: 1, ingredient_id: 1, parts: 1.33)
    Recipe.create!(drink_id: 1, ingredient_id: 2, parts: 0.33)
    Recipe.create!(drink_id: 1, ingredient_id: 15, parts: 0.66)
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