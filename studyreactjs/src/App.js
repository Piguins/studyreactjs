import { useLayoutEffect, useState } from "react";

function App() {
const [job, setJob] = useState ('')
const [jobs, setJobs] = useState([])

const HandleSubmit = () => {
setJobs = (prev => [...prev, job])
setJob = ('')
}
  return (
    <div> 
      <input
      value={job}
      onChange={e => setJob(e.target.value)}/>
      <button onClick={HandleSubmit}>Add</button>
    <ul>
      {jobs.map((job, index) => (
      <li key={index}>{job}</li>))}
    </ul>
    </div>
  )
}

export default App;
