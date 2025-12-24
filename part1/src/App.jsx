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
  console.log(props);
  return(
    <div>
      <Part part = {props.part[0].name} exercise={props.part[0].exercises}/>
       <Part part = {props.part[1].name} exercise={props.part[1].exercises}/>
        <Part part = {props.part[2].name} exercise={props.part[2].exercises}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
   const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } 
  return (
    <>
    {/* <div>
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
    </div> */}
    <div>
       <Header course={course}/>
        <Content part={[part1,part2,part3]}/>
       {/* <Total/>  */}
    </div>
    </>
  )
}

export default App