import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}
