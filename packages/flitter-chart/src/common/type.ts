import { Widget } from "@meursyphus/flitter";

export type CustomWidget<
  T extends string | {} | Record<string, any>,
  R = {},
  THEME = {},
  DATA = {},
> = {
  type: "custom";
  Custom: (
    child: T extends string
      ? { [key in T]: () => Widget }
      : T extends {}
        ? T
        : {},
    data: R & { theme: THEME; data: DATA }
  ) => Widget;
};

export type CustomConfig<T> = { type: "config" } & T;
