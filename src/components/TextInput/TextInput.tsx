interface TextInputProps {
    inputType: "text" | "password";
    placeholder: string | undefined;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    value?: string;
}

function TextInput(props: TextInputProps) {
    const {
        inputType,
        placeholder = "Please enter value",
        handleChange,
        className,
        value
    } = props
    return (
        <input
            value={value}
            type={inputType}
            placeholder={placeholder}
            onChange={handleChange}
            className={`px-2 py-1 rounded-md ${className}`}
        />
    )
}

export default TextInput