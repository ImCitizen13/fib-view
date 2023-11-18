import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import FibonacciView from "~/FibonacciView";
import { OrientationEnum } from "~/types";

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
      <main className={styles.main}>
        <button style={{width: "30%", height: "50px"}}
          onClick={() => {
            const random: OrientationEnum =
              orientations[Math.floor(Math.random() * (3 + 1))] ??
              OrientationEnum.horizontal;
            setOrientation(random);
          }}
        >Random Orientation</button>
        <h1>{toggleOrientation}</h1>
        <FibonacciView orientation={toggleOrientation}>
        <Image
                height={360}
                width={480}
                alt="Upsplash"
                style={{ width: "100%", height: "100%" }}
                src="/upsplash/horizontal_2.jpg"
              />
              <Image
                height={360}
                width={480}
                alt="Upsplash"
                style={{ width: "100%", height: "100%" }}
                src="/upsplash/horizontal_4.jpg"
              />
              <Image
                height={360}
                width={480}
                alt="Upsplash"
                style={{ width: "100%", height: "100%" }}
                src="/upsplash/horizontal_5.jpg"
              />
        </FibonacciView>
      </main>
    </>
  );
}
