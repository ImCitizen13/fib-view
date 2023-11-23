/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";

export type ColorContextProps = {
  faceColor: string;
  eyesColor: string;
  lipsColor: string;
  pupleColor: string;
  mouthLineColor: string;
  setfaceColor: (_hexColor: string) => void;
  setEyesColor: (_hexColor: string) => void;
  setLipsColor: (_hexColor: string) => void;
  setPupleColor: (_hexColor: string) => void;
  setMouthLineColor: (_hexColor: string) => void;

  //   setColors: () => void;
};

export type Colors = {
  faceColor: string;
  eyesColor: string;
  lipsColor: string;
  pupleColor: string;
  mouthLineColor: string;

  //   setColors: () => void;
};

const ColorContext = createContext({
  faceColor: "#4d9e2f",
  eyesColor: "#ffffff",
  lipsColor: "#ea3524",
  pupleColor: "#000000",
  mouthLineColor: "#000000",
  setfaceColor: (_hexColor: string) => {},
  setEyesColor: (_hexColor: string) => {},
  setLipsColor: (_hexColor: string) => {},
  setPupleColor: (_hexColor: string) => {},
  setMouthLineColor: (_hexColor: string) => {},
});

function ColorContextProvider(props: PropsWithChildren) {
  const [faceColor, setfaceColor] = useState<string>("#4d9e2f");
  const [eyesColor, setEyesColor] = useState<string>("#ffffff");
  const [lipsColor, setLipsColor] = useState<string>("#ea3524");
  const [pupleColor, setPupleColor] = useState<string>("#000000");
  const [mouthLineColor, setMouthLineColor] = useState<string>("#000000");

  return (
    <ColorContext.Provider
      value={{
        faceColor: faceColor,
        eyesColor: eyesColor,
        lipsColor: lipsColor,
        pupleColor: pupleColor,
        mouthLineColor: mouthLineColor,
        setfaceColor: (_hexColor: string) => {
          setfaceColor(_hexColor);
        },
        setEyesColor: (_hexColor: string) => {
          setEyesColor(_hexColor);
        },
        setLipsColor: (_hexColor: string) => {
          setLipsColor(_hexColor);
        },
        setPupleColor: (_hexColor: string) => {
          setPupleColor(_hexColor);
        },
        setMouthLineColor: (_hexColor: string) => {
          setMouthLineColor(_hexColor);
        },
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
}
function useColors(): Colors {
  const context = useContext(ColorContext);

  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return {
    faceColor: context.faceColor,
    eyesColor: context.eyesColor,
    lipsColor: context.lipsColor,
    pupleColor: context.pupleColor,
    mouthLineColor: context.mouthLineColor,
  }
}

function useColorsProps(): ColorContextProps {
  const context = useContext(ColorContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return {
    faceColor: context.faceColor,
    eyesColor: context.eyesColor,
    lipsColor: context.lipsColor,
    pupleColor: context.pupleColor,
    mouthLineColor: context.mouthLineColor,
    setfaceColor: (_hexColor: string) => {},
    setEyesColor: (_hexColor: string) => {},
    setLipsColor: (_hexColor: string) => {},
    setPupleColor: (_hexColor: string) => {},
    setMouthLineColor: (_hexColor: string) => {},
  };
}

function useSetColors({
  faceColor,
  eyesColor,
  lipsColor,
  pupleColor,
  mouthLineColor,
}: ColorContextProps) {
  const context = useContext(ColorContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  context.setfaceColor(faceColor);
  context.setEyesColor(eyesColor);
  context.setLipsColor(lipsColor);
  context.setPupleColor(pupleColor);
  context.setMouthLineColor(mouthLineColor);
}

export { ColorContextProvider, useColors, useColorsProps, useSetColors };
