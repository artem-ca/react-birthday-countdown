import './style.scss'
import React, { useState, useRef, useEffect } from 'react'

function App() {
    const nextYear = new Date().getFullYear() + 1
    const birthday = new Date(`08/24/${nextYear}`)

    const second = 1000
    const minute = 60000
    const hour = 3600000
    const day = 86400000

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const countDown = () => {
        interval = setInterval(() => {
            const today = new Date()
            const timeSpan = birthday - today

            const days = Math.floor(timeSpan / day)
            const hours = Math.floor((timeSpan % day) / hour)
            const minutes = Math.floor((timeSpan % hour) / minute)
            const seconds = Math.floor((timeSpan % minute) / second)

            if (timeSpan < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1)
    }

    useEffect(() => {
        countDown()
        clearInterval(interval.current)
    })

    return (
        <section className='App'>
            <div className='main'>
                <h1 className='main-heading'>Countdown to my birthday:</h1>

                <div className='timer'>
                    <div className='timer-num-measure'>
                        <p className='timer-number'>{timerDays}</p>
                        <p className='timer-measure'>Days</p>
                    </div>

                    <div className='timer-num-measure'>
                        <p className='timer-number'>{timerHours}</p>
                        <p className='timer-measure'>Hours</p>
                    </div>

                    <div className='timer-num-measure'>
                        <p className='timer-number'>{timerMinutes}</p>
                        <p className='timer-measure'>Minutes</p>
                    </div>

                    <div className='timer-num-measure'>
                        <p className='timer-number'>{timerSeconds}</p>
                        <p className='timer-measure'>Seconds</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App
