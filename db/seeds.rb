puts "Seeding Users..."
User.create!([
    {
        first_name: "Henry"
        last_name: "Miller"
        username: "Henry"
        password_digest: "1234"
        image_url: ""
        description: ""
        favorites: []
    }
    {
        first_name: "Jonathan"
        last_name: "Laureano"
        username: "Jonathan"
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
])

puts "Seeding Recipes..."

