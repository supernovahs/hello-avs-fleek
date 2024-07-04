
const ethers = require("ethers") ;
const  delegationmanagerabi =  require("./abis/DelegationManager.json");


async function  register_as_operator() {
    let delegation_manager_address = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
    let rpc_url = "https://ethereum-holesky-rpc.publicnode.com";
    let provider = new ethers.providers.JsonRpcProvider(rpc_url);

const privateKey = '0xdcf478a675411e0d970ab1a8dc36221cd5f3641c98b42b0df4f6c4eadca18f66';
const wallet = new ethers.Wallet(privateKey, provider);

  

}

async function main(){
    register_as_operator().await;

}

main();