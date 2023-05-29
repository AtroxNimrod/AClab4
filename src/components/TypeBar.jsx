
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {account} = useContext(Context)
    const allType = {id: null, name: "All"}
    return (
        <ListGroup>
            {[
                allType, // adaugam optiunea "All"
                ...account.types
            ].map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={(type.id === account.selectedType.id) || (type.name === "All" && !account.selectedType.id)}
                    onClick={() => account.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;