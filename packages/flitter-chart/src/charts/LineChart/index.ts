import CartesianChartContextRootWidget from "../../common/CartesianChart/CartesianChartContextRootWidget";
import type { Custom } from "./types";
import * as defaultComponents from "./components/default";
import { Dependencies } from "../../common/CartesianChart/types";
import Series from "./components/Series";
import {
  Scale,
  getScale,
  getValueEdge,
} from "../../common/CartesianChart/util";
class LineChart extends CartesianChartContextRootWidget<Custom> {
  get dependencies(): Dependencies {
    const base = super.dependencies;
    return {
      ...base,
      Series,
    };
  }

  mergeWithDefaultCustom(custom: Partial<Custom>): Custom {
    const base = super.mergeWithDefaultCustom(custom);

    return {
      ...base,
      line: custom?.line ?? { type: "config" },
    };
  }

  get scale(): Scale {
    const { datasets } = this.data;

    const valueEdge = getValueEdge(datasets.map(({ data }) => data));

    const roughEdge = {
      min: valueEdge.min > 0 ? 0 : valueEdge.min,
      max: valueEdge.max < 0 ? 0 : valueEdge.max,
    };
    const roughStepCount = 10;

    const roughScale: Scale = {
      min: this.scaleConfig?.min ?? roughEdge.min,
      max: this.scaleConfig?.max ?? roughEdge.max,
      step:
        this.scaleConfig?.step ??
        (roughEdge.max - roughEdge.min) / roughStepCount,
    };

    return getScale(roughScale);
  }
}

export default (...props: ConstructorParameters<typeof LineChart>) =>
  new LineChart(...props);
export { defaultComponents as DefaultComponents };
