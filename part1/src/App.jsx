import { useState } from 'react'


const Statistics=({good , bad , neutral})=>{
const total = good+bad+neutral;
const average = (good-bad)/total
const postivePercentage =  (good/total)*100;
if(total>=1){
return(
  <div>
 <p>statistics</p>
       <li>good {good}</li>
       <li>neutral {neutral}</li>
       <li>bad {bad}</li>
       <li>all {total}</li>
       <li>average {average}</li>
       <li>postive {postivePercentage} %</li>
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
         
         <button onClick={()=>setGood(good+1)} >good</button>
         <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
         <button onClick={()=>setBad(bad+1)}>bad</button>
         <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App