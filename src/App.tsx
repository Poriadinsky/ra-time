import { useState } from "react";
import { VideoList } from "./components/VideoList";
import itemsList from "./components/items.json";
import "./App.css";

interface ListItem {
  url: string;
  date: string;
}

export default function App() {
  const [list, setList] = useState<ListItem[]>(itemsList);

  return <VideoList items={list} />;
}
