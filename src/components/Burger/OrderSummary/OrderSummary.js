import React from 'react';

import Aux from '../../../auxilary/Auxilary';

const orederSummary = (props) => {
    // list of ingredients - convert Object to array 

    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key ={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li> );
    });
    return (
        <Aux>
            <h3>Your order is</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};


export default orederSummary;