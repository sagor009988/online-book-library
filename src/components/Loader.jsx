import DotLoader from "react-spinners/DotLoader";
const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
            <DotLoader size={80} color="#008000"></DotLoader>
        </div>
    );
};

export default Loader;