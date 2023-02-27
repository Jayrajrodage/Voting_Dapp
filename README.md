# Voting dapp
This project is a web-based voting application that allows a chairperson to create and manage candidate data, and voters to cast their votes. The application uses React for the front-end, Solidity for the smart contract that runs on the Ethereum blockchain, and Ether.js to interact with the blockchain.

# Features

Chairperson can create and manage candidate data, including candidate ID, name, and vote count.

Voters can view the list of candidates and their information.

Voters can cast their vote for a candidate using their unique ID.

Chairperson can clear the voting data after the deadline is completed to start another voting.

# Requirements

Node.js v12 or later

MetaMask browser extension

Installation

Clone the repository.

Install dependencies using npm install.

Compile and deploy the smart contract to your local blockchain using Remix.IDE:

Start the development server using npm start.

# Usage

Make sure MetaMask is connected to your local blockchain and has an account with some ether.

Access the application at http://localhost:3000.

Chairperson should create the candidate data by clicking the "Create Candidate" button and filling in the form.

Voters can view the list of candidates and their information on the home page.

Voters can cast their vote for a candidate using their unique ID by clicking the "Vote" button and entering their ID.

After the deadline is completed, the chairperson can clear the voting data by clicking the "Clear Data" button.
