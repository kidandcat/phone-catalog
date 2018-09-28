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
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Layout from "./Layout";


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
            <UWPThemeProvider
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                theme={getTheme({
                    useFluentDesign: true,
                    desktopBackgroundImage: "http://getwallpapers.com/wallpaper/full/3/d/6/12799.jpg"
                })}
            >
                <Layout>
                    <ConnectedRouter history={config.history}>
                        <Switch>
                            <Route exact path="/details/:id" component={PhoneDetailComponent} />
                            <Route component={PhoneListContainer} />
                        </Switch>
                    </ConnectedRouter>
                </Layout>
            </UWPThemeProvider>
        </Provider >
    }
}


ReactDOM.render(<App />, document.querySelector("#app"))