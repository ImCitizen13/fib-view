import { useState } from "react";
import { useColors } from "~/context/ColorsContext";

type PaletteDimentions = {
  width: number;
  height: number;
};

export default function ColorPalette() {
  const { faceColor, eyesColor, lipsColor, pupleColor, mouthLineColor } =
    useColors();
  const [dimentions, setDimentions] = useState<PaletteDimentions>({
    width: 170,
    height: 105,
  });
  const border = "border border-solid border-gray-400";

  return (
    <div>
      <h1 style={{ color: "white" }}>Color Palette</h1>
      <div
        id="colorPalette"
        className="flexRowCenter"
        style={{
          width: dimentions.width + "px",
          height: dimentions.height + "px",
        }}
      >
        <div
          id="leftPalette"
          className="flexColCenter"
        >
          <div
            style={{ height: "100%", width: "100%", backgroundColor: faceColor }}
          >
            {/* <h2 >faceColor</h2> */}
          </div>
        </div>
        <div id="rightPalette" className="flexColCenter ">
          <div id="topRightPalette">
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: eyesColor,
              }}
            >
              {/* <h2>eyesColor</h2> */}
            </div>
          </div>
          <div id="bottomRightPalette" className="flexRowCenter ">
            <div className="flexColCenter"
            style={{ height: "100%", width: "38%" }}>
              <div
                className="flexRowCenter"
                style={{ height: "38%", width: "100%" }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "61%",
                    backgroundColor: mouthLineColor,
                  }}
                ></div>
                <div
                  style={{
                    height: "100%",
                    width: "38%",
                    backgroundColor: "rgba(0,0,0,0)",
                  }}
                ></div>
              </div>

              <div
                style={{
                  height: "61%",
                  width: "100%",
                  backgroundColor: mouthLineColor,
                }}
              ></div>
            </div>

            <div
              style={{
                height: "100%",
                width: "61%",
                backgroundColor: lipsColor,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
