import React, { useEffect, useState } from 'react'

function Timer() {
    const [DisplayTimer, setDisplayTimer] = useState(false);
    const [Timer, setSeconds] = useState(0);
    const [Mins, setMins] = useState(0);
    const [Hours, setHours] = useState(0);

    useEffect(() => {
        let intervalId;
        if (DisplayTimer === true) {
            intervalId = setInterval(() => {
                setSeconds(Timer + 1);
            }, 1000);
        }
        else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [DisplayTimer, Timer])

    if (Timer === 59) {
        setSeconds(0);
        if (Timer) {
            setMins(Mins + 1)
        }
        if (Mins === 59) {
            setMins(0)
            setHours(Hours + 1)
        }
    }
    let start = () => {
        console.log('start button');
        setDisplayTimer(true)
    }



    let stop = () => {
        console.log('stop button')
        setDisplayTimer(false)
    }

    let reset = () => {
        console.log('reset button')
        setDisplayTimer(false)
        setSeconds(0)
        setMins(0)
        setHours(0)
    }

    return (
        <div>
            <div className='timer'>
                {Hours}hr / {Mins}min / {Timer}sec
            </div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer