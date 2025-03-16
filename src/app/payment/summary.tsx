import React from 'react'
import { View,Text, StyleSheet, Pressable } from 'react-native'
import { Link, router } from 'expo-router'
import { useSummary } from '../../contexts/SummaryProvider'
import CustomButton from '../../components/custom-button'

const SummaryScreen = () => {
    const {personalInfo, payoutInfo} = useSummary();
    console.log("Summary Screen ", personalInfo,payoutInfo)
    const onNext = () => {
        router.dismissAll();
        router.back();
    }
  return (
    <View style={styles.container}>
      {
        personalInfo && (
          <View style={styles.card}> 
            <View style={styles.cardHeader}>
             <Text style={styles.cardTitle}>Personal</Text>
             <Link href="/payment">Edit</Link>
            </View>
            {Object.entries(personalInfo).map(([key, value])=> (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )
      }
      {
        payoutInfo && (
          <View style={styles.card}> 
            <View style={styles.cardHeader}>
             <Text style={styles.cardTitle}>Payment</Text>
             <Link href="/payment/payout">Edit</Link>
            </View>
            {Object.entries(payoutInfo).map(([key, value])=> (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )
      }
      <CustomButton
         title="Place order"
         onPress={onNext}
         style={styles.button}
       />
    </View>
  )
}

export default SummaryScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15,
      gap: 15,
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
    },
    card: {
      borderWidth: 1,
      borderColor: "slategrey",
      borderRadius: 10,
      padding: 10,
      gap: 3,
    },
    cardTitle: {
      fontWeight: "600",
      fontSize: 20,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    link: {
      fontWeight: "600",
      color: "dodgerblue",
      textDecorationLine: "underline",
    },
});