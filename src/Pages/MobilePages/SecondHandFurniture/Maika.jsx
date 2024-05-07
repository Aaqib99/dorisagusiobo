import maika from "../../../assets/maika.svg";

function Maika() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", marginTop: "4rem" }}>
                <img
                    src={maika}
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

export default Maika
