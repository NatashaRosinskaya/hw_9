document.write('<h1>TODO LIST</h1>')
let toDO = function Todo(){ 
    let todoArr = []
    this.create = function (){
        
        
        let htmlTodo = `
                        <div class = "todo_option">
                        <input type = "text" id="todo__input">
                        </div>

                        <div class="todos">
                        <ul id="todos__lists">

                        </ul>
                        </div>`

        let element = document.querySelector('.todo__list')
        element.innerHTML=htmlTodo

        let input = document.querySelector('#todo__input')
        input.addEventListener('keyup', (event)=>{
           
            if(event.keyCode == '13'){ 
            this.add(event.target.value)
        
            event.target.value=""
            }  

      })   

}

        this.add = function(task){
            let todoTask = {
                todo: task,
                flag: true
            }
    
        todoArr.push(todoTask)
        this.show()
        }
        
        this.delete =function(id){
            todoArr.splice(id, 1);
            this.show()
        }
   
        this.correct = function(){ //редакция работает только с первым элементом списка
            let correctInf = prompt ('Отредактируйте информацию');
            todoArr = []
            this.add (correctInf)

        }
         
        this.checked = function(id){ //?? 
            if (todoArr[id]){
                todoArr[id].flag = true;
                this.show()
            } console.log(todoArr)
        } 

        this.show = function(){
            let elementUl = document.querySelector('#todos__lists')
            elementUl.innerHTML = "" 

            todoArr.forEach((item,index)=>{
                let li = document.createElement('li')
                li.classList.add('todo__li')
                
                li.innerHTML=` <input type="checkbox" id="check"><label>${item.todo}</label>
                                          <br> <button class = "btn__correct" id="${index}">correct</button>
                                          <button class = "btn__delete" id="${index}">delete</button>`
                
                elementUl.appendChild(li)
            }) 

            
            let correctBtn = document.querySelectorAll('.btn__correct')

            correctBtn.forEach((btn, index)=>{
                btn.addEventListener('click', (event)=>{
                    let id  = +event.target.id
                    this.correct(id)
                })
            }) 


            let deleteBtn = document.querySelectorAll('.btn__delete')

            deleteBtn.forEach((btn, index)=>{ 
                btn.addEventListener('click', (event)=>{
                    let id  = +event.target.id
                    this.delete(id)
                })
            })  
            
           
           

            let todoChecked = document.querySelectorAll('.todo__li') //??
            todoChecked.forEach((item, index)=>{ 
                item.addEventListener('click', (event)=>{
                    let id  = +event.target.id
                    this.checked(id)
                }) 
            }) 
        }
}
window.addEventListener('load', ()=>{
    let todo = new toDO()
    todo.create()
})

let style = document.createElement('style');
style.innerHTML =`
    *{
        padding: 0;
        margin: 0;
    }

    .todo__list{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #EAD39C;
        width: 300px;
        border: 2px solid #662225;
        width: 500px;
        margin: 0 auto;
        
    }
    .todo_option input{
        background-color: #662225;
        color: #EAD39C;
        font-family: Georgia, serif, Arial;
        font-size: 16px;
    }
   
    .todos li{
        color: #662225;
        font-family: Georgia, serif, Arial;
        font-size: 16px;
        list-style: none;
    }
    #check{
        background-color: #662225;
        color: #EAD39C;
        margin-right: 5px;
    }
    h1{
        background-color: #EAD39C;
        font-size: 24px;
        margin: 0 auto;
        text-align: center;
        color: #662225;
        width: 500px;
        margin-bottom: 20px;
        border: 2px solid #662225;
    }
    
    .todos li button{
        cursor: pointer;
        text-transform: uppercase;
        border: 2px solid #662225;
        font-size: 12px;
        font-family: Georgia, serif, Arial;
        background-color: #EAD39C;
        width: 60px;
        padding: 2px 0;
    }

    .todos li button:hover{
        opacity: 0.5;
    }    
    `
    document.head.appendChild(style);
