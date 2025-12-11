"use client";
import { commonPage } from "../modules/commonPage";
export default function Page() {
  return commonPage("Distribution", [
    { title: "App Releases", text: "ツール／アプリの配布" },
    { title: "Microcontroller Codes", text: "Arduino / RA4M1 / Pico" },
    { title: "STL / PCB", text: "3Dプリント & PCB 配布" },
    { title: "Documents", text: "PDF・研究資料" },
  ]);
}
