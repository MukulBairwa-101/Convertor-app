
import { Switch ,Route} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home";
import Temperature from "./Components/Temperature";
import Unit from "./Components/Unit";
import Currency from "./Components/Currency";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/temperature_convertor" component={Temperature} />
        <Route exact path="/unit_convertor" component={Unit} />
        <Route exact path="/currency_convertor" component={Currency} />
      </Switch>
    </div>
  );
}

export default App;
