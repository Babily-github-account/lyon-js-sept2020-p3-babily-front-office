import "../style/App.css";
import Home from "./Home";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import EspacePro from "./EspacePro";
import EspaceParents from "./EspaceParents";
import ViePrivee from "./ViePrivee";
import Mentions from "./Mentions";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/inscription" component={Inscription}></Route>
          <Route exact path="/connexion" component={Connexion}></Route>
          <Route path="/espacepro" component={EspacePro}></Route>
          <Route path="/espaceparents" component={EspaceParents}></Route>
          <Route path="/vieprivee" component={ViePrivee}></Route>
          <Route path="/mentions" component={Mentions}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
