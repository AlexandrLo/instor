import React from "react";

import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function Title({ postfix }) {
  return (
    <Helmet>
      {postfix ? (
        <title>
          {`Instor | ${postfix?.replace(/^\w/, (c) => c.toUpperCase())}`}
        </title>
      ) : (
        <title>{"Instor"}</title>
      )}
    </Helmet>
  );
}

Title.propTypes = {
  postfix: PropTypes.string,
};

export default Title;
