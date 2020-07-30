import React, { useState } from "react";
import "./App.css";
import { MultiComboBox } from "@ui5/webcomponents-react/lib/MultiComboBox";
import { MultiComboBoxItem } from "@ui5/webcomponents-react/lib/MultiComboBoxItem";
import { MultiComboBoxItemPropTypes } from "@ui5/webcomponents-react/webComponents/MultiComboBoxItem";
import Select, { OptionsType } from "react-select";

function App() {
  const onSelectionChange = (event: CustomEvent<{ items: unknown[] }>) => {
    event.detail.items.forEach((item) => {
      const comboItem: MultiComboBoxItemPropTypes = item as MultiComboBoxItemPropTypes;
      console.log(comboItem.text);
    });
  };

  // react select stuff

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const reactSelectOnChange = (event: any) => {
    if (event) {
      const options = event as OptionsType<{
        value: string;
        label: string;
      }>;
      options.forEach((option) => console.log(option.value));
    }
  };

  return (
    <div className="App">
      <h1>UI5</h1>

      <MultiComboBox onSelectionChange={onSelectionChange}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>

      <h1>React-select</h1>
      <Select options={options} isMulti={true} onChange={reactSelectOnChange} />
    </div>
  );
}

export default App;
