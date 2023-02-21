import {useEffect, useState,createContext } from 'react';
import './App.css';
import Login from './component/Login';
import Rout from './component/Rout';
import Header from './component/Header';
import { ethers } from 'ethers';
import Election from "./contract/Election.json"
const AppState = createContext();
function App() {
  const { ethereum } = window;
  const ElectionContractAddress = "0x9923aB9F67A8869A9aE772Fa5F0fadb9A7935590"
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const ElectionContract = new ethers.Contract(ElectionContractAddress, Election.output.abi, signer);
  const [login, setLogin] = useState(false);
  const [Address, setAddress] = useState("");
  const [data, setData] = useState();
  const [Error, setError] = useState('');
  const [Message, setMessage] = useState('');
  const [ID, setID] = useState('');
  const [TxLoading, setTxLoading] = useState(false);
  const [candidatenames, setcandidatenames] = useState('');
  const [time, settime] = useState(() => {
    const storedValue = localStorage.getItem('time');
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  useEffect(() => {
    localStorage.setItem('time', JSON.stringify(time));
  }, [time]);
  const [deadline, setDeadline] = useState(() => {
    const storedValue = localStorage.getItem('deadline');
    return storedValue ? JSON.parse(storedValue) : 0;
  });
  useEffect(() => {
    localStorage.setItem('deadline', JSON.stringify(deadline));
  }, [deadline]);

  useEffect(() => {
    ethereum.on("chainChanged", async (chainId) => {
      if (chainId === "0x5") {
        setLogin(true)

      } else {
        setLogin(false);
      }
    })

    ethereum.on("accountsChanged", async (accounts) => {
      setAddress(accounts[0])
    })
  })
  const Votefunc = async () => {
    setTxLoading(true);
    try {
        const tx = await ElectionContract.vote(ID);
        await tx.wait();
        setMessage("Voted Sucessfull !")
        setID('');
    } catch (error) {
      if(error.message === "Deadline Passed"){
        setError("Deadline Passed")
      }
      else {
        setError("Something went wrong")
      }
    }
    setTxLoading(false)
  }
  return (
    <AppState.Provider value={{
      login, setLogin, Address, setAddress,
      Error, setError, Message, setMessage, Votefunc,
      ID, setID, ElectionContract, candidatenames, setcandidatenames,
      deadline, setDeadline, data, setData, 
      TxLoading, setTxLoading, time, settime,
    }}>
      <div className="min-w-full h-screen">
        {login ?
          <div className="min-w-full min-h-full">
            {/* Main Application */}
            <Header />
            <Rout />
          </div>
          :
          <Login />
        }
      </div>
    </AppState.Provider>
  );
}

export default App;
export { AppState }


