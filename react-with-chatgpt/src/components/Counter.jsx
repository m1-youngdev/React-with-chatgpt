import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0)
  return (
    <div className='text-center mt-[20px] border border-red-500' >
        <h2> Count: {count}</h2>
        <button onClick={increment} className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium'>Increase</button>
        <button onClick={decrement} className='m-[20px] bg-blue-600 w-[80px] h-[40px] rounded'>Decrease</button>
        <button onClick={reset} className='m-[20px] bg-blue-600 w-[80px] h-[40px] rounded'>Reset</button>
    </div>
  )
}

export default Counter