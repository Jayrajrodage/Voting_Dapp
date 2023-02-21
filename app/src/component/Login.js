import React, { useState, useContext } from 'react'
import { AppState } from '../App'

const Login = () => {
    const App = useContext(AppState)

    const { ethereum } = window;
    const [error, setError] = useState('');

    const LoginWallet = async () => {
        try {
            await ethereum.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] })
            const accounts = await ethereum.request({ method: "eth_requestAccounts" })
            App.setAddress(accounts[0])
            const chainId = await ethereum.request({ method: "eth_chainId" })
            if (chainId === "0x5") {
                App.setLogin(true)
            }
            else {
                setError("Connect With Goerli Testnet")
            }
        } catch (error) {
            setError(`"${error.message}"`)
        }
    }

    return (
        <div className='min-w-full h-4/5 flex justify-center flex-col items-center'>
            <img className='h-1/6' src='Vote.png' /> <h1 className=' font-bold text-3xl text-white'>Welcome to Voting Dapp</h1>
            <div className='w-1/3 h-40 mt-4 bg-white bg-opacity-80 p-2 rounded-3xl shadow-lg border-opacity-40 border-4 border-black flex flex-col justify-center items-center'>
                <h1 className='text-black text-3xl font-medium text-center'>Login</h1>
                {ethereum != undefined ?
                    <div onClick={LoginWallet} className='flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-white-800 cursor-pointer bg-black text-white mt-4 rounded-2xl justify-center items-center py-1 px-2'>
                        Connect With Metamask
                        <img className='h-10' src='metamask.png' alt='metamask' />
                    </div>
                    :
                    <div className='flex flex-col justify-center items-center'>
                        {/* install Metamask */}
                        <a target={"_blank"} href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                            <div className='flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-blue-800 cursor-pointer bg-white text-white mt-4 rounded-lg justify-center items-center py-1 px-2'>
                                Install Metamask
                                <img className='h-10' src='metamask.png' />
                            </div>
                        </a>
                        <p className='text-white text-lg mt-2'>Login Required Metamask Extension</p>
                    </div>
                }
                <p className='text-black text-lg mt-2'>{error}</p>
            </div>
        </div>
    )
}

export default Login