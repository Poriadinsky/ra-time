import { DateTime } from "./DateTime";
import { DateTimePrettier } from "./DateTimePrettier";

const DateTimePretty = DateTimePrettier(DateTime);

export type ListItem = {
  url: string;
  date: string;
};

export const Video = ({ url, date }: ListItem) => {
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};
