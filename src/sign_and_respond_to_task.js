
import {ethers} from "ethers";
import helloworldabi from "./abis/HelloWorldServiceManager.json" assert {type: 'json'};
import createNewTask from "./create_new_task.js";
async function sign_and_respond_to_task(hello_world_contract_address,taskIndex,taskCreatedBlock,taskName) {


    let rpc_url = "https://ethereum-holesky-rpc.publicnode.com";
    let provider = new ethers.providers.JsonRpcProvider(rpc_url);
    
    const privateKey = '0xdcf478a675411e0d970ab1a8dc36221cd5f3641c98b42b0df4f6c4eadca18f66';
    const wallet = new ethers.Wallet(privateKey, provider);
    
    const message = `Hello, ${taskName}`;
    const messageHash = ethers.utils.solidityKeccak256(["string"], [message]);
    const messageBytes = ethers.utils.arrayify(messageHash);
    const signature = await wallet.signMessage(messageBytes);
    console.log(
        `Signing and responding to task ${taskIndex}`
    );

    const hello_world_contract = new ethers.Contract(hello_world_contract_address,helloworldabi.abi,provider);
    
    const tx = await hello_world_contract.respondToTask(
        { name: taskName, taskCreatedBlock: taskCreatedBlock },
        taskIndex,
        signature
    );
    // await tx.wait();
    return {tx} 
}
    
export const main = async (req) =>{
    const {taskIndex,taskCreatedBlock,taskName} = req.body;
    let hello_world_contract_address = "0x3361953F4a9628672dCBcDb29e91735fb1985390";
    return await sign_and_respond_to_task(hello_world_contract_address,taskIndex,taskCreatedBlock,taskName);
}