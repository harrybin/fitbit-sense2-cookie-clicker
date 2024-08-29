# Fibit Sense 2 - App - Torch/Flashlight

A one-hour project based on the [cockie-clicker exmple](https://github.com/eraychumak/fitbit-sense2-cookie-clicker?tab=readme-ov-file).

## How to build and install this app:

#### Prerequisits:

For being able to install via sideload on your watch you need to follow the steps for [DEV - Using a Fitbit OS Device](https://dev.fitbit.com/getting-started/) - login to [Gallery Admin](https://gam.fitbit.com/) using your Fitbit account and accept the terms - on your smartphone you will now be able to enable the _Develope Bridger_ under <Your device> --> Developer, then sync your watch - after that you will find the option to enable the Developer Bridge in the setting of your Fitbit watch.
Having the watch connected to your your PC using the USB-Loading cable you now show be able to install your app via the cli, seeing somethin like this:

```
 fitbit$ install
 No app package specified. Using default ./build/app.fba.
 Loaded appID:2bcb9c0f-493b-4ec5-9fe0-XXXXXXXX buildID:0x03c5e73f1b35ed24
 App requires a device, connecting...
 Auto-connecting only known device: Sense 2
 App install complete (full)
 Launching app
```

- install all packages `npm i`
- start the fitbit-cli using `npx fitbit` or `npm run debug`
- within the the cli use:
  - `build` for building the app
  - `install` for installing to your watch
  - `bi` for build and install

:warning: if you get the error:

> Install failed: No response received for RPC call to 'app.install.stream.begin'

when installing the app, simply `exit` the fitbit-cli and launch it again.

Here is usafull link to the [FitBit API](https://dev.fitbit.com/build/reference/device-api/)
