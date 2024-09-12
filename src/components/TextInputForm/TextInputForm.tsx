import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

interface TextInputFormProps {
    inputType: "password" | "text";
    handleShowHideButton: () => void;
    handleSubmitForm: (event: React.FormEvent) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

function TextInputForm({
    inputType,
    handleShowHideButton,
    handleSubmitForm,
    handleInputChange,
    value,
}: TextInputFormProps) {
    return (
        <form onSubmit={handleSubmitForm}
            className="flex flex-col space-y-3 py-3 w-[40%] justify-center items-center my-2 "
        >
            <TextInput
                value={value}
                inputType={inputType}
                placeholder="Enter word"
                handleChange={handleInputChange}
                className="border-blue-400 hover:border-blue-500 transition duration-200 ease-in-out w-full h-10 my-2 px-2"
            />
            <div className="flex space-x-3" >
                <Button
                    type="button"
                    isDisabled={false}
                    variant="secondary"
                    handleClick={handleShowHideButton}
                    text={inputType === "password" ? "Show" : "Hide"}
                />

                <Button
                    type="submit"
                    isDisabled={false}
                    variant="primary"
                    text="Submit"
                />
            </div>
        </form>

    );
}

export default TextInputForm;
