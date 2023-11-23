import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FibonacciView from "~/components/FibonacciView";
import { OrientationEnum } from "~/components/types";

import styles from "./index.module.css";

export default function Home() {
  const [toggleOrientation, setOrientation] = useState<OrientationEnum>(
    OrientationEnum.horizontal
  );
  const orientations: OrientationEnum[] = [
    OrientationEnum.horizontal,
    OrientationEnum.vertical,
    OrientationEnum.horizontalReverse,
    OrientationEnum.verticalReverse,
  ];
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  const fibRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  useEffect(() => {
    // console.log("Width: ", fibRef.current?.offsetWidth);
    // console.log("Height: ", fibRef.current?.offsetHeight);
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
      <main className={styles.main} ref={fibRef}>
        <button
          style={{ width: "30%", height: "50px" }}
          onClick={() => {
            const random: OrientationEnum =
              orientations[Math.floor(Math.random() * (3 + 1))] ??
              OrientationEnum.horizontal;
            setOrientation(random);
          }}
        >
          Random Orientation
        </button>
        <h1>{toggleOrientation}</h1>
        {/* // width: "960px", height: "720px"
    // return { width: "480px", height: "360px" }; */}
        <FibonacciView
          // _flip={true}
          orientation={toggleOrientation}
          width={`calc(${width}px * 0.9)`}
          height={`calc(${height}px * 0.75)`}
        >
          {/* <Image
                height={360}
                width={480}
                alt="Upsplash"
                style={{ width: "100%", height: "100%" }}
                src="/upsplash/horizontal_2.jpg"
              /> */}
          <div
            style={{
              height: "100%",
              width: "100%",
              background:
                colors[Math.floor(Math.random() * (colors.length + 1))],
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
              background:
                colors[Math.floor(Math.random() * (colors.length + 1))],
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
              background:
                colors[Math.floor(Math.random() * (colors.length + 1))],
            }}
          ></div>
                    <div
            style={{
              height: "100%",
              width: "100%",
              background:
                colors[Math.floor(Math.random() * (colors.length + 1))],
            }}
          ></div>
                              <div
            style={{
              height: "100%",
              width: "100%",
              background:
                colors[Math.floor(Math.random() * (colors.length + 1))],
            }}
          ></div>
        </FibonacciView>
      </main>
    </>
  );
}
