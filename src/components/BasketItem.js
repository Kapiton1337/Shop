import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {buyDevice} from "./https/deviceAPI";

const BasketItem = ({key, img, name, price}) => {
    return (
        <Card className="p-md-5">
            <Row>
                <Col md={3}>
                    <Image src={img} style={{height: 80, weight: 80}}/>
                </Col>
                <Col md={4}>
                    <div>{name}</div>
                </Col>
                <Col md={1}>
                    <div>{price}</div>
                </Col>
                <Col md={2}>
                    <Button className="align-content-md-end" onClick={key=>buyDevice(key)}>
                        Купить
                    </Button></Col>
            </Row>
        </Card>
    );
};

export default BasketItem;