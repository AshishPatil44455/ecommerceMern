import { useEffect, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar"


const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
   
   


const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);



    useEffect(() => {
        let interval: any;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isRunning]);

  return (
    <div className="adminContainer">
    <AdminSidebar />
    <main className="dashboardAppContainer">
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2 className="time">{formatTime(time)}</h2>
                <button onClick={() => setIsRunning((prevIsRunning) => !prevIsRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={() => setTime(0)}>Reset</button>
            </div>
        </section>
    </main>
    
    
    </div>
  )
}

export default Stopwatch