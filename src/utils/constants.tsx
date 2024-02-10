import { PageInfo } from "../pages/PageInfo/PageInfo";
import { PageMain } from "../pages/PageMain/PageMain";
import { PagePremieres } from "../pages/PagePremieres/PagePremieres";

export const ARR_ROUTES = [
    {
        path: "/",
        element: <PageMain />,
        name: "Вход",
        logged: false,
    },
    {
        path: "/info",
        element: <PageInfo />,
        name: (
            <span>
                Информация
                <br />
                по ID фильма
            </span>
        ),
        logged: true,
    },
    {
        path: "/premieres",
        element: <PagePremieres />,
        name: "Премьеры",
        logged: true,
    },
];
