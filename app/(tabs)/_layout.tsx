import { Redirect, Slot } from "expo-router";
import React from "react";

export default function _Layout() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return <Slot />;
}

// slot Renders pages on the tabs group as they are
// export default function _Layout() {
//   return <Slot />;
// }
