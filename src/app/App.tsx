import { Route, Switch } from "react-router-dom";
import HomePage from "./screens/homePage";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/bmodal.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/about"></Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
