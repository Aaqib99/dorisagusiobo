
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/masteryhubweb.png";


export const CarouselDefault = () => {
    return (
        <>
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                transitionTime={1000}
                stopOnHover={false}
                emulateTouch
                dynamicHeight={false}
                useKeyboardArrows
                swipeable
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ background: "#007aff", width: "8px", height: "8px", borderRadius: "50%", display: "inline-block", margin: "0 4px", cursor: "pointer" }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={{ background: "#ccc", width: "8px", height: "8px", borderRadius: "50%", display: "inline-block", margin: "0 4px", cursor: "pointer" }}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                <div>
                    <img
                        src={image1}
                        alt="image 1"
                        style={{ borderRadius: "10px" }}
                    />
                </div>
                <div>
                    <img
                        src={image2}
                        alt="image 2"
                        style={{ borderRadius: "10px" }}
                    />
                </div>
                <div>
                    <img
                        src={image3}
                        alt="image 3"
                        style={{ borderRadius: "10px" }}
                    />
                </div>
            </Carousel>
        </>
    );
};
