import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormSimple } from "../../components/FormSimple/FormSimple";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { LOGIN } from "../../redux/sliceAuth";
import { CLEAR_FILMS } from "../../redux/sliceData";
import { Desc, Div } from "./style/PageMain";

export const PageMain = () => {
    const [apiKey, setApiKey] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const auth = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        auth && navigate("/info");
    }, []);

    const handleChange = (val: string | number | readonly string[]) => {
        setError(false);
        setApiKey(val + "");
    };

    const handleSubmit = () => {
        if (!apiKey) {
            setError(true);
        } else {
            dispatch(LOGIN(apiKey));
            dispatch(CLEAR_FILMS());
            localStorage.setItem("auth", apiKey);
            navigate("/info");
        }
    };

    return (
        <>
            {!auth ? (
                <Div>
                    <FormSimple
                        title="Введите токен X_API_KEY*"
                        data={apiKey}
                        changeData={handleChange}
                        inputText="Токен"
                        inputWidth="350px"
                        submitText="Войти"
                        onSubmit={handleSubmit}
                        errorMessage={error ? "Поле не заполнено" : ""}
                    />
                    <Desc>
                        * - доступен после регистрации на{" "}
                        <Link to="https://kinopoiskapiunofficial.tech">
                            Kinopoisk Unofficial API
                        </Link>
                    </Desc>
                </Div>
            ) : (
                <></>
            )}
        </>
    );
};
