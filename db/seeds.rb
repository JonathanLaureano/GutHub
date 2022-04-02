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
        image_url: "https://img.icons8.com/material-rounded/384/000000/user.png",
        description: "",
        favorites: []
    },
    {
        first_name: "Jonathan",
        last_name: "Laureano",
        username: "socrates@guthub.com",
        password: "1234",
        image_url: "https://img.icons8.com/material-rounded/384/000000/user.png",
        description: "",
        favorites: []
    }
])

puts "Seeding Drinks..."
Drink.create!([
    {
        name: "Margarita",
        image_url: "Margarita.png",
        user_id: 2
    },
    {
        name: "Mojito",
        image_url: "Mojito.png",
        user_id: 2
    },
    {
        name: "Long Island Ice Tea",
        image_url: "LongIslandIceTea.png",
        user_id: 2
    },
    {
        name: "Bloody Mary",
        image_url: "BloodyMary.png",
        user_id: 2
    },
    {
        name: "Manhattan",
        image_url: "Manhattan.png",
        user_id: 2
    },
    {
        name: "White Russian",
        image_url: "WhiteRussian.png",
        user_id: 2
    },
    {
        name: "Martini",
        image_url: "Martini.png",
        user_id: 2
    },
    {
        name: "Daiquiri",
        image_url: "Daiquiri.png",
        user_id: 2
    },
    {
        name: "Mai Tai",
        image_url: "MaiTai.png",
        user_id: 2
    },
    {
        name: "Caipirinha",
        image_url: "Caipirinha.png",
        user_id: 2
    },
    {
        name: "Rum & Coke",
        image_url: "Rum&Coke.png",
        user_id: 2
    },
    {
        name: "Old Fashioned",
        image_url: "OldFashioned.png",
        user_id: 2
    },
    {
        name: "Gin & Tonic",
        image_url: "Gin&Tonic.png",
        user_id: 2
    },
    {
        name: "Cosmopolitan",
        image_url: "Cosmopolitan.png",
        user_id: 2
    },
    {
        name: "Screwdriver",
        image_url: "Screwdriver.png",
        user_id: 2
    },
    {
        name: "Tequila Sunrise",
        image_url: "TequilaSunrise.png",
        user_id: 2
    },
    {
        name: "Whiskey Sour",
        image_url: "WhiskeySour.png",
        user_id: 2
    },
    {
        name: "Piña Colada",
        image_url: "PinaColada.png",
        user_id: 2
    },
    {
        name: "Irish Coffee",
        image_url: "IrishCoffee.png",
        user_id: 2
    },
    {
        name: "The Godfather",
        image_url: "Godfather.png",
        user_id: 2
    },
    {
        name: "Pink Lady",
        image_url: "PinkLady.png",
        user_id: 1
    },
    {
        name: "Jack & Coke",
        image_url: "Jack&Coke.png",
        user_id: 1
    },
    {
        name: "Bay Breeze",
        image_url: "BayBreeze.png",
        user_id: 1
    },
    {
        name: "Mimosa",
        image_url: "Mimosa.png",
        user_id: 1
    },
    {
        name: "Moscow Mule",
        image_url: "MoscowMule.png",
        user_id: 1
    },
    {
        name: "Dirty Shirley",
        image_url: "DirtyShirley.png",
        user_id: 2
    },
    {
        name: "French Martini",
        image_url: "FrenchMartini.png",
        user_id: 2
    },
    {
        name: "Lychee Martini",
        image_url: "LycheeMartini.png",
        user_id: 2
    },
    {
        name: "French 75",
        image_url: "French75.png",
        user_id: 2
    },
    {
        name: "Negroni",
        image_url: "Negroni.png",
        user_id: 2
    },
    {
        name: "Scottish Coffee",
        image_url: "ScottishCoffee.png",
        user_id: 2
    },
    {
        name: "Zombie",
        image_url: "Zombie.png",
        user_id: 2
    },
    {
        name: "Expresso Martini",
        image_url: "ExpressoMartini.png",
        user_id: 2
    },
    {
        name: "Tequila Pineapple",
        image_url: "TequilaPineapple.png",
        user_id: 2
    },
    {
        name: "Death In The Afternoon",
        image_url: "DeathInTheAfternoon.png",
        user_id: 2
    },
    {
        name: "Gin Martini",
        image_url: "GinMartini.png",
        user_id: 2
    },
    {
        name: "Sazerac",
        image_url: "Sazerac.png",
        user_id: 2
    },
    {
        name: "Necromancer",
        image_url: "Necromancer.png",
        user_id: 2
    },
    {
        name: "Gimlet",
        image_url: "Gimlet.png",
        user_id: 2
    },
    {
        name: "Tom Collins",
        image_url: "TomCollins.png",
        user_id: 2
    },
    {
        name: "Paloma",
        image_url: "Paloma.png",
        user_id: 2
    },
    {
        name: "Irish Car Bomb",
        image_url: "IrishCarBomb.png",
        user_id: 2
    },
    {
        name: "La Tour Eiffel",
        image_url: "LaTourEiffel.png",
        user_id: 2
    },
    {
        name: "High Seas",
        image_url: "HighSeas.png",
        user_id: 2
    },
    {
        name: "Vesper",
        image_url: "Vesper.png",
        user_id: 2
    },
    {
        name: "Aperol Spritz",
        image_url: "AperolSpritz.png",
        user_id: 2
    },
    {
        name: "Classic Bellini",
        image_url: "ClassicBellini.png",
        user_id: 2
    },
    {
        name: "Cleo",
        image_url: "Cleo.png",
        user_id: 2
    },
    {
        name: "Jalepeno Diablo",
        image_url: "JalepenoDiablo.png",
        user_id: 2
    },
    {
        name: "Pine Pepper Crush",
        image_url: "PinePepperCrush.png",
        user_id: 2
    }
])

puts "Seeding Ingredients..."
Ingredient.create!([
    {
        name: "Tequila",
        image_url: "Tequila.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Triple Sec",
        image_url: "TripleSec.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Scotch",
        image_url: "Scotch.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Vodka",
        image_url: "Vodka.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Almond Liquer",
        image_url: "AlmondLiquer.png",
        ingredient_type: "alcohol"
    },
    {
        name: "White Rum",
        image_url: "WhiteRum.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Gin",
        image_url: "Gin.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Whiskey",
        image_url: "Whiskey.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Wine",
        image_url: "Wine.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Bourbon",
        image_url: "Bourbon.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Brandy",
        image_url: "Brandy.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Orange Juice",
        image_url: "OrangeJuice.png",
        ingredient_type: "liquid"
    },
    {
        name: "Pineapple Juice",
        image_url: "PineappleJuice.png",
        ingredient_type: "liquid"
    },
    {
        name: "Coconut Cream",
        image_url: "CoconutCream.png",
        ingredient_type: "liquid"
    },
    {
        name: "Lime Juice",
        image_url: "LimeJuice.png",
        ingredient_type: "liquid"
    },
    {
        name: "Cranberry Juice",
        image_url: "CranberryJuice.png",
        ingredient_type: "liquid"
    },
    {
        name: "Lemon Juice",
        image_url: "LemonJuice.png",
        ingredient_type: "liquid"
    },
    {
        name: "Grenadine",
        image_url: "Grenadine.png",
        ingredient_type: "liquid"
    },
    {
        name: "Simple Syrup",
        image_url: "SimpleSyrup.png",
        ingredient_type: "liquid"
    },
    {
        name: "Tonic",
        image_url: "Tonic.png",
        ingredient_type: "liquid"
    },
    {
        name: "Coke",
        image_url: "Coke.png",
        ingredient_type: "liquid"
    },
    {
        name: "Milk",
        image_url: "Milk.png",
        ingredient_type: "liquid"
    },
    {
        name: "Coffee",
        image_url: "Coffee.png",
        ingredient_type: "liquid"
    },
    {
        name: "Salt",
        image_url: "Salt.png",
        ingredient_type: "solid"
    },
    {
        name: "Tobasco Sauce",
        image_url: "Tobasco.png",
        ingredient_type: "liquid"
    },
    {
        name: "Worcestershire Sauce",
        image_url: "WorcestershireSauce.png",
        ingredient_type: "liquid"
    },
    {
        name: "Pepper",
        image_url: "Pepper.png",
        ingredient_type: "solid"
    },
    {
        name: "Paprika",
        image_url: "Paprika.png",
        ingredient_type: "solid"
    },
    {
        name: "Horse Radish",
        image_url: "HorseRadish.png",
        ingredient_type: "solid"
    },
    {
        name: "Egg",
        image_url: "Egg.png",
        ingredient_type: "solid"
    },
    {
        name: "Nutmeg",
        image_url: "Nutmeg.png",
        ingredient_type: "solid"
    },
    {
        name: "Bitter",
        image_url: "Bitter.png",
        ingredient_type: "solid"
    },
    {
        name: "Olive",
        image_url: "Olive.png",
        ingredient_type: "solid"
    },
    {
        name: "Cinnamon Stick",
        image_url: "Cinnamon.png",
        ingredient_type: "solid"
    },
    {
        name: "Sugar",
        image_url: "Sugar.png",
        ingredient_type: "solid"
    },
    {
        name: "Mint Leaves",
        image_url: "MintLeaves.png",
        ingredient_type: "solid"
    },
    {
        name: "Orange",
        image_url: "Orange.png",
        ingredient_type: "solid"
    },
    {
        name: "Lemon",
        image_url: "Lemon.png",
        ingredient_type: "solid"
    },
    {
        name: "Lime",
        image_url: "Lime.png",
        ingredient_type: "solid"
    },
    {
        name: "Tomato Juice",
        image_url: "TomatoJuice.png",
        ingredient_type: "liquid"
    },
    {
        name: "Raspberry",
        image_url: "Raspberry.png",
        ingredient_type: 'solid'
    },
    {
        name: "Champagne",
        image_url: "Champagne.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Ginger Beer",
        image_url: "GingerBeer.png",
        ingredient_type: "alcohol"
    },
    {
        name: "Ginger Ale",
        image_url: "GingerAle.png",
        ingredient_type: 'liquid'
    },
    {
        name: "Chambord",
        image_url: "Chambord.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Lychee Juice",
        image_url: "LycheeJuice.png",
        ingredient_type: 'liquid'
    },
    {
        name: "Vermouth",
        image_url: "Vermouth.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Falernum",
        image_url: "Falernum.png",
        ingredient_type: 'liquid'
    },
    {
        name: "Expresso",
        image_url: "Expresso.png",
        ingredient_type: 'liquid'
    },
    {
        name: "Absinthe",
        image_url: "Absinthe.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Cognac",
        image_url: "Cognac.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Red Bull",
        image_url: "Redbull.png",
        ingredient_type: 'liquid'
    },
    {
        name: "Grapefruit Soda",
        image_url: "GrapefruitSoda.png",
        ingredient_type: 'liquid'
    },
    {
        name: "Bailey's",
        image_url: "Baileys.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Guiness",
        image_url: "Guiness.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Suze",
        image_url: "Suze.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Capelletti Aperitif",
        image_url: "CapellettiAperitif.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Prosecco",
        image_url: "Prosecco.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Aperol",
        image_url: "Aperol.png",
        ingredient_type: 'alcohol'
    },
    {
        name: "Peach",
        image_url: "Peach.png",
        ingredient_type: 'solid'
    },
    {
        name: "Dragonfruit",
        image_url: "Dragonfruit.png",
        ingredient_type: 'solid'
    },
    {
        name: "Ginger",
        image_url: "Ginger.png",
        ingredient_type: 'solid'
    },
    {
        name: "Pineapple",
        image_url: "Pineapple.png",
        ingredient_type: 'solid'
    },
    {   name: "Cherry",
        image_url: "Cherry.png",
        ingredient_type:"solid"
    },
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
    Recipe.create!(drink_id: 21, ingredient_id: 7, parts:1.33)
    Recipe.create!(drink_id: 21, ingredient_id: 15, parts:0.5)
    Recipe.create!(drink_id: 21, ingredient_id: 18, parts:0.5)
    Recipe.create!(drink_id: 21, ingredient_id: 41, parts: 1)
    Recipe.create!(drink_id: 22, ingredient_id: 8, parts: 1)
    Recipe.create!(drink_id: 22, ingredient_id: 21, parts: 3)
    Recipe.create!(drink_id: 23, ingredient_id: 4, parts: 1.33)
    Recipe.create!(drink_id: 23, ingredient_id: 13, parts: 1.33)
    Recipe.create!(drink_id: 23, ingredient_id: 16, parts: 2.66)
    Recipe.create!(drink_id: 23, ingredient_id: 37, parts: 1)
    Recipe.create!(drink_id: 24, ingredient_id: 12, parts: 1)
    Recipe.create!(drink_id: 24, ingredient_id: 42, parts: 2)
    Recipe.create!(drink_id: 25, ingredient_id: 4, parts: 1.33)
    Recipe.create!(drink_id: 25, ingredient_id: 15, parts: 0.5)
    Recipe.create!(drink_id: 25, ingredient_id: 39, parts: 1)
    Recipe.create!(drink_id: 25, ingredient_id: 43, parts: 2.66)
    Recipe.create!(drink_id: 26, ingredient_id: 4, parts: 1.33)
    Recipe.create!(drink_id: 26, ingredient_id: 44, parts: 5)
    Recipe.create!(drink_id: 26, ingredient_id: 64, parts: 1)
    Recipe.create!(drink_id: 27, ingredient_id: 4, parts: 1)
    Recipe.create!(drink_id: 27, ingredient_id: 45, parts: 0.33)
    Recipe.create!(drink_id: 27, ingredient_id: 14, parts: 0.5)
    Recipe.create!(drink_id: 27, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 28, ingredient_id: 4, parts: 2)
    Recipe.create!(drink_id: 28, ingredient_id: 46, parts: 0.33)
    Recipe.create!(drink_id: 28, ingredient_id: 14, parts: 0.5)
    Recipe.create!(drink_id: 29, ingredient_id: 7, parts: 0.66)
    Recipe.create!(drink_id: 29, ingredient_id: 17, parts: 0.33)
    Recipe.create!(drink_id: 29, ingredient_id: 19, parts: 0.33)
    Recipe.create!(drink_id: 29, ingredient_id: 42, parts: 2)
    Recipe.create!(drink_id: 29, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 30, ingredient_id: 7, parts: 0.66)
    Recipe.create!(drink_id: 30, ingredient_id: 48, parts: 0.66)
    Recipe.create!(drink_id: 30, ingredient_id: 47, parts: 0.66)
    Recipe.create!(drink_id: 30, ingredient_id: 37, parts: 1)
    Recipe.create!(drink_id: 31, ingredient_id: 8, parts: 1.5)
    Recipe.create!(drink_id: 31, ingredient_id: 23, parts: 4)
    Recipe.create!(drink_id: 31, ingredient_id: 19, parts: 0.66)
    Recipe.create!(drink_id: 31, ingredient_id: 22, parts: 0.66)
    Recipe.create!(drink_id: 32, ingredient_id: 6, parts: 2.66)
    Recipe.create!(drink_id: 32, ingredient_id: 15, parts: 0.5)
    Recipe.create!(drink_id: 32, ingredient_id: 49, parts: 0.33)
    Recipe.create!(drink_id: 32, ingredient_id: 18, parts: 0.5)
    Recipe.create!(drink_id: 32, ingredient_id: 32, parts: 1)
    Recipe.create!(drink_id: 32, ingredient_id: 36, parts: 1)
    Recipe.create!(drink_id: 33, ingredient_id: 4, parts: 1.33)
    Recipe.create!(drink_id: 33, ingredient_id: 50, parts: 0.66)
    Recipe.create!(drink_id: 33, ingredient_id: 19, parts: 0.33)
    Recipe.create!(drink_id: 33, ingredient_id: 23, parts: 1)
    Recipe.create!(drink_id: 34, ingredient_id: 1, parts: 1)
    Recipe.create!(drink_id: 34, ingredient_id: 2, parts: 0.33)
    Recipe.create!(drink_id: 34, ingredient_id: 13, parts: 2.66)
    Recipe.create!(drink_id: 34, ingredient_id: 39, parts: 1)
    Recipe.create!(drink_id: 35, ingredient_id: 51, parts: 1)
    Recipe.create!(drink_id: 35, ingredient_id: 42, parts: 3)
    Recipe.create!(drink_id: 36, ingredient_id: 7, parts: 1.66)
    Recipe.create!(drink_id: 36, ingredient_id: 47, parts: 0.33)
    Recipe.create!(drink_id: 36, ingredient_id: 32, parts: 1)
    Recipe.create!(drink_id: 36, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 37, ingredient_id: 8, parts: 1)
    Recipe.create!(drink_id: 37, ingredient_id: 32, parts: 1)
    Recipe.create!(drink_id: 37, ingredient_id: 52, parts: 1)
    Recipe.create!(drink_id: 37, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 38, ingredient_id: 50, parts: 0.66)
    Recipe.create!(drink_id: 38, ingredient_id: 7, parts: 0.66)
    Recipe.create!(drink_id: 38, ingredient_id: 17, parts: 0.66)
    Recipe.create!(drink_id: 39, ingredient_id: 7, parts: 1.66)
    Recipe.create!(drink_id: 39, ingredient_id: 15, parts: 0.33)
    Recipe.create!(drink_id: 39, ingredient_id: 19, parts: 0.33)
    Recipe.create!(drink_id: 39, ingredient_id: 39, parts: 1)
    Recipe.create!(drink_id: 40, ingredient_id: 7, parts: 1.33)
    Recipe.create!(drink_id: 40, ingredient_id: 17, parts: 0.66)
    Recipe.create!(drink_id: 40, ingredient_id: 19, parts: 0.33)
    Recipe.create!(drink_id: 40, ingredient_id: 20, parts: 3)
    Recipe.create!(drink_id: 40, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 40, ingredient_id: 64, parts: 1)
    Recipe.create!(drink_id: 41, ingredient_id: 1, parts: 1.33)
    Recipe.create!(drink_id: 41, ingredient_id: 15, parts: 0.33)
    Recipe.create!(drink_id: 41, ingredient_id: 53, parts: 2)
    Recipe.create!(drink_id: 41, ingredient_id: 39, parts: 1)
    Recipe.create!(drink_id: 41, ingredient_id: 24, parts: 1)
    Recipe.create!(drink_id: 42, ingredient_id: 8, parts: 0.33)
    Recipe.create!(drink_id: 42, ingredient_id: 55, parts: 1)
    Recipe.create!(drink_id: 42, ingredient_id: 56, parts: 1)
    Recipe.create!(drink_id: 43, ingredient_id: 52, parts: 1.66)
    Recipe.create!(drink_id: 43, ingredient_id: 51, parts: 0.33)
    Recipe.create!(drink_id: 43, ingredient_id: 2, parts: 0.33)
    Recipe.create!(drink_id: 43, ingredient_id: 57, parts: 0.33)
    Recipe.create!(drink_id: 43, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 44, ingredient_id: 8, parts: 0.5)
    Recipe.create!(drink_id: 44, ingredient_id: 58, parts: 0.66)
    Recipe.create!(drink_id: 44, ingredient_id: 47, parts: 0.66)
    Recipe.create!(drink_id: 45, ingredient_id: 7, parts: 2)
    Recipe.create!(drink_id: 45, ingredient_id: 4, parts: 0.66)
    Recipe.create!(drink_id: 45, ingredient_id: 58, parts: 0.33)
    Recipe.create!(drink_id: 45, ingredient_id: 38, parts: 1)
    Recipe.create!(drink_id: 46, ingredient_id: 60, parts: 2)
    Recipe.create!(drink_id: 46, ingredient_id: 60, parts: 1.33)
    Recipe.create!(drink_id: 46, ingredient_id: 20, parts: 0.66)
    Recipe.create!(drink_id: 46, ingredient_id: 37, parts: 1)
    Recipe.create!(drink_id: 47, ingredient_id: 59, parts: 2.66)
    Recipe.create!(drink_id: 47, ingredient_id: 61, parts: 1)
    Recipe.create!(drink_id: 48, ingredient_id: 1, parts: 1.33)
    Recipe.create!(drink_id: 48, ingredient_id: 15, parts: 0.66)
    Recipe.create!(drink_id: 48, ingredient_id: 19, parts: 0.33)
    Recipe.create!(drink_id: 48, ingredient_id: 62, parts: 1)
    Recipe.create!(drink_id: 49, ingredient_id: 1, parts: 1.33)
    Recipe.create!(drink_id: 49, ingredient_id: 15, parts: 0.5)
    Recipe.create!(drink_id: 49, ingredient_id: 19, parts: 0.5)
    Recipe.create!(drink_id: 49, ingredient_id: 20, parts: 0.33)
    Recipe.create!(drink_id: 49, ingredient_id: 63, parts: 1)
    Recipe.create!(drink_id: 50, ingredient_id: 1, parts: 2)
    Recipe.create!(drink_id: 50, ingredient_id: 27, parts: 1)
    Recipe.create!(drink_id: 50, ingredient_id: 64, parts: 1)
    Recipe.create!(drink_id: 50, ingredient_id: 15, parts: 0.33)
    Recipe.create!(drink_id: 50, ingredient_id: 19, parts: 0.33)

puts "Seeding Done!"