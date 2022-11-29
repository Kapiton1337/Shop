import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {devices} = useContext(Context);
    return (
        <ListGroup>
            {devices.types.map(({id, name}) =>
                <ListGroup.Item
                    active={id === devices.selectedType.id}
                    onClick={()=>devices.setSelectedType({id, name})}
                    key={id}
                >
                    {name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default TypeBar;