import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
export default function LayoutHome() {
  return (
    <div className="divgeral">
      <Menu />
      <Outlet />
    </div>
  );
}
