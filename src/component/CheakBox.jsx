


import axios from "axios";
import { useState } from "react";

const CheakBox = () => {
  const [selectedData, setSelectedData] = useState("");
  const [showInputBoxes, setShowInputBoxes] = useState(false);
  const [inputData, setInputData] = useState({
    inputData1: "",
    inputData2: ""
  });

  const handleCheckboxClick = (event) => {
    const { value, checked } = event.target;
    setSelectedData(value);
    setShowInputBoxes(checked && value === "Checkbox 3");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleButtonClick = () => {
    console.log(selectedData);

    if (selectedData === "Checkbox 3") {
      console.log("Input Data 1:", inputData.inputData1);
      console.log("Input Data 2:", inputData.inputData2);

      // Send the data to the API endpoint
      axios
        .post("http://your-api-endpoint.com/saveData", { inputData })
        .then((response) => {
          console.log("Data saved successfully!", response.data);
        })
        .catch((error) => {
          console.error("Error while saving data:", error);
        });
    }
  };

  return (
    <div>
      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          value="Checkbox 1"
          onClick={handleCheckboxClick}
        />
        Checkbox 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Checkbox 2"
          onClick={handleCheckboxClick}
        />
        Checkbox 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Checkbox 3"
          onClick={handleCheckboxClick}
        />
        Checkbox 3
      </label>
      <br />

      {/* Input boxes */}
      {showInputBoxes && (
        <>
          <input
            type="text"
            name="inputData1"
            placeholder="Input 1"
            value={inputData.inputData1}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="inputData2"
            placeholder="Input 2"
            value={inputData.inputData2}
            onChange={handleInputChange}
          />
          <br />
        </>
      )}

      {/* Button */}
      <button onClick={handleButtonClick}>Show Selected Data</button>
    </div>
  );
};

export default CheakBox;
