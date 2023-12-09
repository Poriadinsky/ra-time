import moment from "moment";
import "moment/locale/ru";

export type Props = {
  date: string;
};

export const DateTimePrettier = (Component: any) => {
  function Wrapper(props: Props) {
    const { date } = props;
    const prettyDate = moment(date).fromNow();
    return <Component {...props} date={prettyDate} />;
  }
  Wrapper.displayName = "DateTimePrettier";
  return Wrapper;
};
