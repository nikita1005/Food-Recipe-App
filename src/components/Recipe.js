import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Box, Typography } from "@material-ui/core/";
import { red } from "@material-ui/core/colors";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, calories } = recipe.recipe;

  return (
    <div className="recipe" >
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
      <br></br>
      <Card
        
        style={{ backgroundColor: "#2174a3" }}
        component={Box}
        p={3}
        align="center"
      > 
      
          <Typography variant="h4" align="center" style={{textDecorationColor:"#FFFFFF"}}  >
        Calories {calories}kcal
          </Typography>
          
      </Card>
    </div>
  );
};

export default Recipe;
