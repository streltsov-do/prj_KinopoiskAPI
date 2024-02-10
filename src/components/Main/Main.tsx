import { Route, Routes } from "react-router";
import { ARR_ROUTES } from "../../utils/constants";
import { Div } from "./style/Main";

export const Main = () => {
    return (
        <Div>
            <Routes>
                {ARR_ROUTES.map((item, idx) => (
                    <Route key={idx} path={item.path} element={item.element} />
                ))}
            </Routes>
        </Div>
    );
};
