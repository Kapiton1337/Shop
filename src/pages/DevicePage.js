import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {STAR} from "../utils/consts";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../components/https/deviceAPI";

const DevicePage = () => {
    /*const {devices: {devices}} = useContext(Context);
    const description = [
        {id: 1, title: "Оперативная память", description: "5gb"},
        {id: 2, title: "Камера", description: "12 mpx"},
        {id: 3, title: "Процессор", description: "AMD"},
        {id: 4, title: "Количество ядер", description: "8"},
        {id: 5, title: "Ескость аккумулятора", description: "5000"}
    ]*/

    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container md={4} className="mt-3">
            <Row>
                <Col>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{
                                 background: `url(${STAR}) no-repeat center center`,
                                 width: 240,
                                 height: 240,
                                 backgroundSize: 'cover',
                                 fontSize: 64
                             }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                          style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}>
                        <h3>От {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>)}
            </Row>
        </Container>
    );
};

export default DevicePage;