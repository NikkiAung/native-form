import React from 'react'
import { useController } from 'react-hook-form';
import { StyleProp, Text, View, TextInput, StyleSheet, ViewStyle, TextInputProps } from 'react-native'

type CustomInputProp = {
    label : string;
    style? : StyleProp<ViewStyle>;
    name : string;
} & TextInputProps

const CustomInput = ({label, style, name, ...textInputProps} : CustomInputProp) => {
  const {field : {value,onChange, onBlur}, fieldState: {error}} = useController({name, rules : {required : `${label} is required`}})
  // const error = {message : undefined}
  return (
    <View style={style}>
      {label && <Text>{label}</Text>}
      <TextInput 
      style={[styles.input, error?.message && styles.errorInput]} 
      {...textInputProps}
      value={value}
      onBlur={onBlur}
      onChangeText={onChange}
      />
      <Text style={styles.error}>{error?.message}</Text>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: "slategrey",
      borderRadius: 5,
      padding: 10,
      marginTop: 4,
      marginBottom: 2,
    },
    errorInput: {
      borderColor: "red",
    },
    label: {
      fontWeight: 600,
      color: "gray",
    },
    error: {
      color: "red",
      height: 17,
    },
});