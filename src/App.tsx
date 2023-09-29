import { useSelector,useDispatch } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"

function App() {
  const {count}=useSelector((state:RootState)=>state.counter)
  const dispatch=useDispatch()
  return (
   <div>
    <div className="flex gap-6">
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={()=>{dispatch(increment())}}>
        Increment
      </button>
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={()=>{dispatch(incrementByAmount(10))}}>
        Increment by value
      </button>
      <div>{count}</div>
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
     onClick={()=>{dispatch(decrement())}}
      >Decrement</button>
    </div>
   </div>
  )
}

export default App
