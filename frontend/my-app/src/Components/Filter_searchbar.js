import React from "react";

import Select from "react-select";
// import { colourOptions } from "../data";
const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const formatGroupLabel = () => (
  <div style={groupStyles}>
    <span>City</span>
  </div>
);
export default () => (
  <Select
    defaultValue={[]}
    isMulti
    name="colors"
    style={{backgroundColor: "yellow",}}
    label="City"
    placeholder="City"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
