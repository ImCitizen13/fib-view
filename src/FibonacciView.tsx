import { Children, type PropsWithChildren, useState } from "react";
import { OrientationEnum, type ViewResolution, ViewType, ViewPercentages } from "./types";

export type FibonacciViewProps = {
  orientation: OrientationEnum;
  _flip?: boolean;
  _changeOrientation?: () => void
};


function getViewResolution(orientation: OrientationEnum): ViewResolution {
  if (
    orientation === OrientationEnum.horizontal ||
    orientation === OrientationEnum.horizontalReverse
  ) {
    // width: "960px", height: "720px"
    return { width: "480px", height: "360px" };
  }
  return { height: "480px", width: "360px" };
}

function orientView(
  orientation: OrientationEnum,
  viewType: ViewType
): ViewResolution {
  if (
    orientation === OrientationEnum.horizontal ||
    orientation === OrientationEnum.horizontalReverse
  ) {
    if (viewType === ViewType.largest) return { width: ViewPercentages.LARGE, height: ViewPercentages.FULL };
    else if (viewType === ViewType.large) return { width: ViewPercentages.SMALL, height: ViewPercentages.FULL };
    else if (viewType === ViewType.medium)
      return { width: ViewPercentages.FULL, height: ViewPercentages.LARGE };
    else return { width: ViewPercentages.FULL, height: ViewPercentages.SMALL };
  } else {
    //(orientation === OrientationEnum.vertical) {
    if (viewType === ViewType.largest) return { height: ViewPercentages.LARGE, width: ViewPercentages.FULL };
    else if (viewType === ViewType.large) return { height: ViewPercentages.SMALL, width: ViewPercentages.FULL };
    else if (viewType === ViewType.medium)
      return { height: ViewPercentages.FULL, width: ViewPercentages.LARGE };
    else return { height: ViewPercentages.FULL, width: ViewPercentages.SMALL };
  }
}

// Fib grid has to be modulo 3

export default function FibonacciView({
  orientation,
  children,
  _flip = false,
}: PropsWithChildren<FibonacciViewProps>) {
  const viewChildren = Children.toArray(children);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flip, setFlip] = useState<boolean>(_flip);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [orientation, setOrientation] = useState<OrientationEnum>(_orientation);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nBoxes, setNboxes] = useState<number>(viewChildren.length);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [elementResolution, setElementResolution] = useState<ViewResolution>(
    getViewResolution(orientation)
  );

  return (
    <div
      id='fibGrid'
      style={{
        width: elementResolution.width,
        height: elementResolution.height,
        flexDirection:
          orientation === OrientationEnum.horizontal ||
          orientation === OrientationEnum.horizontalReverse
            ? "column"
            : "row",
      }}
    >
      {/* Largest View */}
      {(orientation === OrientationEnum.horizontal ||
        (orientation === OrientationEnum.verticalReverse && !flip) ||
        (orientation === OrientationEnum.vertical && flip)) && (
        <div
          className='leftCol flexRowCenter'
          style={orientView(orientation, ViewType.largest)}
        >
          {viewChildren[0] && viewChildren[0]}
        </div>
      )}

      {/* Large View */}
      <div
        className='rightCol'
        style={orientView(orientation, ViewType.large)}
      >
        {/* Medium View */}
        {((orientation === OrientationEnum.horizontal && !flip) ||
          (orientation === OrientationEnum.horizontalReverse && !flip) ||
          orientation === OrientationEnum.vertical) && (
          <div
            className='topRight'
            style={orientView(orientation, ViewType.medium)}
          >
            {viewChildren[1] && viewChildren[1]}
          </div>
        )}

        {/* Small View */}
        <div
          className='bottomRight'
          style={orientView(orientation, ViewType.small)}
        >
          {viewChildren[2] && viewChildren[2]}
        </div>

        {/* Medium View */}
        {((orientation === OrientationEnum.horizontalReverse && flip) ||
          orientation === OrientationEnum.verticalReverse ||
          (orientation === OrientationEnum.horizontal && flip)) && (
          <div
            className='topRight'
            style={orientView(orientation, ViewType.medium)}
          >
            {viewChildren[1] && viewChildren[1]}
          </div>
        )}
      </div>

      {/* ViewPercentages.LARGEST View */}
      {((orientation === OrientationEnum.vertical && !flip) ||
        orientation === OrientationEnum.horizontalReverse ||
        (orientation === OrientationEnum.verticalReverse && flip)) && (
        <div
          className='leftCol'
          style={orientView(orientation, ViewType.largest)}
        >
          {viewChildren[0] && viewChildren[0]}
        </div>
      )}
    </div>
  );
}
