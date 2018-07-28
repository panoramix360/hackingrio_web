import React, { Component } from "react";
import "typeface-roboto";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import { Provider } from "mobx-react";
import stores from "./stores";
import BudgetScreen from "./screens/Budget/BudgetScreen";
import MyEmployeesScreen from "./screens/MyEmployees/MyEmployeesScreen";

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={HomeScreen} />
                        <Route
                            path="/orcamento"
                            exact={true}
                            component={BudgetScreen}
                        />
                        <Route
                            path="/funcionarios"
                            exact={true}
                            component={MyEmployeesScreen}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
