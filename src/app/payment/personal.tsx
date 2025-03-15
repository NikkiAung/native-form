import React from 'react'
import { View,Text, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { router } from "expo-router";
import CustomButton from '../../components/custom-button';

const Personal = () => {
    const onNext = () => {
        router.push("/payment/payout");
    }
  return (
    <View style={styles.container}>
      <Text>Personal</Text>
      <CustomButton title={'Go to payout'} onPress={onNext} style={styles.button}/>
    </View>
  )
}

export default Personal

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding : 10,
    },
    button : {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 20,
        marginTop : "auto",
        marginBottom : 30,
    },
    text : {
        color: '#fff',
        fontWeight: 600,
    }
});