/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const DonateForm = ({ item }) => {
    const donationOptions = [
        { label: "$5.00", value: "5.00" },
        { label: "$10.00", value: "10.00" },
        { label: "$20.00", value: "20.00" },
        { label: "$50.00", value: "50.00" },
    ];

    const [selectedAmount, setSelectedAmount] = useState(
        donationOptions[0].value
    );
    const [isChecked, setIsChecked] = useState(false);

    const inputRef = useRef(null);

    if (
        document.activeElement.tagName === "INPUT" &&
        document.activeElement.id === "isfocused" &&
        !isChecked
    ) {
        setSelectedAmount(' ')
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

    const handleChange = () => { };

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div>
                <p>Donation Form</p>
                <div className="flex items-center">
                    <input
                        type="text"
                        id="isfocused"
                        onChange={handleChange}
                        className="border h-9 w-[120px]"
                        value={selectedAmount}
                        ref={inputRef}
                    />
                </div>

                {donationOptions.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className={`rounded-full p-[2px] w-3.5 border h-3.5 flex items-center ${selectedAmount === option.value
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

                <div className="flex items-center gap-2">
                    <div
                        className={`rounded-full p-[2px] w-3.5 border h-3.5 flex items-center ${isChecked ? "border-blue-500" : "border-[#333]"
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
        </div>
    );
};

export default DonateForm