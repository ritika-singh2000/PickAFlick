import React, { useState } from "react";

const selectionArr = ["Movies", "Gift Cards", "Add Ratings", "Offers"];

const SelectionBar = () => {
  const [selections, setSelections] = useState(selectionArr);
  const [selectedSelection, setSelectedSelection] = useState("");
  return (
    <div className="flex gap-x-3 pl-5 h-14 bg-blue-600">
      {selections.map((type) => {
        return (
          <button
            className="text-white text-xl p-2"
            onClick={() => {
              setSelectedSelection(type);
            }}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default SelectionBar;
