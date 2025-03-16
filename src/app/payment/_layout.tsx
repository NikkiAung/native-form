import { Stack } from "expo-router";
import React from "react";
import SummaryContextProvider from "../../contexts/SummaryProvider";
import StepIndicator from "../../components/step-indicator";

const PaymentLayout = () => {
  return (
    <SummaryContextProvider>
      <StepIndicator />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payout" options={{ title: "Payout" }} />
        <Stack.Screen name="summary" options={{ title: "Summary" }} />
      </Stack>
    </SummaryContextProvider>
  );
};

export default PaymentLayout;