### Team Tay

Team files such as the code of conduct or meeting notes can be found in the [docs](docs) folder.

Files related to the React app can be found inside the [src](src) folder.


### How to run tay_desktop app

- cd into the app from the terminal:

- `cd tay_desktop`


#### Run instructions for Android with expo:

- Have the expo emulator running on your mobile device, and connected

- if expo isn't already installed to project `yarn add expo`

- `npm expo start`

If there's a VM on your machine, to find the right port you may need to tunnel with ngrok:

- `npm i -g @expo/ngrok`

- `npx expo start --tunnel`



#### Run instructions for Windows:

- `npx react-native run-windows`