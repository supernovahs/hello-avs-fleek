import { ethers } from "ethers" ;
import helloworldabi from "./abis/HelloWorldServiceManager.json";

async function createNewTask(task_name,hello_world_contract_address) {

    let rpc_url = "https://ethereum-holesky-rpc.publicnode.com";
    let provider = new ethers.providers.JsonRpcProvider(rpc_url);

    const privateKey = '0xdcf478a675411e0d970ab1a8dc36221cd5f3641c98b42b0df4f6c4eadca18f66';
    const wallet = new ethers.Wallet(privateKey, provider);

    const hello_world_contract = new ethers.Contract(hello_world_contract_address,helloworldabi.abi,wallet);

    console.log("Hello world Contract", hello_world_contract);

    const tx1 = await hello_world_contract.createNewTask(task_name);

    // await tx1.wait();
    return({tx: tx1});
}

export const main = async () => {
    let hello_world_contract_address = "0x3361953F4a9628672dCBcDb29e91735fb1985390";
    let task_name = generateRandomName();
    return await createNewTask(task_name,hello_world_contract_address);
}


// Function to generate random names
function generateRandomName() {
    const adjectives = ['Quick', 'Lazy', 'Sleepy', 'Noisy', 'Hungry'];
    const nouns = ['Fox', 'Dog', 'Cat', 'Mouse', 'Bear'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomName = `${adjective}${noun}${Math.floor(Math.random() * 1000)}`;
    return randomName;
  }