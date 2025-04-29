import React, { useEffect, useRef, useState } from "react";
import { imgUrls } from "~/common/common";
import FibonacciView from "~/components/FibonacciView";
import { OrientationEnum } from "~/components/types";
import Image from "next/image";

export default function Recursive() {
  const fibRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const [orientation, setOrientation] = useState<OrientationEnum>(OrientationEnum.horizontal);
  const [isFlipped, setIsFlipped] = useState<boolean>(true);
  const [activeButton, setActiveButton] = useState<number>(0); // 0 for horizontal (default)

  useEffect(() => {
    setWidth(fibRef.current?.offsetWidth ?? 500);
    setHeight(fibRef.current?.offsetHeight ?? 500);
  }, [fibRef]);

  const buttonStyles: {
    container: React.CSSProperties;
    button: React.CSSProperties;
  } = {
    container: {
      position: 'fixed',
      bottom: '7.5%',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '20px',
      zIndex: 1000,
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      color: '#fff',
      border: '1px solid #fff',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'monospace',
      fontSize: '16px',
    }
  };

  type ButtonColor = {
    text: string;
    border: string;
  };

  const buttonColors: ButtonColor[] = [
    { text: '#9162c0', border: '#9162c0' },
    { text: '#d17724', border: '#d17724' },
    { text: '#3b88e9', border: '#3b88e9' },
    { text: '#449d5d', border: '#449d5d' }
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <FibonacciView
        _flip={isFlipped}
        bgColor="#000000"
        colors={["#000000", "#000000", "#000000"]}
        orientation={orientation}
        width="100%"
        height="100%"
      >
        {imgUrls.reverse().map((imgUrl, index) => {
          return (
            <div
              key={index}
              className="flexRowCenter"
              style={{ height: "100%", width: "100%" }}
            >
              <Image
                src={imgUrl ?? ""}
                alt="Third Image"
                width={480}
                height={360}
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </FibonacciView>
      <div style={buttonStyles.container}>
        <button 
          style={{
            ...buttonStyles.button,
            color: buttonColors[0]?.text ?? '#fff',
            borderColor: buttonColors[0]?.border ?? '#fff',
            backgroundColor: activeButton === 0 ? 'rgba(145, 98, 192, 0.5)' : 'rgba(0, 0, 0, 0.85)',
          }}
          onMouseOver={(e) => {
            if (activeButton !== 0) {
              e.currentTarget.style.backgroundColor = 'rgba(145, 98, 192, 0.3)';
            }
          }}
          onMouseOut={(e) => {
            if (activeButton !== 0) {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            }
          }}
          onClick={() => {
            setOrientation(OrientationEnum.horizontal);
            setActiveButton(0);
          }}
        >
          Horizontal
        </button>
        <button 
          style={{
            ...buttonStyles.button,
            color: buttonColors[1]?.text ?? '#fff',
            borderColor: buttonColors[1]?.border ?? '#fff',
            backgroundColor: activeButton === 1 ? 'rgba(209, 119, 36, 0.5)' : 'rgba(0, 0, 0, 0.85)',
          }}
          onMouseOver={(e) => {
            if (activeButton !== 1) {
              e.currentTarget.style.backgroundColor = 'rgba(209, 119, 36, 0.3)';
            }
          }}
          onMouseOut={(e) => {
            if (activeButton !== 1) {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            }
          }}
          onClick={() => {
            setOrientation(OrientationEnum.horizontalReverse);
            setActiveButton(1);
          }}
        >
          Horizontal Reverse
        </button>
        <button 
          style={{
            ...buttonStyles.button,
            color: buttonColors[2]?.text ?? '#fff',
            borderColor: buttonColors[2]?.border ?? '#fff',
            backgroundColor: activeButton === 2 ? 'rgba(59, 136, 233, 0.5)' : 'rgba(0, 0, 0, 0.85)',
          }}
          onMouseOver={(e) => {
            if (activeButton !== 2) {
              e.currentTarget.style.backgroundColor = 'rgba(59, 136, 233, 0.3)';
            }
          }}
          onMouseOut={(e) => {
            if (activeButton !== 2) {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            }
          }}
          onClick={() => {
            setOrientation(OrientationEnum.vertical);
            setActiveButton(2);
          }}
        >
          Vertical
        </button>
        <button 
          style={{
            ...buttonStyles.button,
            color: buttonColors[3]?.text ?? '#fff',
            borderColor: buttonColors[3]?.border ?? '#fff',
            backgroundColor: activeButton === 3 ? 'rgba(68, 157, 93, 0.5)' : 'rgba(0, 0, 0, 0.85)',
          }}
          onMouseOver={(e) => {
            if (activeButton !== 3) {
              e.currentTarget.style.backgroundColor = 'rgba(68, 157, 93, 0.3)';
            }
          }}
          onMouseOut={(e) => {
            if (activeButton !== 3) {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            }
          }}
          onClick={() => {
            setOrientation(OrientationEnum.verticalReverse);
            setActiveButton(3);
          }}
        >
          Vertical Reverse
        </button>
        {/* <button 
          style={{
            ...buttonStyles.button,
            color: '#fff',
            borderColor: '#fff',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <span style={{ fontSize: '16px' }}>↻</span> Flip
        </button> */}
      </div>
    </div>
  );
}
