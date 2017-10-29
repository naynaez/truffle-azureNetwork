module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    azureNetwork: {
      host: "geth76ne4.southeastasia.cloudapp.azure.com", 
      network_id: 10101010,
      port: 8545
    }
  }
};
