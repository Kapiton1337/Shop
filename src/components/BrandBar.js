import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {devices} = useContext(Context);
    return (
        <Row className="d-flex">
            {devices.brands.map(({id, name}) =>
                <Card key={id}
                    style={{cursor:"pointer"}}
                    className="p-3"
                    onClick={()=>devices.setSelectedBrand({id, name})}
                    border={id === devices.selectedBrand.id ? "danger" : "light"}
                >
                    {name}
                </Card>)}
        </Row>
    );
})

export default BrandBar;