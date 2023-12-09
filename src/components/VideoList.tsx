import { Video } from "./Video";

interface ListProps {
  items: any;
}

export const VideoList = ({ items }: ListProps) => {
  return items.map((item: any, index: any) => (
    <Video url={item.url} date={item.date} key={index} />
  ));
};
