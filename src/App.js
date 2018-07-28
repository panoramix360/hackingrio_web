import React, { Component } from "react";
import "typeface-roboto";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import { Provider } from "mobx-react";
import stores from "./stores";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import oauthHelper from "./helpers/oauthHelper";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider {...stores}>
                    <BrowserRouter>
                        <Switch>
                            <Route
                                path="/"
                                exact={true}
                                component={HomeScreen}
                            />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authed = oauthHelper.isAutenticated();

    return (
        <Route
            {...rest}
            render={props =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: props.location } }}
                    />
                )
            }
        />
    );
};

export default App;
