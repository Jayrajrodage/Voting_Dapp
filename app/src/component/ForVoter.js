  import React from 'react'
  import CountDown from 'react-countdown';
import { TailSpin } from "react-loader-spinner"
  import { useContext,useEffect,useState } from "react"
  import { AppState } from '../App'

  const ForVoter = () => {
    const App = useContext(AppState)
    useEffect(() => {
      setTimeout(() => {
        App.setError(null);
        App.setMessage(null);
      }, 9000);
    }, [App.Error, App.Message]);
    return (
      <div className=" flex flex-col justify-center items-center text-black">
        {/* {deadline} */}
        {App.deadline>0? (
        <div className=' top-0 left-0 flex items-center mt-5'>
          <h1 className='font-bold text-3xl text-black mr-4'>Deadline -:</h1>
          <CountDown className='font-bold text-2xl text-black' date={App.time + ((App.deadline)*3600) * 1000} />
          </div>
        ) : (
          // Deadline is over
          <p className="font-bold mt-5 text-3xl text-black">Deadline is over</p>
        )}
        {/* Vote To */}
        <div className="flex  w-1/3 justify-between items-center mt-5">
          <input value={App.ID} onChange={(e) => App.setID(e.target.value)}  type={"number"} className="w-4/5 ml-6 p-3 bg-black border-2 border-white text-white border-opacity-80 bg-opacity-80 outline-none rounded-lg" placeholder="Enter Candidates ID" />
        </div>
        {/* Button */}
        {App.TxLoading ?
          <div className="flex mt-4 w-1/2 text-white cursor-pointer justify-center items-center p-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-600 hover:to-gray-900 border-2 border-blue-900 border-opacity-80 text-xl font-medium rounded-lg">
            <TailSpin
              width={30}
              height={46}
              color={'white'}
            />
          </div>
          :
          <div onClick={App.Votefunc} className="flex mt-4 w-1/2 text-white cursor-pointer justify-center items-center p-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-600 hover:to-gray-900 border-2 border-white border-opacity-80 text-xl font-medium rounded-lg">
            Vote
          </div>
        }
        {/* Error & Message */}
        {App.Error && <p className="text-red-600 text-lg mt-2 px-3">{App.Error.toString()}</p>}
        {App.Message && <p className="text-green-600 text-lg mt-2 px-1">{App.Message.toString()}</p>}
      </div>
    )
  }

  export default ForVoter