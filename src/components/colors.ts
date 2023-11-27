const COLOR_PALETTES = [
  ["#5C5470", "#352F44", "#2A2438"],
  ["#3D1860", "#643579", "#BB99CD"],
  ["#324E7B", "#86A6DF", "#5068A9"],
  ["#1FAB89", "#62D2A2", "#9DF3C4"],
  ["#459D72", "#90D26D", "#DEFBC2"],
  ["#DAD992", "#E6DF9A", "#F3ED9E", "#FFFEA9"],
  ["#F9F3CF", "#EDE7CF", "#DDBC89"],
  ["#EEB76B", "#E2703A", "#9C3D54", "#310B0B"],
  ["#EB8F8F", "#EC0101", "#CD0A0A"],
  ["#FD0054", "#A80038", "#2B2024"],
  ["#FFCC70", "#FFFADD", "#8ECDDD", "#22668D"],
  ["#FFFF8F", "#EC9E69", "#D56073", "#7A4579"],
  ["#FC00A3", "#B30C7B", "#780662", "#E3F6F5"],
  ["#FFE0A3", "#E18237", "#943939", "#6A2634"],
];

const ALL_COLORS: string[] = COLOR_PALETTES.reduce((prevColors, current) => {
  return prevColors.concat(current);
});

export function getRandomColor(): string[] {
  return ALL_COLORS;
}
