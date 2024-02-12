import { PageInfo } from "../pages/PageInfo/PageInfo";
import { PageMain } from "../pages/PageMain/PageMain";
import { PagePremieres } from "../pages/PagePremieres/PagePremieres";
import { TypeMonth } from "./types";

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

export const ARR_MONTH: TypeMonth[] = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
];

export const ARR_MONTH_RU = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];
