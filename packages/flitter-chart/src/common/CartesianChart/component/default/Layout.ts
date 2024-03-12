import {
  Column,
  Container,
  Flexible,
  Widget,
  EdgeInsets,
} from "@meursyphus/flitter";
export default function Layout({
  padding = EdgeInsets.all(30),
  Title,
  Chart,
  Legend,
  backgroundColor = "white",
}: LayoutProps) {
  return Container({
    padding,
    color: backgroundColor,
    child: Column({
      children: [
        Title,
        Flexible({
          child: Chart,
        }),
        Legend,
      ],
    }),
  });
}

type LayoutProps = {
  backgroundColor?: string;
  padding?: EdgeInsets;
  Title: Widget;
  Chart: Widget;
  Legend: Widget;
};
