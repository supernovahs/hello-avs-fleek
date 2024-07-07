import {ethers} from "ethers";
import createNewTask from "./create_new_task.js";
import fetch from "node-fetch"
// import register_as_operator from "./register_operator.js";
// import sign_and_respond_to_task from "./sign_and_respond_to_task.js";
import HelloWorldservicemanager from "./abis/HelloWorldServiceManager.json" assert {type: 'json'};
const RunAvs = async function(rpc_url, helloworldservicemanager) {
    console.log("1");
    let provider = new ethers.providers.JsonRpcProvider(rpc_url);

    let HelloWorld = new ethers.Contract(helloworldservicemanager,HelloWorldservicemanager.abi,provider);
    HelloWorld.on("NewTaskCreated",async (
        task_index,
        task_name,
        task_created_block
    ) =>{
        console.log("taskindex",task_index);
        console.log("task name ",task_name);
        console.log("task created block ",task_created_block);
    
    });

      let data = JSON.stringify({
        "taskIndex": task_index,
        "taskCreatedBlock": task_created_block,
        "taskName": task_name
      });
      
      let config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      };
      
      fetch('https://big-greece-straight.functions.on-fleek.app', config)
        .then(response => response.json())
        .then(data => {
          console.log(JSON.stringify(data));
        })
        .catch(error => {
          console.error('Error:', error);
        });

}


const main = async () => {
    await createNewTask();
    let helloworldservicemanager = "0x3361953F4a9628672dCBcDb29e91735fb1985390";
    let rpc_url = "https://ethereum-holesky-rpc.publicnode.com";
    const privateKey = '0xdcf478a675411e0d970ab1a8dc36221cd5f3641c98b42b0df4f6c4eadca18f66';
    return await RunAvs(rpc_url, helloworldservicemanager);
}


main()