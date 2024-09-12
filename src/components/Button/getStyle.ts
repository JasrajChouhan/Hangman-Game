function getStyle(variant: "primary" | "secondary" | "error" | "warning" | "success" | "info") {
    switch (variant) {
        case "primary": 
            return "bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 focus:ring-4 focus:ring-orange-400 shadow-xl rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";

        case "secondary": 
            return "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900 focus:ring-4 focus:ring-gray-500 shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";

        case "error": 
            return "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-4 focus:ring-red-400 shadow-xl rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";

        case "warning":
            return "bg-yellow-600 text-black hover:bg-yellow-700 active:bg-yellow-800 focus:ring-4 focus:ring-yellow-400 shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";

        case "success": 
            return "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus:ring-4 focus:ring-green-400 shadow-xl rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";

        case "info":
            return "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-400 shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";

        default:
            return "";
    }
}

export default getStyle;
