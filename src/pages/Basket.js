import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem";
import {fetchBasketItem, fetchBrands} from "../components/https/deviceAPI";

const Basket = () => {
    const {devices} = useContext(Context);
    useEffect(()=> {
        fetchBasketItem().then(data=>devices.setBasket(data));
    }, [])
    return (
        <Container>
            {devices.devices.map(device => <BasketItem key={device.id} img={device.img} name={device.name} price={device.price}/>)}
        </Container>
    );
};

export default Basket;