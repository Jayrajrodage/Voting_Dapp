import React, { useContext,useEffect} from 'react'
import { AppState } from "../App";
const Candidates = () => {
  const App = useContext(AppState);
  useEffect(() => {
  const getProposals = async () => {
    try {
      const proposals = await App.ElectionContract.getProposals()
        App.setData(proposals)
    } catch (error) {
      App.setError(error);
    }
      };
      getProposals();
    }, []);
  
  return (
    <div className='flex flex-col items-center justify-center p-3 text-white'>
      {App.data && App.data?.length !== 0 ?
        App.data.map((e,id) => {
          return (
            <div className={`bg-black rounded-lg bg-opacity-60 border-2 border-blue-900 border-opacity-80 w-4/5 mt-2`}>
              <div className="flex w-full items-center justify-center rounded-t-lg">
                <div className="w-full py-2 px-2">
                  <p  className="text-xl font-mono"> candidaID: {id}</p>
                  <p  className="text-xl font-mono">candidatenames: {e.name}</p>
                  <p  className="text-xl font-mono">voteCount: {e.voteCount.toString()}</p>
                </div>
              </div>
            </div>
          )
        })
        :
        <div className={`bg-black rounded-lg bg-opacity-60 border-2 border-blue-900 border-opacity-80 w-4/5 mt-2`}>
          <div className="flex w-full items-center justify-center rounded-t-lg">
            <div className="w-full py-2 px-2">
              <p className="text-xl font-mono">No candidates found.</p>
            </div>
          </div>
        </div>  
      }
    </div>
  )
}

export default Candidates



