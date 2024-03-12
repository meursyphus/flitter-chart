import { type Decoration, Container } from "@meursyphus/flitter";

export default function YAxisTick({
  thickness,
  length = 5,
  color,
  decoration,
}: TickProp) {
  return Container({
    height: thickness,
    width: length,
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
