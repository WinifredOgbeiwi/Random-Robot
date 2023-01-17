import { createContext, useState, useEffect } from 'react'

//import robotData from '../data/robotdata' //this is when I am getting fata from the dummy data in the data file

const RobotContext = createContext()

export const RobotProvider = ({children}) => {
   // const [robots, setRobot] = useState(robotData) //this is how to set the state from the data coming from the dummy datas in the data file.


    const [robots, setRobot] = useState([])
    const [data, setData] = useState(null) //this holds the default data from the api as a fallback when there is no item in the search vs when searching for an item in the search box and going backwards while typing.

    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setRobot(data) // setting to the global state
                setData(data) //data coming from the api directly
            })
    }, [])

    const onSearchChange = (e) => {
            const filteredRobots = data.filter(robot =>{
                return robot.name.toLowerCase().includes(e.target.value.toLowerCase())})
            setRobot(filteredRobots);
            if(e.target.value.length<1){
                setRobot(data);
            }
    }

    return <RobotContext.Provider value={{
        robots,
        onSearchChange,
    }}>
        {children}
    </RobotContext.Provider>
}


export default RobotContext