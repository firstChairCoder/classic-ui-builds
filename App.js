import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  useFonts
} from "@expo-google-fonts/rubik";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "./src/navigation";
import { StateContextProvider } from "./src/context/state-context";

export default function App() {
  const [loaded] = useFonts({
    Light: Rubik_300Light,
    Regular: Rubik_400Regular,
    Medium: Rubik_500Medium,
    Bold: Rubik_700Bold,
    ExtraBold: Rubik_800ExtraBold,
    Black: Rubik_900Black
  });

  if (!loaded) {
    return null;
  }

  return (
    <StateContextProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </StateContextProvider>
  );
}
