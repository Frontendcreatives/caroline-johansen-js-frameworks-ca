import React from "react";
import PropTypes from "prop-types";

function ViewButton({ children }) {
	return <button>{children}</button>;
}

ViewButton.propTypes = {
	children: PropTypes.string.isRequired
};

export default ViewButton;
