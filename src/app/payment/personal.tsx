import React from 'react'
import { View, StyleSheet } from 'react-native'
import { router } from "expo-router";
import CustomButton from '../../components/custom-button';
import CustomInput from '../../components/custom-input';

const Personal = () => {
    const onNext = () => {
        router.push("/payment/payout");
    }
  return (
    <View style={styles.container}>
      <CustomInput label={'Fullname'} />
      <CustomInput label={'Address'} />
      <View style={{flexDirection : "row", gap: 5}}>
        <CustomInput label={'City'} style={{flex:1}}/>
        <CustomInput label={'Postal Code'} style={{flex:1}}/>
      </View>
      <CustomInput label={'Phone number'} inputMode="tel"/>
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