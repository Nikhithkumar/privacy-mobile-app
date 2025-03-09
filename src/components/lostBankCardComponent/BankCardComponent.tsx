import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
import CreditCard from '../CreditCard';
import GradientMenuButton from '../GradientMenuButton';

interface BankCardComponentProps{
    handlePrevious:()=>void;
    handleNext:()=>void;
    handlePress:(item:any)=>void
}

const creditCardData=[
  {
    id:1,
    creditCardNo:'5000 xxxx xxxx 0000',
    validThru:'03/31',
    name:'Alex White'
  },
  {
    id:2,
    creditCardNo:'5020 xxxx xxxx 0000',
    validThru:'03/32',
    name:'Alex White'
  }
]

const BankCardComponent:React.FC<BankCardComponentProps> = ({
    handleNext,handlePrevious,handlePress
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please choose the card you have lost</Text>
      {creditCardData.map((item,index)=>(
        <View key={index}>
         <CreditCard item={item} onPress={()=>handlePress(item)}/>
         </View>
      ))}
    </View>
  )
}

export default BankCardComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingVertical:20
    },
    text:{
        color:Colors.lightGrey,
        textAlign:'center',
        fontSize:14
    }
})