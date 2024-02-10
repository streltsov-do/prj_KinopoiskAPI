import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { LabeledInput } from "../../components/Input/LabeledInput";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { LOGIN } from "../../redux/sliceAuth";
import { CLEAR_FILMS } from "../../redux/sliceData";
import { Desc, Div, ErrorDesc, Flex, FormReg, Title } from "./style/PageMain";

export const PageMain = () => {
    const [apiKey, setApiKey] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const auth = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        auth && navigate("/info");
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setError(false);
        setApiKey(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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
                    <FormReg>
                        <Title>Введите токен X_API_KEY*</Title>
                        <LabeledInput
                            label="Токен"
                            type="text"
                            value={apiKey}
                            onChange={handleChange}
                            $width={"350px"}
                        />
                        <Flex>
                            <Button onClick={handleClick}>Войти</Button>
                            {error && (
                                <ErrorDesc>ERROR: Поле не заполнено!</ErrorDesc>
                            )}
                        </Flex>
                        <Desc>
                            * - доступен после регистрации на{" "}
                            <Link to="https://kinopoiskapiunofficial.tech">
                                Kinopoisk Unofficial API
                            </Link>
                        </Desc>
                    </FormReg>
                </Div>
            ) : (
                <></>
            )}
        </>
    );
};
