import React, { useEffect, useState } from "react";

export default function Clock(props) {
    

const [hourState, setHourState] = useState();
  const [minState, setMinState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setMinState(date.getMinutes());
      setHourState(date.getHours());
    }, 1000);
  }, []);

    return (
        <>
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="">{setHourState}</div>
                    <div className="">{setMinState}</div>
                </div>
        </>
    )
    }
