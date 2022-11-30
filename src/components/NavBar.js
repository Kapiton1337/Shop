import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import TypeBar from "./TypeBar";
import Shop from "../pages/Shop";
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();



    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav.Link href={SHOP_ROUTE}>KapitonStore</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button onClick={logOut}>Выйти</Button>
                            <Button onClick={()=>navigate(BASKET_ROUTE)}>Корзина</Button>
                        </Nav>
                        :
                        <Nav className="me-auto">
                            <Button onClick={()=>navigate(REGISTRATION_ROUTE)}>Авторизация</Button>
                            <NavDropdown title="Каталог" id="basic-nav-dropdown">
                                <Shop/>
                            </NavDropdown>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default NavBar;