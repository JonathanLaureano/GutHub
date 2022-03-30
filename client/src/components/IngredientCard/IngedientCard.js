import React, {useState} from "react";
import './IngredientCard.css';

export default function IngredientCard({ingredient}){
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

    

    return(
        <React.Fragment>
            <div className="ingredient-card-container">
                <img className={imgClass} src={images('./'+ingredient.image_url)}/>
                <div className="ingredient-card-text-info">
                    <div className="ingredient-card-name">{ingredient.name}</div>
                    <div className="ingredient-card-partsCount">
                        <img className="subtract" src='https://img.icons8.com/fluency/48/000000/do-not-disturb.png'/>
                        <div className="count">{partsCount}</div>
                        {/* <div className="add">+</div> */}
                        <img className="add" src='https://img.icons8.com/fluency/48/000000/add.png'/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}