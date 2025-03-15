import React from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import CustomButton from '../../components/custom-button';

const PayoutScreen = () => {
    const onNext = () => {
        router.push("/payment/summary");
        };
  return (
    <View style={styles.container}>
      <Text>PayoutScreen</Text>
      <CustomButton title={'Go to summary'} onPress={onNext} style={styles.button}/>
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