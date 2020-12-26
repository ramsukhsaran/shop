import React from 'react';

const CartItemShow = (props) => {
    return (
        <div>
             {
                 props.items.length
             }
        </div>
    );
};

export default CartItemShow;