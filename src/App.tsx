import React from "react";
import ReactDOM from "react-dom";
import PhoneListContainer from "./PhoneListContainer";
import { Provider } from "react-redux";
import { configureStore } from "./store";


const store = configureStore({});

class App extends React.Component {
    render() {
        return <Provider store={store}>
            <PhoneListContainer />
        </Provider>
    }
}


ReactDOM.render(<App />, document.querySelector("#app"))