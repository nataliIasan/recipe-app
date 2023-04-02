function MyRecipesComponent({label, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container tasty">
                <img src={image} alt="foto"/>
            </div>

            <ul className="list">{ingredients.map(ingredient => (
                <li><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/256/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>{ingredient}</li>
            ))}
            </ul>

            <div className="container">
                <p>{calories.toFixed()}calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;