import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { ARR_ROUTES } from "../../utils/constants";
import { Button } from "../Button/Button";
import { ModalLogout } from "../ModalLogout/ModalLogout";
import { Div, Li, Nav, Title } from "./style/Header";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const location = useLocation();

    const logged = useAppSelector((state: RootState) => state.auth) !== "";

    const classLink = ARR_ROUTES.map(
        (val) =>
            `nav__link ${location.pathname === val.path && "nav__link_active"}`,
    );

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Div>
            <Title>
                Сервис информации
                <br />
                по фильмам
            </Title>
            <Nav>
                {ARR_ROUTES.map((val, idx) => {
                    return (
                        ((val.logged && logged) ||
                            (!val.logged && !logged)) && (
                            <Li key={idx}>
                                <NavLink
                                    className={classLink[idx]}
                                    to={val.path}
                                >
                                    {val.name}
                                </NavLink>
                            </Li>
                        )
                    );
                })}
                {logged && <Button onClick={handleLogout}>Выйти</Button>}
                {showModal &&
                    createPortal(
                        <ModalLogout close={handleCloseModal} />,
                        document.body,
                    )}
            </Nav>
        </Div>
    );
};
