import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function _Layout() {
  return (
    <SafeAreaView>
      <Text>Auth layout</Text>
      <Slot />
    </SafeAreaView>
  );
}

// export default function _Layout() {
//   return (
//     <SafeAreaView>
//       <Text>Auth layout</Text>
//       <Slot />  // slot Renders pages on the tabs group as they are

//     </SafeAreaView>
//   );
// }
