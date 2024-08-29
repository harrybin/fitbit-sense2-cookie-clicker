/*
 * Entry point for the watch app
 */
import * as document from "document";
import { display } from "display";
import { me as appbit } from "appbit";

const face = document.getElementById("face");
let orgBrightness = display.brightnessOverride;
let isExiting = false;

setInterval(() => {
  if (!isExiting) display.poke();
}, 1500);

display.brightnessOverride = "max";
display.poke();

face.addEventListener("click", (evt) => {
  face.animate("click");
  display.brightnessOverride = orgBrightness;
  isExiting = true;
  appbit.exit();
});

appbit.onunload = () => {
  display.brightnessOverride = orgBrightness;
  isExiting = true;
};
