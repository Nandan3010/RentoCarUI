import React, { useContext } from "react";
import MyContext from "../Context";
export default function History() {
  const { value, setValue } = useContext(MyContext);
  return <div>{value}</div>;
}
