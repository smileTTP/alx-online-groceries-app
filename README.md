# alx-online-groceries-app 

The goal of this project is to create an online groceries app using Expo with Nativewind following the [figma file](https://www.figma.com/design/FbIovZFuJAJ5Xo4gyTTBQj/Online-Groceries-App-UI--Community-?node-id=1-2&t=uMPSmVpasRSCoLZ0-1)

### Process
1. I installed Expo Go app on my phone and logged in after creating an account.
2. I made sure I had the latest stable version of node on my computer
```bash
node -v
npm -v
```
3. I installed Expo CLI globally
```bash
npm install -g expo-cli
```
4. I initialized a new Expo project 
```bash
npx create-expo-app@latest
```
5. Started the Expo server 
```bash
npm run reset-project
```
And scanned the QR code on Expo Go android app
6. I ran the reset command 
```bash 
npm run reset-project
```
7. I installed Nativewind v4 following [the documentation](https://www.nativewind.dev/docs/getting-started/installation)
8. Installed expo vectors
```bash
npm install @expo/vector-icons
```
9. I created the layouts with the home page tab navigation, added assets, created the common component that i will reuse during the project, and interfaces and constants folders.
10. Started working on the project following the [figma design](https://www.figma.com/design/FbIovZFuJAJ5Xo4gyTTBQj/Online-Groceries-App-UI--Community-?node-id=1-2&t=uMPSmVpasRSCoLZ0-1)


### Challenges
- I experienced the app crashing multiple times on the Expo Go android app while working on the project which slowed down the coding progress.
- Problem with the app crashing after editing the splash screen (that remains unsolved for now).
- Some problem with text-color not working sometimes.
- Navigating to a new page from home page that is not a part of the bottom tabs (that remains unsolved for now).

