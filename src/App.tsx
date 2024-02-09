import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { GlobalStyle } from "./style/globalStyle";
import { Provider } from "react-redux";
import { store } from "./redux/reducers";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Provider store={store}>
                <Header />

                <Main />

                <Footer />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
