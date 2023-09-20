import { useLoaderData } from "react-router-dom";

const MealsDetails = () => {
    const mealsDetails = useLoaderData();
    console.log(mealsDetails.meals);
    // const {strCategory} = mealsDetails.categories;
    // const mealsArray = mealsDetails.categories;

    return (
        <div>
            {/* <h2>{strCategory}</h2> */}
            {
                mealsDetails.meals.map(meal => <div key={meal.idCategory}>
                    <img width={300} src={meal.strMealThumb} alt="" />
                    <br />
                    {meal.strCategory}
                    <br />
                    <p>{meal.strInstructions}</p>
                    </div>)
            }
        </div>
    );
};

export default MealsDetails;