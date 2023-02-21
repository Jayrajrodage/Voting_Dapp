import React from 'react'
import { useContext, useState ,useEffect} from 'react'
import { AppState } from '../App'
import { TailSpin } from 'react-loader-spinner';
const ForChairperson = () => {
  const App = useContext(AppState);
  const [TxLoading, setTxLoading] = useState(false);
  const [TxLoading2, setTxLoading2] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      App.setError(null);
      App.setMessage(null);
    }, 9000);
  }, [App.Error, App.Message]);
  const CreateCandidates = async () => {
    setTxLoading(true);
    try {
      const stringArray = App.candidatenames;
      const actualArray = stringArray.split(',');
      const actualdeadline = (App.deadline * 3600);
      const tx = await App.ElectionContract.createCandidate(actualArray, actualdeadline);
      await tx.wait();
      App.settime(Date.now())
      App.setMessage("Candidates Created Sucessfull !")
      App.setcandidatenames('');
    } catch (error) {
      App.setError(error.message)
    }
    setTxLoading(false)
  } 
  const clear = async () => {
    setTxLoading2(true);
    try {
      const tx2 = await App.ElectionContract.clear();
      await tx2.wait();
      App.setDeadline();
      App.settime(0)
    } catch (error) {
      App.setError(error.message);
    }
    setTxLoading2(false)
  }
  return (
    <div className="flex flex-col justify-center items-center text-black">

      {/* Vote To */}
      <div className="flex w-1/2 justify-between items-center mt-5">
        <input onChange={(e) => App.setcandidatenames(e.target.value)} value={App.candidatenames} type={"text"} className="w-4/5 ml-6 p-3 bg-black border-2 border-white text-white border-opacity-80 bg-opacity-80 outline-none rounded-lg" placeholder="Candidates names with comma "/>
      </div>
      {/* {deadline} */}
      <div className="flex  w-1/2 justify-between items-center mt-5">
        <input onChange={(e) => App.setDeadline(e.target.value)} value={App.deadline} type={"number"} className="w-4/5 ml-6 p-3 bg-black border-2 border-white text-white border-opacity-80 bg-opacity-80 outline-none rounded-lg" placeholder="deadline in hours" />
      </div>
      {/* Create Candidates */}
      {TxLoading ?
        <div className="flex mt-4 w-1/2 text-white cursor-pointer justify-center items-center p-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-600 hover:to-gray-900 border-2 border-blue-900 border-opacity-80 text-xl font-medium rounded-lg">
          <TailSpin
            width={30}
            height={46}
            color={'white'}
          />
        </div>
        :
        <div onClick={CreateCandidates} className="flex mt-4 w-1/2 text-white cursor-pointer justify-center items-center p-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-600 hover:to-gray-900 border-2 border-white border-opacity-80 text-xl font-medium rounded-lg">
          Create Candidates
        </div>
      }
      {/* clear data */}
      <div className="flex w-1/2 ml-10 text-xl justify-between items-center mt-4 font-bold">Click below button to clear data</div>
      {TxLoading2 ?
        <div className="flex mt-4 w-1/2 text-white cursor-pointer justify-center items-center p-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-600 hover:to-gray-900 border-2 border-blue-900 border-opacity-80 text-xl font-medium rounded-lg">
          <TailSpin
            width={30}
            height={46}
            color={'white'}
          />
        </div>
        :
        <div onClick={clear} className="flex mt-4 w-1/2 text-white cursor-pointer justify-center items-center p-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-600 hover:to-gray-900 border-2 border-white border-opacity-80 text-xl font-medium rounded-lg">
          Clear
        </div>
      }
      {/* Error & Message */}
      {App.Error && <p className="text-red-600 text-lg mt-2 px-3">{App.Error.toString()}</p>}
      {App.Message && <p className="text-green-600 text-lg mt-2 px-1">{App.Message.toString()}</p>}
    </div>
  )
}

export default ForChairperson;