import { Meals } from "./Meals"

function MealList({meals}) {
    return <div className="listen">
        {meals.map(meal => (
            <Meals key={meal.idMeal} {...meal} />
        ))}
    </div>
}

export {MealList}