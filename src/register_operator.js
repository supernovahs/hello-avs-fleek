import { ethers } from "ethers" ;
import  delegationmanagerabi from"./abis/DelegationManager.json";

async function register_as_operator() {
    let delegation_manager_address = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
    let rpc_url = "https://ethereum-holesky-rpc.publicnode.com";
    let provider = new ethers.providers.JsonRpcProvider(rpc_url);

    const privateKey = '0xdcf478a675411e0d970ab1a8dc36221cd5f3641c98b42b0df4f6c4eadca18f66';
    const wallet = new ethers.Wallet(privateKey, provider);

    const delegation_manager_contract = new ethers.Contract(delegation_manager_address,delegationmanagerabi.abi,wallet);

    console.log("Delgatinmanager Contract", delegation_manager_contract);

    const tx1 = await delegation_manager_contract.registerAsOperator({
        earningsReceiver: wallet.address,
        delegationApprover: "0x0000000000000000000000000000000000000000",
        stakerOptOutWindowBlocks: 0
    }, "");

    // await tx1.wait();
    return({tx: tx1});
}

export const main = async () => {
    return await register_as_operator();
}
