import "./App.css";

import { DishCard } from "./components/Dish";
import { DishesForm } from "./components/DishesForm";

import { useDishes } from "./api/use-dishes";
import { ErrorMessage } from "./components/form/ErrorMessage";

function App() {
  const {
    actions,
    state: { result, error },
  } = useDishes();

  return (
    <div className="App">
      {!result && (
        <div>
          <h1>Dish form application</h1>
          <DishesForm onSubmit={actions.createDish} apiErrors={error} />
        </div>
      )}

      {result && (
        <div className="response-container">
          <DishCard dish={result} />
          <button onClick={actions.reset} className="button">
            Go back
          </button>
        </div>
      )}

      {error && <ErrorMessage field="api" errors={error} />}
    </div>
  );
}

export default App;
