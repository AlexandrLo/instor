import React from "react";

import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function TitleUpdater({ title }) {
  return (
    <Helmet>
      <title>
        {`Instor | ${title?.replace(/^\w/, (c) => c.toUpperCase())}`}
      </title>
    </Helmet>
  );
}

TitleUpdater.propTypes = {
  title: PropTypes.string,
};

export default TitleUpdater;
