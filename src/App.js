import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const API_ID = "d4895628";
  const API_KEY = "af15851d3bfe75fb91fa84d4a798e194";


  const [mySearch, setMySearch] = useState('');

  const [myRecipes, setMyRecipes] = useState([]);

  const [wordSubmitted, setWordSubmitted] = useState("")
  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

    

    const myReciprSearch = (e) => {
    setMySearch(e.target.value);
    }

    const finalSearch = (e) => {
      e.preventDefault();
      setWordSubmitted(mySearch);
      setMySearch("");
    }
  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myReciprSearch} value={mySearch}/>
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src='https://img.icons8.com/fluency/48/000000/fry.png' alt='icon' className='icons'/>
        </button>
      </div>
      {myRecipes.map(element => (
        <MyRecipesComponent
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}/>
      ))}
    </div>
  );
}

export default App;
