"use client";
import { commonPage } from "../modules/commonPage";
export default function Page() {
  return commonPage("Games", [
    { title: "Web Games", text: "ブラウザで遊べる自作ゲーム" },
    { title: "Unity Builds", text: "Unity WebGL / PC版" },
    { title: "Simulation Games", text: "物理シミュレーション系" },
    { title: "Prototype Zone", text: "アルファ版・実験作" },
  ]);
}
