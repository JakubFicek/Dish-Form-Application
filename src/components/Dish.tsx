import { DISH_TYPES, Dish } from "../api/interfaces";
import "./Components.css";

export type FormData = { [key: string]: unknown };

export type DishCardProps = {
  dish: Dish;
};

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="dish-container">
      <h1>Dish Response</h1>
      <ul>
        <li className="list-item">
          <p className="dish-key">ID:</p>
          <p className="dish-value">{dish.id}</p>
        </li>
        <li className="list-item">
          <p className="dish-key">Name:</p>
          <p className="dish-value">{dish.name}</p>
        </li>
        <li className="list-item">
          <p className="dish-key">Preperation time:</p>
          <p className="dish-value">{dish.preparationTime}</p>
        </li>
        <li className="list-item">
          <p className="dish-key">Type:</p>
          <p className="dish-value">{dish.type}</p>
        </li>

        {dish.type === DISH_TYPES.PIZZA && (
          <li className="list-item">
            <p className="dish-key">Number of slices:</p>
            <p className="dish-value">{dish.noOfSlices}</p>
          </li>
        )}

        {dish.type === DISH_TYPES.PIZZA && (
          <li className="list-item">
            <p className="dish-key">Diameter:</p>
            <p className="dish-value">{dish.diameter}</p>
          </li>
        )}

        {dish.type === DISH_TYPES.SOUP && (
          <li className="list-item">
            <p className="dish-key">Spiciness:</p>
            <p className="dish-value">{dish.spicinessScale}</p>
          </li>
        )}

        {dish.type === DISH_TYPES.SANDWICH && (
          <li className="list-item">
            <p className="dish-key">Slices of bread:</p>
            <p className="dish-value">{dish.slicesOfBread}</p>
          </li>
        )}

      </ul>
    </div>
  );
};
