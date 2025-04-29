import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FibonacciView from "~/components/FibonacciView";
import { OrientationEnum } from "~/components/types";

import styles from "./index.module.css";
import { Orientations } from "./showcase2";

const formStyles: {
  container: React.CSSProperties;
  input: React.CSSProperties;
  label: React.CSSProperties;
  button: React.CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "30px",
    fontFamily: "monospace",
    backgroundColor: "#0000",
    borderRadius: "12px",
    border: "1px solid #ffffff",
    width: "80%",
    maxWidth: "400px",
  },
  label: {
    padding: "12px",
    backgroundColor: "#0000",
    color: "#fff",
    fontSize: "20px",
    fontFamily: "monospace",
    outline: "none",
    transition: "all 0.3s ease",
  },
  input: {
    padding: "12px",
    backgroundColor: "#0000",
    border: "1px solid #ffffff",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    fontFamily: "monospace",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    width: "30%",
    height: "50px",
    backgroundColor: "#0000",
    color: "#fff",
    border: "1px solid #ffffff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "monospace",
  }
};

export default function OOpepen() {
  const fibRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);

  const [imageUrls, setImageUrls] = useState({
    first: "/upsplash/horizontal_5.jpg",
    second: "/upsplash/vertical_1.jpg",
    third: "/upsplash/vertical_4.jpg",
  });
  const [toggleOrientation, setOrientation] = useState<OrientationEnum>(
    OrientationEnum.horizontal
  );

  const handleInputChange =
    (field: keyof typeof imageUrls) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageUrls((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  useEffect(() => {
    setWidth(fibRef.current?.offsetWidth ?? 500);
    setHeight(fibRef.current?.offsetHeight ?? 500);
  }, [fibRef]);

  return (
    <>
      <Head>
        <title>FibView</title>
        <meta
          name="description"
          content="This is the demo for FibView react component"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={styles.main}
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={fibRef}
      >
        <FibonacciView
          _flip={true}
          bgColor="#000000"
          colors={["#000000", "#000000", "#000000"]}
          orientation={OrientationEnum.horizontalReverse}
          width={`calc(${width * 0.9}px)`}
          height={`calc(${height * 0.9}px)`}
        >
          <FibonacciView
            _flip={true}
            bgColor="#000000"
            colors={["#000000", "#000000", "#000000"]}
            orientation={toggleOrientation}
            width={`calc(${width * 0.9 * 0.625}px)`}
            height={`calc(${height * 0.9}px)`}
          >
            {imageUrls.first && (
              <div
                className="flexRowCenter"
                style={{ height: "100%", width: "100%" }}
              >
                <Image
                  src={imageUrls.first}
                  alt="First Image"
                  width={480}
                  height={360}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
            {imageUrls.second && (
              <div
                className="flexRowCenter"
                style={{ height: "100%", width: "100%" }}
              >
                <Image
                  src={imageUrls.second}
                  alt="Second Image"
                  width={480}
                  height={360}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
            {imageUrls.third && (
              <div
                className="flexRowCenter"
                style={{ height: "100%", width: "100%" }}
              >
                <Image
                  src={imageUrls.third}
                  alt="Third Image"
                  width={480}
                  height={360}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
          </FibonacciView>

          <div
            className="flexRowCenter"
            style={{
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 50,
            }}
          >
            <form style={formStyles.container}>
              <label style={formStyles.label}>First Image URL</label>
              <input
                type="text"
                placeholder="First Image URL"
                style={formStyles.input}
                value={imageUrls.first}
                onChange={handleInputChange("first")}
                onFocus={(e) => {
                  e.target.style.boxShadow =
                    "0 0 15px #ffffff, inset 0 0 8px #ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow =
                    "0 0 10px #ffffff, inset 0 0 5px #ffffff";
                }}
              />
              <label style={formStyles.label}>Second Image URL</label>
              <input
                type="text"
                placeholder="Second Image URL"
                style={formStyles.input}
                value={imageUrls.second}
                onChange={handleInputChange("second")}
                onFocus={(e) => {
                  e.target.style.boxShadow =
                    "0 0 15px #ffffff, inset 0 0 8px #ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow =
                    "0 0 10px #ffffff, inset 0 0 5px #ffffff";
                }}
              />
              <label style={formStyles.label}>Third Image URL</label>
              <input
                type="text"
                placeholder="Third Image URL"
                style={formStyles.input}
                value={imageUrls.third}
                onChange={handleInputChange("third")}
                onFocus={(e) => {
                  e.target.style.boxShadow =
                    "0 0 15px #ffffff, inset 0 0 8px #ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow =
                    "0 0 10px #ffffff, inset 0 0 5px #ffffff";
                }}
              />
            </form>
            <button
              style={formStyles.button}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() => {
                const random: OrientationEnum =
                  Orientations[Math.floor(Math.random() * (3 + 1))] ??
                  OrientationEnum.horizontal;
                setOrientation(random);
              }}
            >
              Random Orientation
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                color: "#fff",
                borderRadius: "12px",
                margin: 0,
                fontWeight: "bold",
                letterSpacing: "2px",
                fontFamily: "monospace",
              }}
            >
              FibonacciGrid
            </h1>
          </div>
        </FibonacciView>
      </main>
    </>
  );
}
