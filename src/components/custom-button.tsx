import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, PressableProps } from 'react-native'

type CustomButtonProp = {
    title : string;
} & PressableProps;

const CustomButton = ({title,...pressableProps} : CustomButtonProp) => {
  return (
        <Pressable style={styles.button} {...pressableProps}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button : {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 20,
    },
    text : {
        color: '#fff',
        fontWeight: 600,
    }
});