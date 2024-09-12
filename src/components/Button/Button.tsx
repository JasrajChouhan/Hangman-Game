import getStyle from "./getStyle";

export interface ButtonProps {
    type? : "button" | "submit" | "reset" | undefined;
    isDisabled : boolean;
    handleClick?: () => void;
    text : string;
    variant : "primary" | "secondary" | "error" | "warning" ;

}
function Button(props : ButtonProps) {
    const {
        type,
        isDisabled,
        handleClick,
        text,
        variant = "primary"
    } = props;
    return (
        <button
            type={type}
            disabled = {isDisabled}
            onClick={handleClick}
            className={`px-4 py-2 text-white ${getStyle(variant)}`}
        >{text}
        </button>
    )
}

export default Button