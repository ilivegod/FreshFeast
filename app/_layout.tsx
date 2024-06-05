import { Stack } from "expo-router";

import { Provider } from "react-redux";
import store from "../redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="restaurant" />
        <Stack.Screen name="dishdetails" />
        <Stack.Screen name="cart" />
      </Stack>
    </Provider>
  );
}
