import React from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import CustomButton from '../../components/custom-button';
import CustomInput from '../../components/custom-input';
import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { PayoutSchema } from "../../types/payout-schema";
import * as z from "zod";

type Payout = z.infer<typeof PayoutSchema>;

const PayoutScreen = () => {
  const form = useForm<Payout>({
    resolver: zodResolver(PayoutSchema),
  })
  const onNext: SubmitHandler<Payout> = () => {
      router.push("/payment/summary");
  };
  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <CustomInput label={'Card number'} name="cardnumber" inputMode="numeric"/>
        <View style={{flexDirection : "row" , gap : 5}}>
          <CustomInput label={'Expiry date'} name="expiry" style={{flex:1}} inputMode="numeric"/>
          <CustomInput label={'CVV'} name="cvv" inputMode="numeric"/>
        </View>
        <CustomButton title={'Go to summary'} onPress={form.handleSubmit(onNext)} style={styles.button}/>
      </FormProvider>
    </View>
  )
}

export default PayoutScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#000000",
      padding: 10,
      borderRadius: 20,
      marginTop: "auto",
      marginBottom: 20,
    }
});