import { PropsWithChildren } from "react";
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

export default function BlockView({
  orientation,
  _className,
  children,
  viewType,
  color,
}: PropsWithChildren<BlockViewProps>) {
  // console.log("Size: ", orientView(orientation, viewType))
  const { width, height } = orientView(orientation, viewType);
  console.log("Color: ", color)
  return (
    <div
      className={_className}
      style={{ width: width, height: height, background: color }}
    >
      {children}
    </div>
  );
}
