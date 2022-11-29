### Team Tay

Team files such as the code of conduct or meeting notes can be found in the [docs](docs) folder.

Files related to the React app can be found inside the [src](src) folder.


### How to run windowsless_app

- cd into the app from the terminal:

- `cd windowsless_app`


#### Run instructions for Android with expo:

- Have the expo emulator running on your mobile device, and connected

- Expo should be installed, but if not:  `npm i expo`

- `npm expo start`

If there's a VM on your machine, to find the right port you may need to tunnel with ngrok:

- `npm i -g @expo/ngrok`

- `npx expo start --tunnel`

Scan the QR code with your phone via the expo go mobile app

Refresh the app by typing `r` in the terminal in your code editor

#### Run on AVD with Android studio:

- Launch Android Studio and open the Virtual device manager
![VDM](/docs/readme_imgs/1.png)

- Choose a device version with google play store on it
![Device](/docs/readme_imgs/2.png)

- Select a system image (**Must be at least Android 12 and API 31**)
![SystemImage](/docs/readme_imgs/3.png)

- Finish and run it either pressing the triangle or cold booting it
![Boot](/docs/readme_imgs/4.png)

- Open project in vs code and run `npx expo start` in its own terminal

- In a separate terminal run `npx react-native run-android`