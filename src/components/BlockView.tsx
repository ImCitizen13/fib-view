import { type PropsWithChildren } from "react";
import {
  type ViewResolution,
  type BlockViewProps,
  OrientationEnum,
  ViewType,
  FIB_VIEW_PERCENTAGES,
} from "./types";

export function orientView(
  orientation: OrientationEnum,
  viewType: ViewType
  // viewResolution: ViewResolution
): ViewResolution {
  const viewPercentages = FIB_VIEW_PERCENTAGES;
  if (
    orientation === OrientationEnum.horizontal ||
    orientation === OrientationEnum.horizontalReverse
  ) {
    // Resolution
    if (viewType === ViewType.largest)
      return {
        width: 100 * viewPercentages.LARGE + "%",
        height: 100 * viewPercentages.FULL_HEIGHT + "%",
      };
    else if (viewType === ViewType.large)
      return {
        width: 100 * viewPercentages.SMALL + "%",
        height: 100 * viewPercentages.FULL_HEIGHT + "%",
      };
    else if (viewType === ViewType.medium)
      return {
        width: 100 * viewPercentages.FULL_WIDTH + "%",
        height: 100 * viewPercentages.LARGE + "%",
      };
    else
      return {
        width: 100 * viewPercentages.FULL_WIDTH + "%",
        height: 100 * viewPercentages.SMALL + "%",
      };
  } else {
    if (viewType === ViewType.largest)
      return {
        height: 100 * viewPercentages.LARGE + "%",
        width: 100 * viewPercentages.FULL_WIDTH + "%",
      };
    else if (viewType === ViewType.large)
      return {
        height: 100 * viewPercentages.SMALL + "%",
        width: 100 * viewPercentages.FULL_WIDTH + "%",
      };
    else if (viewType === ViewType.medium)
      return {
        height: 100 * viewPercentages.FULL_HEIGHT + "%",
        width: 100 * viewPercentages.LARGE + "%",
      };
    else
      return {
        height: 100 * viewPercentages.FULL_HEIGHT + "%",
        width: 100 * viewPercentages.SMALL + "%",
      };
  }
}

export class BlockStyle {
  static readonly leftCol = {
    // backgroundColor: "#FBAEAB",
    height: "100vh",
    width: "62.5%",
  };
  static readonly rightCol = {
    // backgroundColor: "#EED1B2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "37.5%",
  };
  static readonly topRight = {
    // backgroundColor: "#EED1B2",
    minHeight: "62.5%",
    width: "100vw",
  };

  static readonly bottomRight = {
    // backgroundColor: "#13C5CD",
    height: "37.5%",
    width: "100vw",
  };
  // private to disallow creating other instances of this type
  // private constructor(
  //   private readonly key: string,
  //   public readonly value: any
  // ) {}

  // toString() {
  //   return this.key;
  // }
}
export default function BlockView({
  orientation,
  _className,
  children,
  viewType,
  color,
}: PropsWithChildren<BlockViewProps>) {
  const { width, height } = orientView(orientation, viewType);
  return (
    <div
      style={{
        ..._className,
        width: width,
        height: height,
        // background: color
      }}
    >
      {children}
    </div>
  );
}
