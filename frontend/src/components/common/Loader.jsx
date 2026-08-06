import "./Loader.css";

function Skeleton({ width = "100%", height = "20px", radius = "6px", style = {} }) {
    return (
        <div
            className="skeleton"
            style={{ width, height, borderRadius: radius, ...style }}
        />
    );
}

export default Skeleton;