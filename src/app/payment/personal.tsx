import React from 'react'
import { View,Text, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { router } from "expo-router";

const Personal = () => {
    const onNext = () => {
        router.push("/payment/payout");
    }
  return (
    <View style={styles.container}>
      <Text>Personal</Text>
        <Pressable style={styles.button} onPress={onNext}>
            <Text style={styles.text}>Go to Payout</Text>
        </Pressable>
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