import React,{useState} from 'react'
import {View,Text,StyleSheet,StatusBar,TouchableOpacity} from "react-native"
import {beginner,mediocre,master} from '../../config'

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    backgroundColor:"#262d48",
    paddingHorizontal:30,
    paddingVertical:20
  },
  text:{
    color:"#9098bc",
    fontWeight:'600',
  },
  option:{
    width:"100%",
    height:60,
    borderRadius:20,
    borderWidth:4,
    borderColor:"#2b4967",
    backgroundColor:"transparent",
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  }
})

const Quizzes = ({navigation}) => {
  const [questionNumber,setQuestionNumber] = useState(1)
  console.log(questionNumber);
  return (
    <View style={styles.container}>
     <StatusBar
      animated={true}
      backgroundColor="#262d48"
     />
   {
     beginner.map((item,index)=>(
       <View key={index} style={{width:"100%"}}>
         <Text style={[styles.text,{fontSize:16}]}>{item.level} Level</Text>
         <Text style={[styles.text,{fontSize:24}]}>Question {questionNumber}/{item.qna.length}</Text>
         <Text style={{fontSize:28,color:"#ededed",marginTop:32,marginBottom:22,textAlign:'left',fontWeight:'600'}}>{item.qna[questionNumber-1].question}</Text>
         {item.qna[questionNumber-1].answers.map((ans,index)=>(
           <TouchableOpacity key={index} style={styles.option}>
             <Text style={{color:"#fff",fontSize:16}}>{ans}</Text>
           </TouchableOpacity>
         ))}
         <View style={{width:"100%",marginTop:30,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           <TouchableOpacity disabled={questionNumber < 1 ? true : false} onPress={()=>setQuestionNumber(currentNumber=>currentNumber < 1 ? currentNumber : currentNumber-1)} style={{width:"30%",height:50,alignItems:'center',justifyContent:'center',borderColor:"#2b4967",backgroundColor:"transparent",borderWidth:4,borderRadius:20,marginTop:30}}>
             <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Back</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>setQuestionNumber(currentNumber=>currentNumber < item.qna.length ? currentNumber+1  : currentNumber)} style={{width:"30%",height:50,alignItems:'center',justifyContent:'center',backgroundColor:"#357ee3",borderRadius:20,marginTop:30}}>
             <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Next</Text>
           </TouchableOpacity>
         </View>
       </View>
     ))
   }
    </View>
  )
}

export default Quizzes
