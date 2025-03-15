import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const IndexPage = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>Hello</Text>
      <Pressable style={styles.button}>
        <Link href="/payment" asChild>
            <Text style={styles.text}>Go to Forms</Text>
        </Link>
      </Pressable>
      <StatusBar style='auto'></StatusBar>
    </SafeAreaView>
  )
}

export default IndexPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
