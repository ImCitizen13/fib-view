import Head from "next/head";
// import Image from "next/image";
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
  const fibRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  useEffect(() => {
    setWidth(fibRef.current?.offsetWidth ?? 500);
    setHeight(fibRef.current?.offsetHeight ?? 500);
  }, [fibRef]);
  // 642.938
  // 279.281
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
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>

          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          ></div>
        </FibonacciView>
      </main>
    </>
  );
}
