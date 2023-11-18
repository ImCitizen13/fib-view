export enum OrientationEnum {
  horizontal = 1,
  vertical = 2,
  verticalReverse = 3,
  horizontalReverse = 4,
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

export enum ViewPercentages {
  FULL = "100%",
  LARGE = "62.5%",
  SMALL = "37.5%",
}
