import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (item) => {
    return (
        <div className="menu-item"
        style={
            {
                backgroundImage: `url(${item.ItemProp3})`,
                border: `4px solid red`
            }
        }        >
            <div className="content">
                <h1 className="title">
                    {item.ItemProp1}
                </h1>
                <span className="subtitle">
                    {item.ItemProp2}
                </span>
            </div>
        </div>    
        );
}

export default MenuItem;

