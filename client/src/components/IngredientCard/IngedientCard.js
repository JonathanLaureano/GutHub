import React, {useState} from "react";
import './IngredientCard.css';

export default function IngredientCard({ingredient,mixes,setMixes}){
    const images = require.context('../Images-Resized',true);
    let [partsCount,setPartsCount] = useState(0);
    let [recipe,setRecipe] =useState({
        "ingredient_id": ingredient.id,
        "parts": partsCount 
    })
    let imgClass;

    let allMixes = mixes.mix;

    switch (ingredient.name) {
        case "Gin":
            imgClass='ingredient-card-image gin'
            break;
        case "Nutmeg":
            imgClass='ingredient-card-image nutmeg'
            break;
        case 'Milk':
            imgClass='ingredient-card-image milk'
            break;
        case 'Mint Leaves':
            imgClass='ingredient-card-image mint'
            break;
        default:
            imgClass='ingredient-card-image'
    }

    function addClick(){
        if (partsCount<10){
            setPartsCount(partsCount+=1)
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": partsCount}
            if (mixes.mix.length>0){
                console.log(mixes.mix)
                let filteredMixes = mixes.mix.filter(mix=> mix["ingredient_id"]!=ingredient.id)
                console.log(filteredMixes)
                let updatedMix= [...filteredMixes,ingredientRecipe];
                console.log(updatedMix)
                let newMixes = {"mix": updatedMix}
                setMixes(newMixes)
                // console.log(mixes.mix)    
            } else{
                let updatedMix= [...mixes.mix,ingredientRecipe];
                // console.log(updatedMix)
                let newMixes = {"mix": updatedMix}
                setMixes(newMixes)
                // console.log(mixes.mix)
            }
    }}

    function subtractClick(){
        if (partsCount>1) {
            setPartsCount(partsCount-=1)
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": partsCount}
            mixes.mix.filter(mix=> mix.ingredient_id==ingredient.id)
            mixes.mix.push(ingredientRecipe)
            console.log(mixes.mix)
            setRecipe(ingredientRecipe)}
         else if (partsCount=1){
            setPartsCount(partsCount-=1)
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": partsCount}
            setRecipe(ingredientRecipe)
            mixes.mix.filter(mix=> mix.ingredient_id==ingredient.id)
            console.log(mixes.mix)
        } else {
            console.log(mixes.mix)
        }
    }
    
    return(
        <React.Fragment>
            <div className="ingredient-card-container">
                <img className={imgClass} src={images('./'+ingredient.image_url)}/>
                <div className="ingredient-card-text-info">
                    <div className="ingredient-card-name">{ingredient.name}</div>
                    <div className="ingredient-card-partsCount">
                        <img className="subtract" src='https://img.icons8.com/fluency/48/000000/do-not-disturb.png' onClick={subtractClick}/>
                        <div className="count">{partsCount}</div>
                        <img className="add" src='https://img.icons8.com/fluency/48/000000/add.png' onClick={addClick}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}