import "./Card.css";
import defaultImg from "../../assets/defaultImage.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const navigate = useNavigate();
  console.log(recipe);
  return (
    <div className="card">
      {recipe.map(({ recipe }, index) => {
        const { label, image } = recipe;
        return (
          <div className="cardWrapper" key={index}>
            <h1>{label}</h1>
            <img src={image ? image : defaultImg} alt={label} />
            <button onClick={() => navigate("detail", { state: recipe, replace:false })}>
              More Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
