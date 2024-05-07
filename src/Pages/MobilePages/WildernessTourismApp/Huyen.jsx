import huyen from "../../../assets/huyen.png";

function Huyen() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
            <img
                src={huyen}
                alt="image 1"
                style={{
                    maxHeight: "auto",
                    width: "80%",
                }}
            />
        </div>
    )
}

export default Huyen
