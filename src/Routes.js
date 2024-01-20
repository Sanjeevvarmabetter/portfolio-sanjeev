import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Projects } from "./pages/Projects"; 
export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/projects">
                        <Projects />
                </Route>
            </Switch>
        </Router>
    );
}