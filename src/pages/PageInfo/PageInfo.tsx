import { useState } from "react";
import { createPortal } from "react-dom";
import { Card } from "../../components/Card/Card";
import { FormSimple } from "../../components/FormSimple/FormSimple";
import { ModalLogout } from "../../components/ModalLogout/ModalLogout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { ADD_FILM } from "../../redux/sliceData";
import { Cards, Div, Error } from "./style/PageInfo";

export const PageInfo = () => {
    const [id, setId] = useState(301);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const dispatch = useAppDispatch();
    const X_API_KEY = useAppSelector((state: RootState) => state.auth);

    const data = useAppSelector((state: RootState) => state.data);
    const films = data.films;

    const handleRequest = () => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "X-API-KEY": X_API_KEY,
            },
        }).then((response) => {
            console.log("response", response);
            console.log("response.status", response.status);

            let errorMessage = "";
            switch (response.status) {
                case 401:
                    // errorMessage = "Пустой или неправильный токен";
                    setShowModal(true);
                    break;
                case 402:
                    errorMessage =
                        "Превышен лимит запросов (или дневной, или общий)";
                    break;
                case 404:
                    errorMessage = "Фильм не найден";
                    break;
                case 429:
                    errorMessage =
                        "Слишком много запросов. Общий лимит - 20 запросов в секунду";
                    break;
                default:
                    break;
            }
            if (response.ok) {
                return response.json().then((data) => {
                    dispatch(ADD_FILM(data));
                });
            } else {
                if (response.status !== 401) {
                    if (errorMessage) {
                        setError(errorMessage);
                    } else {
                        response.json().then((data) => {
                            setError(data.message);
                        });
                    }
                }

                return;
            }
        });
    };

    const handleChange = (val: string | number | readonly string[]) => {
        setError("");
        setId(Number(val));
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Div>
            <FormSimple
                title="Введите ID фильма"
                data={id}
                changeData={handleChange}
                inputText="ID:"
                onSubmit={handleRequest}
                submitText="Получить данные"
                // errorMessage={error}
            />
            {error && <Error>Error: {error}</Error>}
            {showModal &&
                createPortal(
                    <ModalLogout
                        close={handleCloseModal}
                        title="Пустой или неправильный токен"
                    />,
                    document.body,
                )}
            <Cards>
                {films.map((val, idx) => (
                    <Card key={idx} info={val} />
                ))}
            </Cards>
        </Div>
    );
};
