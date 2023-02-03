import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from "react-bootstrap";

const App = ()=>{
  const design = (
    <>
      <Router>
        <Header/>
        <div>
          <Container>
            <Switch>
              <Route exact path="/">
                <h1>Welcome to Homepage</h1>
              </Route>
              <Route exact path="/blog">
                <h1>Welcome to blog</h1>
              </Route>
              <Route exact path="/software-engineering">
                <h1>Welcome to Software Engineering</h1>
              </Route>
            </Switch>
          </Container>
        </div>
        <Footer/>
      </Router>
    </>
  );
  return design;
}
export default App;