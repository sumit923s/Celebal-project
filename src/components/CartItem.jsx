import React from 'react';
import PropTypes from 'prop-types';

function CartItem({ cartItem }) {
  // Component code

}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    // Define the required prop types here based on the structure of cartItem
    image: PropTypes.string.isRequired,
    course_name: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    discounted_price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    courseID: PropTypes.number.isRequired,
    // Add more prop types as needed
  }).isRequired,
};

export default CartItem;
