import {
  Children,
  type PropsWithChildren,
  useState,
  type CSSProperties,
  useRef,
  useEffect,
} from "react";
import BlockView, { BlockStyle, orientView } from "./BlockView";
import { OrientationEnum, ViewResolution, ViewType } from "./types";
import { getRandomColor } from "./colors";

export type FibonacciViewProps = {
  orientation: OrientationEnum;
  _flip?: boolean;
  _changeOrientation?: () => void;
  width: string;
  height: string;
  colors?: string[];
};

function getOrientedViewResolution(
  orientation: OrientationEnum,
  width: string,
  height: string
): CSSProperties | undefined {
  if (
    orientation === OrientationEnum.horizontal ||
    orientation === OrientationEnum.horizontalReverse
  ) {
    return { width: width, height: height, flexDirection: "row" };
  }
  return { width: width, height: height, flexDirection: "column" };
}

// Fib grid has to be modulo 3

export default function FibonacciView({
  orientation,
  children,
  _flip = false,
  width,
  height,
  colors,
}: PropsWithChildren<FibonacciViewProps>) {
  const viewChildren = Children.toArray(children);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flip, setFlip] = useState<boolean>(_flip);
  const smallViewRef = useRef<HTMLDivElement>(null);
  const [smallViewWidth, setSmallViewWidth] = useState<number>(0);
  const [smallViewHeight, setSmallViewHeight] = useState<number>(0);
  const viewColors = colors ?? getRandomColor();
  const [nextFibResolution, setNextFibResolution] = useState<ViewResolution>({
    width: "100%",
    height: "100%",
  });

  //useLayoutEffect is on the server or something
  useEffect(() => {
    console.log("View Percentages: ", orientView(orientation, ViewType.small));
    const percentages = orientView(orientation, ViewType.small);
    setSmallViewWidth(smallViewRef.current?.offsetWidth ?? 500);
    setSmallViewHeight(smallViewRef.current?.offsetHeight ?? 500);
    setNextFibResolution({
      width: `calc(${smallViewWidth}px * ${percentages.width})`,
      height: `calc(${smallViewHeight}px * ${percentages.height})`,
    });
  }, [smallViewRef]);

  return (
    <div
      id="fibGrid"
      style={getOrientedViewResolution(orientation, width, height)}
    >
      {/* Largest View */}
      {(orientation === OrientationEnum.horizontal ||
        (orientation === OrientationEnum.verticalReverse && !flip) ||
        (orientation === OrientationEnum.vertical && flip)) && (
        <>
          <BlockView
            orientation={orientation}
            _className={BlockStyle.leftCol}
            viewType={ViewType.largest}
            color={viewColors.pop()}
          >
            {viewChildren[0] && viewChildren[0]}
          </BlockView>
        </>
      )}

      {/* Large View */}

      <div
        ref={smallViewRef}
        style={{
          ...BlockStyle.rightCol,
          ...orientView(orientation, ViewType.large),
          flexWrap: "wrap",
        }}
      >
        {/* Medium View */}
        {((orientation === OrientationEnum.horizontal && !flip) ||
          (orientation === OrientationEnum.horizontalReverse && !flip) ||
          orientation === OrientationEnum.vertical) && (
          <BlockView
            orientation={orientation}
            _className={BlockStyle.topRight}
            viewType={ViewType.medium}
            color={viewColors.pop()}
          >
            {viewChildren[1] && viewChildren[1]}
          </BlockView>
        )}

        {/* Small View */}
        <BlockView
          orientation={orientation}
          _className={BlockStyle.bottomRight}
          viewType={ViewType.small}
          color={viewColors.pop()}
        >
          {viewChildren.length > 3 && (
            <FibonacciView
              orientation={OrientationEnum.horizontalReverse}
              _flip={true}
              width={nextFibResolution.width}
              height={nextFibResolution.height}
              colors={viewColors}
            >
              {viewChildren.slice(2, viewChildren.length)}
            </FibonacciView>
          )}

          {viewChildren.length <= 3 && viewChildren[2] && viewChildren[2]}
        </BlockView>

        {/* Medium View */}
        {((orientation === OrientationEnum.horizontalReverse && flip) ||
          orientation === OrientationEnum.verticalReverse ||
          (orientation === OrientationEnum.horizontal && flip)) && (
          <BlockView
            orientation={orientation}
            _className={BlockStyle.topRight}
            viewType={ViewType.medium}
            color={viewColors.pop()}
          >
            {viewChildren[1] && viewChildren[1]}
          </BlockView>
        )}
      </div>

      {/* Largest View */}
      {((orientation === OrientationEnum.vertical && !flip) ||
        orientation === OrientationEnum.horizontalReverse ||
        (orientation === OrientationEnum.verticalReverse && flip)) && (
        <BlockView
          orientation={orientation}
          _className={BlockStyle.leftCol}
          viewType={ViewType.largest}
          color={viewColors.pop()}
        >
          {viewChildren[0] && viewChildren[0]}
        </BlockView>
      )}
    </div>
  );
}
