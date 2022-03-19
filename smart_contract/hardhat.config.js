require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.13',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Dmm9G3mnq4GsMJuBJZ8PlhhDzNiBEFpH',
      accounts: ['195d225206107495fb8e054f86e98e0c0fb79fb87f19d5a350646ee4753e6dc5']
    }
  }
}