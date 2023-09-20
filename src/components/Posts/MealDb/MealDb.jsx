import { useLoaderData } from "react-router-dom";
import Meal from "../../Meal/Meal";
import './MealDb.css'

const MealDb = () => {
    const meals = useLoaderData();
    console.log(meals.meals);
    const mealsArray = meals.meals;

    return (
        <div>
            <h2>Practice mealDb with mealDb: {meals.meals.length}</h2>
            <div className="meals-container">
                {
                    mealsArray.map(meal => <Meal
                        key={meal.idCategory}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default MealDb;