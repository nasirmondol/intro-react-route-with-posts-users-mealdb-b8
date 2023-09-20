import PropTypes from 'prop-types';
import './Meal.css'
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMealThumb, strInstructions, strMeal, idMeal } = meal;
console.log(meal);
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(1, 100)}</p>
            <Link to={`/meal/${idMeal}`}><button>Show Meal Details</button></Link>
        </div>
    );
};

Meal.propTypes = {
    meal: PropTypes.object
}


export default Meal;