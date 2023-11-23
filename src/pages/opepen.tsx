import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ColorPalette from "~/components/ColorPalette";
import FibonacciView from "~/components/FibonacciView";
import Opepen from "~/components/Opepen";
import { OrientationEnum } from "~/components/types";

import styles from "./index.module.css";

export default function OOpepen() {
  const fibRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
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
      <main className={styles.main} ref={fibRef}>
        <FibonacciView
          _flip={true}
          orientation={OrientationEnum.verticalReverse}
          width={`calc(${width}px * 1)`}
          height={`calc(${height}px * 1)`}
        >
          {/* <Image
                height={360}
                width={480}
                alt="Upsplash"
                style={{ width: "100%", height: "100%" }}
                src="/upsplash/horizontal_2.jpg"
              /> */}
          <div className="flexRowCenter" style={{ height: "100%", width: "100%" }}>
              <Opepen/>
          </div>
          <div className="flexRowCenter" style={{ height: "100%", width: "100%" }}>
            <ColorPalette/>
          </div>
          <div
            className="flexRowCenter"
            style={{ height: "100%", width: "100%" }}
          >
            <h1>Opepen</h1>
          </div>
        </FibonacciView>
      </main>
    </>
  );
}
