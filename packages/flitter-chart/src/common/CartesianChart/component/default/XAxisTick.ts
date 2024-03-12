import { type Decoration, Container } from "@meursyphus/flitter";

export default function XAxisTick({
  thickness,
  length = 5,
  color,
  decoration,
}: TickProp) {
  return Container({
    width: thickness,
    height: length,
    color,
    decoration,
  });
}

type TickProp = {
  thickness: number;
  length?: number;
  color?: string;
  decoration?: Decoration;
};
