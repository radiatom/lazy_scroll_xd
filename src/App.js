import { useEffect } from 'react';
import './App.scss';
import FullRecipe from './components/FullRecipe/FullRecipe';
import Recipes from './components/Recipes/Recipes';

function App() {
  
  return (
    <div className="App">
      <FullRecipe/>
      <Recipes/>
    </div>
  );
}

export default App;
