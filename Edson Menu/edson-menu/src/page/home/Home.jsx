import { useState } from "react";
import "./Home.css";
import axios from "axios";
import Header from "../../component/header/Header";
import Card from "../../component/card/Card";
import home from "../../assets/home.jpg";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipe, setRecipe] = useState(null);

  const appId = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;

  // Header codings
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipe(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipe && <img className="homeImg" src={home} alt="home" />}
      {recipe?.length === 0 && <h1>Sorry, Try Another Food</h1>}
      {recipe?.length > 0 && <Card recipe={recipe} />}
    </div>
  );
};

export default Home;
