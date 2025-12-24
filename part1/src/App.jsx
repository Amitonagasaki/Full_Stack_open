const Part =(props)=>{
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Header = (props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content =(props)=>{
  return(
    <div>
      <Part part = {props.part[0].part} exercise={props.part[0].exercise}/>
       <Part part = {props.part[1].part} exercise={props.part[1].exercise}/>
        <Part part = {props.part[2].part} exercise={props.part[2].exercise}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content1 =[{part:"Fundamentals of React", exercise:10},{part:"Using props to pass data", exercise:7},{part:"State of a component", exercise:14},]
  return (
    <>
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
    <div>
       <Header course={course}/>
        <Content part={content1}/>
       {/* <Total/>  */}
    </div>
    </>
  )
}

export default App