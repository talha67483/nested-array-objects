let todos:string[]=[];

function addTodo(task:string){
     todos.push(task)
    console.log(todos);
    

}

function showToDoList (){
    todos.forEach((val,idx)=>{
        // console.log(val,idx);
        console.log(` ${idx+1}: ${val}`);
        

        
    })

}
addTodo("coding")
addTodo("sleeping")
addTodo('eat')
showToDoList()

