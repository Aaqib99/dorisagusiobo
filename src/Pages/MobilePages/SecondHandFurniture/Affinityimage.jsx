import painpointimage from "../../../assets/painpointimage.svg";

function Affinityimage() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
                <img
                    src={painpointimage}
                    alt="image 1"
                    style={{
                        maxHeight: "auto",
                        width: "80%",
                    }}
                />
            </div>
        </>
    )
}

export default Affinityimage
