# 📌 React Native - Calendar Spike

## 📝 Overview

Our current **DatePicker (`react-native-modal-datetime-picker`)** has **limitations in disabling specific dates**. The goal of this spike was to explore alternative calendar libraries that allow disabling specific dates while integrating smoothly with our **modal/bottom sheet component**.

Over **15 different libraries** were reviewed, and the **top 3 choices** that best met our main requirements were:

1. **react-native-calendars** (Final choice ✅)
2. **react-native-calendar-picker**
3. **react-native-ui-datepicker**

---

## 🔎 Evaluation Criteria

Each library was assessed based on:

- ✅ **Calendar View** (Full calendar display, not just a date picker)
- ✅ **Disabling Specific Dates** (Ability to prevent selection of certain dates)
- ✅ **Modal Integration** (Works well inside our bottom sheet/modal component)
- ✅ **Cross-Platform Support** (Works on both iOS & Android)
- ✅ **Popularity & Maintenance** (Community adoption and update frequency)

---

## 🏆 Top 3 Calendar Libraries Reviewed

### 1️⃣ react-native-calendars (✅ **Final Choice**)

- **✅ Advantages:**

  - Highly customizable with different calendar views (e.g., agenda, week view, marking styles)
  - **Supports disabling specific dates** via the `markedDates` and `disableTouchEvent` props
  - Large community support and actively maintained
  - Smooth integration inside a modal or bottom sheet
  - Works well with both iOS and Android

- **❌ Disadvantages:**
  - Requires additional styling for a native feel
  - Slightly larger package size

---

### 2️⃣ react-native-calendar-picker

- **✅ Advantages:**

  - Simple, lightweight, and easy to integrate
  - Supports **disabling specific dates** via the `disabledDates` prop
  - Works smoothly in a **modal or bottom sheet**

- **❌ Disadvantages:**
  - **Lacks built-in animations** for better UX
  - Not as customizable as `react-native-calendars`

---

### 3️⃣ react-native-ui-datepicker

- **✅ Advantages:**

  - Customizable, modern design
  - Works well inside a **bottom sheet**
  - Supports **disabling specific dates**

- **❌ Disadvantages:**
  - Smaller community support than other options
  - Requires **manual date handling with Day.js**

---

## 🏆 Final Decision: `react-native-calendars`

After evaluating multiple options, we **chose `react-native-calendars` as the best library** for our project because:

- **✅ Best support for disabling dates** (via `disableTouchEvent`)
- **✅ Rich feature set** (multiple calendar views, custom marking)
- **✅ Well-maintained** with frequent updates
- **✅ Large community support & documentation**
- **✅ Works well inside a modal or bottom sheet**

While **`react-native-calendar-picker`** and **`react-native-ui-datepicker`** are good alternatives, **they lack the extensive feature set and community support** provided by `react-native-calendars`.

---

## ✅ Conclusion

This spike successfully identified the best calendar solution for our app. By switching to **`react-native-calendars`**, we gain **better date disabling, customization, and community support**, making it the best choice for our React Native CLI project. 🚀

# Getting Started

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.
