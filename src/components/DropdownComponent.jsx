import React from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownComponent = ({ value, options, setValue, title }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle>{title}</Dropdown.Toggle>
            <Dropdown.Menu>
                {options?.map((option) => (
                    <Dropdown.Item
                        onClick={() => setValue(option)}
                        key={option.id}
                        active={value && option.id === value.id}
                    >
                        {option.name || option.color || option.currency}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownComponent;