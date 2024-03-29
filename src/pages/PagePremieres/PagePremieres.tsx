import { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import { CardPremier } from "../../components/CardPremier/CardPremier";
import { FormSimple } from "../../components/FormSimple/FormSimple";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { SET_PREMIERES } from "../../redux/sliceData";
import { IntPremieres, PremieresInit } from "../../utils/types";
import { Div, Error, Flex, SliderDiv, Title } from "./style/PagePremieres";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DropDown } from "../../components/DropDown/DropDown";
import { ARR_MONTH, ARR_MONTH_RU } from "../../utils/constants";
import { ModalLogout } from "../../components/ModalLogout/ModalLogout";
import { createPortal } from "react-dom";

const WIDTH_CARD = 380;
const PADDING_LEFT = 20;
const WIDTH_LABEL = "50px";

export const PagePremieres = () => {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(0);
    const [premieres, setPremieres] = useState<IntPremieres>(PremieresInit);
    const [displayNum, setDisplayNum] = useState(1);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const dispatch = useAppDispatch();
    const X_API_KEY = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        const data = sessionStorage.getItem("premieres");
        if (data) {
            const jsonData = JSON.parse(data);
            dispatch(SET_PREMIERES(jsonData));
            setPremieres(jsonData);
            handeResize();
        }
    }, []);

    const handleChange = (val: string | number | readonly string[]) => {
        setYear(+val);
    };

    const handleRequest = () => {
        setError("");
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${ARR_MONTH[month]}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "X-API-KEY": X_API_KEY,
                },
            },
        ).then((response) => {
            return response.json().then((data) => {
                console.log("response", response);
                console.log("data", data);
                if (response.ok) {
                    sessionStorage.setItem("premieres", JSON.stringify(data));
                    setPremieres(data);
                    dispatch(SET_PREMIERES(data));
                } else {
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
                        case 429:
                            errorMessage =
                                "Слишком много запросов. Лимит 5 запросов в секунду";
                            break;
                        default:
                            errorMessage = data.message;
                            break;
                    }
                    if (response.status !== 401) {
                        setError(errorMessage);
                    }
                }
            });
        });
    };

    const handeResize = useCallback(() => {
        const widthCardDivMax = window.innerWidth - PADDING_LEFT * 2;
        let newDisplayNum = Math.floor(widthCardDivMax / WIDTH_CARD);
        newDisplayNum = newDisplayNum > 8 ? 8 : newDisplayNum;

        if (newDisplayNum !== displayNum && newDisplayNum > 0) {
            setDisplayNum(newDisplayNum);
        }
    }, [displayNum]);

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [handeResize]);

    const handleMonth = (val: number) => {
        setError("");
        setMonth(val);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        row: 1,
        vertical: false,
        slidesToShow: displayNum,
        slidesToScroll: 1,
        height: "250px",
    };

    return (
        <Div>
            <FormSimple
                title="Премьеры за"
                data={year}
                changeData={handleChange}
                inputText="Год"
                inputType="number"
                inputWidth="125px"
                inputWidthLabel={WIDTH_LABEL}
                submitText="Показать"
                onSubmit={handleRequest}
                extInputs={
                    <Flex>
                        <Title $width={WIDTH_LABEL}>Месяц</Title>
                        <DropDown
                            items={ARR_MONTH_RU}
                            val={month}
                            setVal={handleMonth}
                        />
                    </Flex>
                }
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
            {premieres.items.length > 0 && (
                <SliderDiv items={displayNum}>
                    <Slider {...settings}>
                        {premieres.items.map((val, idx) => {
                            return <CardPremier key={idx} info={val} />;
                        })}
                    </Slider>
                </SliderDiv>
            )}
        </Div>
    );
};
