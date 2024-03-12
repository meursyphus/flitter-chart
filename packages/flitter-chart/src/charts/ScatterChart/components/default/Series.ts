import { Widget, Stack } from "@meursyphus/flitter";
import { Scale } from "../../../../common/CartesianChart/types";
export default function Series({ children }: { children: Widget[] }) {
  return Stack({
    children,
  });
}
