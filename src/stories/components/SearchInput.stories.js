import React from "react";

import SearchInputComponent from "components/SearchInput";

export default {
  title: "Instor/Components/Search Input",
  component: SearchInputComponent,
  decorators: [
    (Story) => (
      <div style={{ width: "30rem" }}>
        <Story />
      </div>
    ),
  ],
};

export const SearchInput = () => <SearchInputComponent />;
