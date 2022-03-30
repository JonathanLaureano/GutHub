import React, {useState} from "react";
import './IngredientCard.css';

export default function IngredientCard({ingredient,mixes,setMixes}){
    const images = require.context('../Images-Resized',true);
    let [partsCount,setPartsCount] = useState(0);

    let imgClass;

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

    function handleAddUpdatePartsCount(num){
        if (partsCount<num){
            setPartsCount(partsCount+=1)
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": partsCount}
            if (mixes.mix.length>0){
                let filteredMix = mixes.mix.filter(mix=> mix["ingredient_id"]!=ingredient.id)
                let updatedMix= [...filteredMix,ingredientRecipe];
                let newMixes = {"mix": updatedMix}
                setMixes(newMixes)
            } else{
                let updatedMix= [...mixes.mix,ingredientRecipe];
                let newMixes = {"mix": updatedMix}
                setMixes(newMixes)
            }

     }
    }

    function addClick(){
        console.log(ingredient)
        if(ingredient.ingredient_type!='Solid'){
            handleAddUpdatePartsCount(5)
        } else{
            handleAddUpdatePartsCount(1)
        }
    }

    function subtractClick(){
        if (partsCount>1) {
            setPartsCount(partsCount-=1)
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": partsCount}
            if (mixes.mix.length>0){
                let filteredMix = mixes.mix.filter(mix=> mix["ingredient_id"]!=ingredient.id)
                let updatedMix= [...filteredMix,ingredientRecipe];
                let newMixes = {"mix": updatedMix}
                setMixes(newMixes)
            } else{
                let updatedMix= [...mixes.mix,ingredientRecipe];
                let newMixes = {"mix": updatedMix}
                setMixes(newMixes)
            }}
         else if (partsCount=1){
            setPartsCount(partsCount-=1)
            let filteredMix = mixes.mix.filter(mix=> mix["ingredient_id"]!=ingredient.id)
            let newMixes = {"mix": filteredMix}
            setMixes(newMixes)
        } 
    }

    let countClass;
    
    switch (partsCount){
        case 5:
            countClass='count-max';
            break;
        case 4:
        case 3:
        case 2:
        case 1:
            countClass='count-active';
            break;
        default:
            countClass='count'
    }

    let countClass2;
    if (ingredient.ingredient_type!='Solid'){
        if (partsCount===5){
            countClass2='count-max';
        } else if(partsCount>0){
        countClass2='count-active';
        } else {
            countClass2='count'
        }
    } else {
        if (partsCount===1){
            countClass2='count-max';
        } else{
            countClass2='count';
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
                        <div className={countClass2}>{partsCount}</div>
                        <img className="add" src='https://img.icons8.com/fluency/48/000000/add.png' onClick={addClick}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}