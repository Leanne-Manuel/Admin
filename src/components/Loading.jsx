import React from "react";
import { Hypnosis } from "react-cssfx-loading";

export default function Loading() {
  return (
    <div className="containerForm">
      <Hypnosis height={120} width={120} color="#fff" />
    </div>
  );
}

export const MiniLoading = () => {
  return (
    <span className="containerForm">
      <Hypnosis height={40} width={40} color="#fff" />
    </span>
  );
};
