import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FibonacciView from "~/components/FibonacciView";
import { OrientationEnum } from "~/components/types";

import styles from "./index.module.css";

export const Orientations: OrientationEnum[] = [
  OrientationEnum.horizontal,
  OrientationEnum.vertical,
  OrientationEnum.horizontalReverse,
  OrientationEnum.verticalReverse,
];

export default function Home() {
  const [toggleOrientation, setOrientation] = useState<OrientationEnum>(
    OrientationEnum.horizontal
  );

  const fibRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  useEffect(() => {
    setWidth(fibRef.current?.offsetWidth ?? 500);
    setHeight(fibRef.current?.offsetHeight ?? 500);
  }, [fibRef]);
  // 642.938
  // 279.281
  const getRandomImage = (): string => {
    const imgUrls = [
      "/upsplash/horizontal_1.jpg",
      "/upsplash/horizontal_2.jpg",
      "/upsplash/horizontal_3.jpg",
      "/upsplash/horizontal_4.jpg",
      "/upsplash/horizontal_5.jpg",
      "/upsplash/horizontal_6.jpg",
      "/upsplash/horizontal_7.jpg",
      "/upsplash/horizontal_8.jpg",
      "/upsplash/horizontal_9.jpg",
      "/upsplash/vertical_1.jpg",
      "/upsplash/vertical_2.jpg",
      "/upsplash/vertical_3.jpg",
      "/upsplash/vertical_4.jpg",
      "/upsplash/vertical_5.jpg",
      "/upsplash/vertical_6.jpg",
      "/upsplash/vertical_7.jpg",
    ];
    const rand = Math.floor(Math.random() * imgUrls.length);
    const res = imgUrls[rand] ?? "";
    return res;
  };

  const getRandomImages = (): string[] => {
    const randomImages: string[] = [];
    for (let i = 0; i < 10; i++) {
      randomImages.push(getRandomImage());
    }
    return randomImages;
  };
  const rands = getRandomImages();
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
          orientation={OrientationEnum.horizontalReverse}
          _flip={true}
          colors={["#000000", "#532", "#22e"]}
          width={`calc(${width}px * 0.9)`}
          height={`calc(${height}px * 0.75)`}
        >
          {/* <div>
            <h1>{toggleOrientation}</h1>
            <FibonacciView
              // _flip={true}

              orientation={toggleOrientation}
              width={`calc(${width}px * 0.9) * 0.625`}
              height={`calc(${width}px * 0.9) * 0.625`}
            >
              <>
                {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  rands.map((img: string, index: number) => {
                    <Image
                      key={index}
                      height={360}
                      width={480}
                      alt="Upsplash"
                      style={{ width: "100%", height: "100%" }}
                      src={img}
                    />;
                  })
                }
              </>
            </FibonacciView>
          </div> */}
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <button
              style={{ width: "30%", height: "50px" }}
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
            
          
        </FibonacciView>

        {/* <FibonacciView
              // _flip={true}

              orientation={toggleOrientation}
              width={`calc(${width}px * 0.9) * 0.625`}
          height={`calc(${width}px * 0.9) * 0.625`}
            >
              <>
                {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  rands.map((img: string, index: number) => {
                    <Image
                      key={index}
                      height={360}
                      width={480}
                      alt="Upsplash"
                      style={{ width: "100%", height: "100%" }}
                      src={img}
                    />;
                  })
                }
              </>
            </FibonacciView> */}
      </main>
    </>
  );
}
