import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../components/https/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {devices} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => devices.setTypes(data));
        fetchBrands().then(data => devices.setBrands(data));
    }, [])

    useEffect(() => {
        fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page,2).then(data => {
            devices.setDevices(data.rows);
            devices.setTotalCount(data.count)
        });
    }, [devices.page, devices.selectedType, devices.selectedBrand])

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={8}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
})

export default Shop;