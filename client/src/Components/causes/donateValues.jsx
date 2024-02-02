/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import InfoForm from "./personalInfo";

const DonateForm = ({ item }) => {
  const donationOptions = [
    { label: "$5.00", value: "5" },
    { label: "$10.00", value: "10" },
    { label: "$20.00", value: "20" },
    { label: "$50.00", value: "50" },
  ];

  const [selectedAmount, setSelectedAmount] = useState(
    donationOptions[0].value
  );
  const [isChecked, setIsChecked] = useState(false);

  const inputRef = useRef(null);

  if (
    document.activeElement.tagName === "INPUT" &&
    document.activeElement.id === "isfocused" && !isChecked
  ) {
    setSelectedAmount(" ");
    setIsChecked(true);
  }

  const handleToggle = (amount) => {
    if (amount) {
      setSelectedAmount(amount);
      setIsChecked(false);
    } else {
      setIsChecked(true);
      handleInputFocus();
    }
  };

  useEffect(() => {
    const handleInputChange = () => {
      const enteredAmount = inputRef.current.value;
      setSelectedAmount(enteredAmount);
    };
    const inputElement = inputRef.current;

    // Add an input change event listener
    inputRef.current.addEventListener("input", handleInputChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      inputElement.removeEventListener("input", handleInputChange);
    };
  }, []);

  const handleInputFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = " ";
    setSelectedAmount(inputRef.current.value);
  };

  const handleChange = () => {};

  return (
    <div className="font-Open-Sans mt-12 lg:mt-8 md:w-full">
      <h1 className="ml-10 text-[40px] leading-[2.7rem] pr-5 lg:ml-0 font-bold text-[#84c54e]">
        {item.title}
      </h1>
      <p className="px-10 text-[12.5px] pt-8 lg:px-0 lg:pr-8 lg:text-[14px] xl:text-[15.5px] xl:w-[95%] leading-[1.5rem]">{item.description}</p>
      
      <div className="flex flex-col px-10 mb-10 lg:px-0">
        <p className="text-[#84c54e] xl:text-[24px] font-bold mb-3 mt-5">Donation Form</p>
        <div className="flex items-center gap-3">
          <label htmlFor="amount" className="text-[#8a8a8a] mb-2 text-[18px]">
            $
          </label>
          <input
            type="text"
            id="isfocused"
            onChange={handleChange}
            className="border h-9 w-[120px] input mt-2 mb-4 placeholder:text-xs focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent md:placeholder:text-sm xl:placeholder:text-lg rounded-[0.35rem] bg-[#eee] border-none"
            value={selectedAmount}
            ref={inputRef}
          />
        </div>
        <div className="flex flex-wrap gap-8 mb-6 pr-10">
          {donationOptions.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`rounded-full p-[2px] w-3.5 border h-3.5 flex items-center ${
                  selectedAmount === option.value
                    ? "border-blue-500"
                    : "border-[#333]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedAmount === option.value}
                  onChange={() => handleToggle(option.value)}
                  id={`checkOther${index}`}
                  className="appearance-none w-full h-full  border-[#333] checked:bg-blue-500 checked:border-transparent rounded-full focus:outline-none"
                />
              </div>
              <p>{option.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 ">
          <div
            className={`rounded-full p-[2px] w-3.5 border h-3.5 flex items-center ${
              isChecked ? "border-blue-500" : "border-[#333]"
            }`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle()}
              id="checkOther"
              className="appearance-none w-full h-full  border-[#333] checked:bg-blue-500 checked:border-transparent rounded-full focus:outline-none"
            />
          </div>
          <p>Other</p>
        </div>
      </div>

      <div>
        <InfoForm userAmount={selectedAmount}></InfoForm>
      </div>
    </div>
  );
};

export default DonateForm;
