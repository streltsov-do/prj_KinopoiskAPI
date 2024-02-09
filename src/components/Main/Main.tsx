import { Route, Routes } from "react-router";
import { PageMain } from "../../pages/PageMain/PageMain";

const ARR_ROUTES = [
    {
        path: "/",
        element: <PageMain />,
    },
];

export const Main = () => {
    return (
        <div>
            <Routes>
                {ARR_ROUTES.map((item, idx) => (
                    <Route key={idx} path={item.path} element={item.element} />
                ))}
            </Routes>
        </div>
    );
};
