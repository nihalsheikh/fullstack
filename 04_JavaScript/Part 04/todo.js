console.log("****** Todo Started ******");
console.log("**************************");

let todo = []; // saving all the todo tasks to this array

let req = prompt("make a request");
console.log(`Requested: ${req}`);

while(true) {
    switch(req){
        case "quit" :
            console.log("------# Exiting Todo #------");
            console.log("----------------------------");
            break;

        case "list" :
            console.log("------# Listing Todo #------");
            console.log(
                todo.length > 0 ? todo : "No Todos"
            );
            break;

        case "add" :
            let task = prompt("Add the task");
            todo.push(task);
            console.log("------# Task Added #------");
            console.log("---------------------------")
            break;

        case "delete" :
            let del = prompt("Delete Task Number: ");
            todo.splice(del-1, 1);
            console.log("------# Task Deleted #------");
            console.log("----------------------------");
            break;

        default :
            console.log(alert("------# Wrong Request #------"));
            break;
    }
}
