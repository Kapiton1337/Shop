import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import {login, registration} from "../components/https/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const navigation = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    try {
        const click = async () => {
            let data;
            if(isLogin){
                data = await login(email, password);
            } else {
                data = await registration(email, password);
                console.log(data);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigation(SHOP_ROUTE);
        }
    } catch (e) {
      alert(e.response.data.message)
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-2" placeholder={"Введите ваш email..."} value={email} onChange={e=>setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder={"Введите ваш пароль..."} value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                Есть аккаунт? <NavLink to={REGISTRATION_ROUTE}> Войдите</NavLink>
                            </div>
                            :
                            <div>
                                Еще не зарегистрированы? <NavLink to={LOGIN_ROUTE}> Пройти регистрацию</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            <div>{isLogin ? "Войти" : "Зарегистрироваться"}</div>
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
})

export default Auth;