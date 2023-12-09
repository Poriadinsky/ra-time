export type Date = {
  date: string;
};

export const DateTime = ({ date }: Date) => {
  return <p className="date">{date}</p>;
};
