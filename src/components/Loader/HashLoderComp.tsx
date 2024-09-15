import HashLoader from "react-spinners/HashLoader";

interface HashLoaderProp {
    size? : number
    color? : string
    className ?: string
}

function HashLoaderComp({
    size,
    color,
    className
} : HashLoaderProp) {
    return (
        <HashLoader
            color={color}
            size={size} 
            aria-label="Loading Spinner"
            className={className}
            />
    )
}

export default HashLoaderComp