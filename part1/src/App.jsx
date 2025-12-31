import { useState } from 'react'
const Button =({onClick,text})=> <button onClick={onClick}>{text}</button>





const StatisticLine =({text,value})=>
(
  <table>
  <thead> 
    <tr>
    <th>{text}</th>
    <th>{value}</th>
   </tr>
   </thead>
  
  </table>
)



const Statistics=({good , bad , neutral})=>{
const total = good+bad+neutral;
const average = (good-bad)/total
const postivePercentage =  (good/total)*100;
if(total>=1){
return(
  <div>
 <p>statistics</p>

      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text ="bad" value={bad}/>
      <StatisticLine text ="all" value={total}/>
      <StatisticLine text ="average" value={average}/>
      <StatisticLine text ="Postive" value={`${postivePercentage} %`}/>
</div>

)
}
else{
  return(
    <div>
      <p> No feedback given</p>
     </div>
  )
}
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  return (
    <div>
 
        <p>give feedback</p>
         
        <Button onClick={()=>setGood(good+1)} text="good"/>
        <Button onClick={()=>setNeutral(neutral+1)} text="neutral"/>
        <Button onClick={()=>setBad(bad+1)} text="bad"/>
         <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App