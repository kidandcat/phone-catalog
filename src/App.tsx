import React from "react";
import ReactDOM from "react-dom";
import PhoneListContainer from "./PhoneListContainer";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { ConnectedRouter } from 'connected-react-router'
import { PhoneDetailComponent } from "./PhoneDetailComponent";
import { Route, Switch } from 'react-router'
import axios from "axios"
import { Actions } from "./actions";

const config = configureStore();

class App extends React.Component {
    componentDidMount() {
        const { fetchMobilesError, fetchMobiles, fetchMobilesSuccess } = Actions
        config.store.dispatch(fetchMobiles())
        axios.get(process.env.API)
            .then(response => {
                if (response.status < 400) {
                    config.store.dispatch(fetchMobilesSuccess(response.data))
                } else {
                    config.store.dispatch(fetchMobilesError(response.statusText))
                }
            })
            .catch(error => {
                config.store.dispatch(fetchMobilesError(error))
            })
    }
    render() {
        return <Provider store={config.store}>
            <ConnectedRouter history={config.history}>
                <div>
                    <Switch>
                        <Route exact path="/details/:id" component={PhoneDetailComponent} />
                        <Route render={() => (<PhoneListContainer />)} />
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    }
}


ReactDOM.render(<App />, document.querySelector("#app"))