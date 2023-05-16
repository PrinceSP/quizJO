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
    // flex:1,
    flexShrink: 1,
    borderRadius:20,
    borderWidth:4,
    // borderColor:"#2b4967",
    backgroundColor:"transparent",
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  }
})

const Quizzes = ({navigation}) => {
  const [questionNumber,setQuestionNumber] = useState(1)
  const [selectedOption,setSelectedOption] = useState()
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [score, setScore] = useState(0)
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showNextButton,setShowNextButton] = useState(false)

  const onAnswerSelected = (item,answer) => {
    let correct_option = item[questionNumber-1]['correct_answer'];
    setSelectedOption(answer);
    setCorrectOption(correct_option);
    if(answer===correct_option){
      console.log(true);
      setScore(score+1)
    }
    setShowNextButton(true)
    setIsOptionsDisabled(true);
  }

  const nextQuestion = (item)=>{
    if(questionNumber === item.qna.length){
      navigation.navigate("Choises")
    }else{
      setQuestionNumber(currentNumber=>currentNumber < item.qna.length ? currentNumber+1  : currentNumber)
      setSelectedOption(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
  }

  console.log(score);

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
         {item.qna[questionNumber-1].answers.map((ans,idx)=>(
           <TouchableOpacity disabled={isOptionsDisabled} key={idx} style={[styles.option,{borderColor:ans===correctOption ? "#00c851" : ans===selectedOption ? "#ff4444" :"#2b4967"}]} onPress={()=>onAnswerSelected(item.qna,ans)}>
             <Text style={{color:"#fff",fontSize:16}}>{ans}</Text>
           </TouchableOpacity>
         ))}
         <View style={{width:"100%",marginTop:30,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           {questionNumber === 1 ? null : <TouchableOpacity onPress={()=>setQuestionNumber(currentNumber=>currentNumber < 1 ? currentNumber : currentNumber-1)} style={{width:"30%",height:50,alignItems:'center',justifyContent:'center',borderColor:"#2b4967",backgroundColor:"transparent",borderWidth:4,borderRadius:20,marginTop:30}}>
             <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Previous</Text>
           </TouchableOpacity>}
           {showNextButton===true ? <TouchableOpacity onPress={()=>nextQuestion(item)} style={{width:"30%",height:50,alignItems:'center',justifyContent:'center',backgroundColor:"#357ee3",borderRadius:20,marginTop:30}}>
             <Text style={{color:"#fff",fontSize:20,fontWeight:'500'}}>Next</Text>
           </TouchableOpacity> : null}
         </View>
       </View>
     ))
   }
    </View>
  )
}

export default Quizzes
