import { useRef, useState } from "react";
import { useColors } from "~/context/ColorsContext";

type Coords = {
  x: number;
  y: number;
};

export default function Opepen() {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
  //   const eyeWidth = document.getElementsByClassName("eye")[0].offsetWidth;
  //   const puples = document.getElementsByClassName("puple");
  //   const docWidth = document.getElementsByTagName('body')[0].offsetWidth
  const eyeWidthRef = useRef(null);
  const pupleWidthRef = useRef(null);
  const docWidthRef = useRef(null);
  const { faceColor, eyesColor, lipsColor, pupleColor, mouthLineColor } =
    useColors();

  const changeInX = (change: number, eyeWidth: number, width: number) => {
    const pupleLimit = 1 - width / eyeWidth;
    if (change > pupleLimit) return pupleLimit;
    return change;
  };

  //   useEffect(() => {
  //     const handleWindowMouseMove = (event: Event) => {
  //       setCoords({
  //         x: event.clientX,
  //         y: event.clientY,
  //       });
  //     };
  //     window.addEventListener("mousemove", handleWindowMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", handleWindowMouseMove);
  //     };
  //   }, []);

  return (
    <div id="container" className="flexCol">
      <div id="opepen" style={{ backgroundColor: faceColor }}>
        <div className="vBorderX"></div>
        <div id="eyes" className="flexRow">
          <div className="hBorderX"></div>
          <div className="eye" style={{ backgroundColor: eyesColor }}>
            <div
              className="puple"
              style={{ backgroundColor: pupleColor }}
            ></div>
          </div>
          <div className="hBorderY"></div>
          <div className="eye" style={{ backgroundColor: eyesColor }}>
            <div
              className="puple"
              style={{ backgroundColor: pupleColor }}
            ></div>
          </div>
          <div className="hBorderX"></div>
        </div>
        <div className="vBorderY"></div>
        <div id="lips" className="flexRow" style={{ backgroundColor: lipsColor }}>
          <div className="hBorderX"></div>
          <div id="mouth" className="flexRow">
            <div className="hBorderX"></div>
            <div id="mouthContainer" className="flexCol">
              <div className="vBorderZ"></div>
              <div id="mouthLine" style={{ backgroundColor: mouthLineColor }}></div>
              <div className="vBorderZ"></div>
            </div>
            <div className="hBorderX"></div>
          </div>
          <div className="hBorderX"></div>
        </div>
        <div className="vBorderX"></div>
      </div>
    </div>
  );
}
