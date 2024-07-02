import { useLocation } from "react-router-dom";
import "./Detail.css";
import meal from "../../assets/meal.jpg";

const Detail = () => {
  const { state } = useLocation();

  return (
    <div className="detailWrapper">
      <div className="imgWrapper">
        <h1>{state.label}</h1>
        <img src={state.image} alt="food" />
      </div>
      <div className="bottomWrapper">
         <div className="nutWrapper">
        <h3>NUTRIENTS</h3>
        <p>
          {state.totalNutrients.CA.label} :{" "}
          {Math.round(state.totalNutrients.CA.quantity)}
          {state.totalNutrients.CA.unit}
        </p>
        <p>
          {state.totalNutrients.CHOCDF.label} :{" "}
          {Math.round(state.totalNutrients.CHOCDF.quantity)}
          {state.totalNutrients.CHOCDF.unit}
        </p>
        <p>
          {state.totalNutrients.CHOLE.label} :{" "}
          {Math.round(state.totalNutrients.CHOLE.quantity)}
          {state.totalNutrients.CHOLE.unit}
        </p>
        <p>
          {state.totalNutrients.ENERC_KCAL.label} :{" "}
          {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
          {state.totalNutrients.ENERC_KCAL.unit}
        </p>
        <p>
          {state.totalNutrients.FAT.label} :{" "}
          {Math.round(state.totalNutrients.FAT.quantity)}
          {state.totalNutrients.FAT.unit}
        </p>
        <p>
          {state.totalNutrients.SUGAR.label} :{" "}
          {Math.round(state.totalNutrients.SUGAR.quantity)}
          {state.totalNutrients.SUGAR.unit}
        </p>
        <p>
          {state.totalNutrients.FIBTG.label} :{" "}
          {Math.round(state.totalNutrients.FIBTG.quantity)}
          {state.totalNutrients.FIBTG.unit}
        </p>
        <p>
          {state.totalNutrients.PROCNT.label} :{" "}
          {Math.round(state.totalNutrients.PROCNT.quantity)}
          {state.totalNutrients.PROCNT.unit}
        </p>

        <p>Calories: {Math.round(state.calories)}</p>
        {state.digest.slice(0, 4).map((item, index) => (
          <p key={index}>
            {item.label} : {Math.round(item.total)}
          </p>
        ))}
      </div>
      <div className="mealImage">
        <img src={meal} alt="food" />
      </div>
      <div className="ingWrapper">
        <h4>INGREDIENT</h4>
        {state.ingredientLines.map((ingredient, index) => (
          <div>
            <p>
              {index + 1}-{ingredient}
            </p>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default Detail;
