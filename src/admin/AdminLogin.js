import React, { useContext } from "react";
import MyContext from "../Context";

export default function AdminLogin() {
  const { value, setValue } = useContext(MyContext);
  return <div>{value}</div>;
}
