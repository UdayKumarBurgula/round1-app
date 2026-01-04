import "../App.css";
import React, { useState, useRef, useEffect } from "react";

const OTP_DIGIT_COUNT = 4;

export default function OTPValidation() {
  // stored inputArr pin
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGIT_COUNT).fill(""),
    []
  );
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (val, index) => {
    if (isNaN(val)) {
      return;
    }

    console.log(val);
    console.log(index);
    // update the particular index item value in the array.
    const newInputArr = [...inputArr]; // copy to new array using spread operator
    console.log("--val--");
    console.log(val);
    console.log(val?.slice(-1));
    const newValue = val?.trim();
    newInputArr[index] = newValue?.slice(-1); // update the value
    setInputArr(newInputArr); // update the array value with update value using useState.
    console.log("update completed - handleOnChange");
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    console.log(e);
    console.log(e.key === "Backspace");
    console.log(index);
    if (!e.target.value && index > 0 && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>
        Validation OTP <br />
      </h1>
      {inputArr.map((item, index) => (
        <input
          type="text"
          key={index}
          ref={(input) => (refArr.current[index] = input)}
          value={inputArr[index]}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
          maxLength="1"
          className="otp-textbook"
        />
      ))}
    </div>
  );
}
