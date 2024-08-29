/*
 * Entry point for the watch app
 */
import * as document from "document";
import { display } from "display";
import { me as appbit } from "appbit";

const face = document.getElementById("face");
let orgBrightness = display.brightnessOverride;
display.brightnessOverride = "max";
display.autoOff = false;
display.poke();

face.addEventListener("click", (evt) => {
  face.animate("click");
  display.autoOff = true;
  display.brightnessOverride = orgBrightness;
  appbit.exit();
});

appbit.onunload = () => {
  display.autoOff = true;
  display.brightnessOverride = orgBrightness;
};
