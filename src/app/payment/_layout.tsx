import { Stack } from "expo-router";
import React from "react";
import SummaryContextProvider from "../../contexts/SummaryProvider";

const PaymentLayout = () => {
  return (
    <SummaryContextProvider>
      <Stack>
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payout" options={{ title: "Payout" }} />
        <Stack.Screen name="summary" options={{ title: "Summary" }} />
      </Stack>
    </SummaryContextProvider>
  );
};

export default PaymentLayout;