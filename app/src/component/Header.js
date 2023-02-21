import React, { useContext, useState } from "react";
import { AppState } from "../App";

const Header = () => {
    const { ethereum } = window;
    const App = useContext(AppState);
    return (
        <div className="w-full  pt-4 flex flex-wrap justify-between items-start"> {/* {//h-1/4} */}
            
            {/* Logo */}
            <div class="flex items-start">
                <img class="h-12 ml-2" src="Vote.png" alt="Voting" />
                <h1 class="font-extrabold text-3xl text-white ml-2 h-18">Voting Dapp</h1>
            </div>
            <div className="flex justify-between items-start">
                {/* Wallet */}
                <div className="text-xl mr-2 font-sans border-opacity-60 border-2 border-white font-bold cursor-pointer bg-white bg-opacity-90 px-4 py-2 text-black  rounded-xl flex justify-between items-center">
                    {App.Address.slice(0, 5)}...{App.Address.slice(38)}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="ml-2 bi bi-wallet2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;