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
        let isFloat = partsCount.toString().indexOf('.') != -1;
        if (isFloat){
            setPartsCount(Math.ceil(partsCount))
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": Math.ceil(partsCount)}
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
        else{
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
    }

    function addClick(){
        if(ingredient.ingredient_type!='Solid'){
            handleAddUpdatePartsCount(5)
        } else{
            handleAddUpdatePartsCount(1)
        }
    }



    function subtractClick(){
        let isFloat = partsCount.toString().indexOf('.') != -1;
        if (isFloat){
                setPartsCount(Math.floor(partsCount))
                let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": Math.floor(partsCount)}
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
        else{
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
             else if (partsCount==1){
                setPartsCount(partsCount-=1)
                let filteredMix = mixes.mix.filter(mix=> mix["ingredient_id"]!=ingredient.id)
                let newMixes = {"mix": filteredMix}
                setMixes(newMixes)
            } 
    
        }
    }

    function handleCountClick(e){
        console.log(e.target)
    }

    function handleUpdatePartsCountOnInput(e){
        // let updatedCount = partsCount.toString().indexOf('.') != -1? parseFloat(e.target.value).toFixed(2):e.target.value;
        let newValue = e.target.value;
        setPartsCount(newValue);
        if (newValue.toString().indexOf('.') != -1) {
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": parseFloat(newValue).toFixed(2)}
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
        }else {
            let ingredientRecipe = {"ingredient_id": ingredient.id,"parts": newValue}
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

    function handleOffFocusClick(e){
        let newValue =e.target.value;
        if (newValue===''){
            setPartsCount(0);
            let filteredMix = mixes.mix.filter(mix=> mix["ingredient_id"]!=ingredient.id)
            let newMixes = {"mix": filteredMix}
            setMixes(newMixes)
        } else if (newValue.toString().indexOf('.') != -1){
            setPartsCount(parseFloat(newValue).toFixed(2));
        }
    }


    let countClass;
    if (ingredient.ingredient_type!='Solid'){
        if (partsCount===5){
            countClass='count-max';
        } else if(partsCount>0){
        countClass='count-active';
        } else {
            countClass='count'
        }
    } else {
        if (partsCount===1){
            countClass='count-max';
        } else{
            countClass='count';
        }
    }

    let inputClass;
    if (ingredient.ingredient_type!='Solid'){
        if (partsCount===5){
            inputClass='count-input-max';
        } else if(partsCount>0){
        inputClass='count-input-active';
        } else {
            inputClass='count-input'
        }
    } else {
        if (partsCount===1){
            inputClass='count-input-max';
        } else{
            inputClass='count-input';
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
                        {/* <div onClick={handleCountClick} className={countClass}>{partsCount}</div> */}
                        <input onBlur={handleOffFocusClick} className={inputClass} value={partsCount} onChange={handleUpdatePartsCountOnInput} type='number' min='0' max='5'></input>
                        <img className="add" src='https://img.icons8.com/fluency/48/000000/add.png' onClick={addClick}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}