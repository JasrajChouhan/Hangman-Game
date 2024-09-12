import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState<"password" | "text">("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        console.log(event.target.value);  
    }

    function handleSubmitForm(event: React.FormEvent) {
        event.preventDefault();
        if (value.trim()) {  
            navigate(`/play`, {
                state: {
                    selectedWord: value  
                }
            });
        }
        
    }

    function handleShowHideButton() {
        setInputType((prev) => prev === "password" ? "text" : "password");
        console.log(inputType);  
    }

    return (
        <TextInputForm
            inputType={inputType}
            handleInputChange={handleInputChange}
            handleSubmitForm={handleSubmitForm}
            handleShowHideButton={handleShowHideButton}
            value={value}  
        />
    );
}

export default TextInputFormContainer;
