import {Provider} from "react-redux";
import App from "./App";
import {store} from "../../api/store";

export const AppWrapper = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}