import React from 'react'
import { FaHourglassStart } from 'react-icons/fa6'

export default function loading() {
    return (
        <div className="flex w-screen h-screen animate-fadeIn flex-col items-center justify-center rounded-2xl bg-light-button text-light-accent dark:bg-dark-button dark:text-dark-accent">
            <FaHourglassStart
            title="loading"
            className={`h-96 animate-hourglass text-5xl font-medium text-light-accent dark:text-dark-accent`}
            />
        </div>
    )
}
