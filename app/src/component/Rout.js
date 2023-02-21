import React, { useState} from 'react'
import Main from './ForVoter'
import ForChairperson from './ForChairperson';
import Candidates from './Candidates';
const Rout = () => {
    const [route, setRoute] = useState('main');
    return (
        <div className='w-full mt-12 flex flex-col justify-center items-center'>
            <div className='flex justify-around text-log font-medium items-center bg-white bg-opacity-90 border-2 border-b-0 text-black border-opacity-50 border-white rounded-t-lg w-1/2'>
                {/* Main */}
                <li onClick={() => setRoute('main')} className={`list-none cursor-pointer py-2 w-1/4 ${route === 'main' ? "bg-white bg-opacity-85 font-bold text-xl" : "bg-white bg-opacity-80 text-xl"} text-center rounded-lg hover:bg-white hover:bg-opacity-85`}>
                    Vote
                </li>
                {/* Candidates */}
                <li onClick={() => setRoute('Candidates')} className={`list-none cursor-pointer py-2 w-1/4 ${route === 'Candidates' ? "bg-white bg-opacity-85 font-bold text-xl" : "bg-white bg-opacity-80 text-xl"} text-center rounded-lg hover:bg-white hover:bg-opacity-85`}>
                    Candidates
                </li>
                {/* chiarperson */}
                <li onClick={() => setRoute('Chairperson')} className={`list-none cursor-pointer py-2 w-1/4 ${route === 'Chairperson' ? "bg-white bg-opacity-85 font-bold text-xl" : "bg-white bg-opacity-80 text-xl"} text-center rounded-lg hover:bg-white hover:bg-opacity-85`}>
                    Chairperson
                </li>
            </div>
            {/* Screen */}
            <div className='bg-white bg-opacity-90 pb-5 overflow-y-auto border-2 border-t-0 shadow-lg border-opacity-50 border-white rounded-b-lg w-1/2'>
                {(() => {
                    if (route === 'main') {
                        return <Main />
                    } else if (route === 'Candidates') {
                        return <Candidates />
                    } else if (route === 'Chairperson') {
                        // if (App.Address === "0x6bf772ac6a47c286a72b9c64e97ca1bf9843aa53") { 
                        return <ForChairperson />
                    // }
                    }
                })()}
            </div>

        </div>
    )
}

export default Rout