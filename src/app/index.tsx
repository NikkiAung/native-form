import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../components/custom-button'
import { router } from 'expo-router'

const IndexPage = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <CustomButton title={'Go to Forms'} onPress={()=> router.push('/payment')} />
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
});
