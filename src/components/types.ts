import { BlockStyle } from "./BlockView";

export enum OrientationEnum {
  horizontal = "Horizontal",
  vertical = "Vertical",
  verticalReverse = "VerticalReverse",
  horizontalReverse = "HorizontalReverse",
}

export type ViewResolution = {
  width: string;
  height: string;
};

export enum ViewType {
  largest = 1,
  large = 2,
  medium = 3,
  small = 4,
}

export type ViewPercentages = {
  FULL_WIDTH: number;
  FULL_HEIGHT: number;
  LARGE: number;
  SMALL: number;
};

export const FIB_VIEW_PERCENTAGES: ViewPercentages = {
  FULL_WIDTH: 1,
  FULL_HEIGHT: 1,
  LARGE: 0.625,
  SMALL: 0.375,
};

export type BlockViewProps = {
  orientation: OrientationEnum;
  ParentViewResolution?: ViewResolution;
  _className: string;
  viewType: ViewType;
  color?: string;
  // _ref?: RefObject<HTMLDivElement>
};
