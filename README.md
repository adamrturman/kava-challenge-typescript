# Kava Data Display Challenge

## Background 
KAVA tokens can be 'staked', which means that they are bonded to a particular validator that participates in consensus. When that validator receives KAVA tokens as rewards for validating transactions, those rewards are passed on to the staker. In JSON, each delegation looks like this: 

`{ 
"delegator_address": <kava address: string>, 
"validator_address": <validator address: string>, 
"shares": <number shares: decimal>, 
}`

The complete state of the kava blockchain, as JSON, can be found at: 
[https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json](https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json)

## Goals

1. Calculate the median number of shares per delegation 
2. Calculate the mean number of shares per delegation 
3. Calculate the kava address(es) that has the most number of delegations 
4. Produce a graph that shows the distribution of shares per delegation 


## Set Up Instructions
- Fork and clone this repository.
- Once inside the directory, install dependencies with `npm install`.
- Run the development server with `npm start`.
- The application will run on `localhost` in the browser.

## Technologies Used
- React
- Typescript
- HTML5
- CSS3
- Bootstrap
- React-Chart.js 2

## Demo
![Kava Demo](https://user-images.githubusercontent.com/67024033/106468118-262dae80-6463-11eb-8321-181e84aaa1e6.gif)

## Screenshots

#### Landing Page
![Homepage](https://user-images.githubusercontent.com/67024033/106222896-09188780-61a6-11eb-8f9c-8c4b3591b5c5.png)

#### Data
![Data](https://user-images.githubusercontent.com/67024033/106222974-32391800-61a6-11eb-9389-00b7228babc4.png)


## Future Improvements
- Caching the data from API for quicker rendering
- Unit testing
- Further styling
