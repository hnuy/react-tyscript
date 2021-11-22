import { Route, Switch } from "react-router-dom"
import './App.css';
import MainApp from "./pages/mainApp/main";
import Strength from "./pages/strength/heroStr";
import Agility from "./pages/agility/heroAgi";
import Intelligent from "./pages/intelligent/heroInt";
import HeroDetail from "./pages/heroDetail/heroDetail";

function App() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route path="/main" component={MainApp} />
        <Route path="/strength" component={Strength} />
        <Route path="/agility" component={Agility} />
        <Route path="/intelligent" component={Intelligent} />
        <Route path="/herodetail" component={HeroDetail} />
      </Switch>
    </Route>
  );
}

export default App;
