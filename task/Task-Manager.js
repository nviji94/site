const menu=document.querySelector('.menu')
const menuList=document.querySelector('nav ul')
menu.addEventListener('click' ,() => {
    menuList . classList.toggle('show-menu')

})



    const quoteText = document.getElementById('quote-text');

    function getRandomQuote() {
        const apiUrl = 'https://api.quotable.io/random';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayQuote(data);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteText.innerHTML = '<p>Unable to fetch a quote. Please try again later.</p>';
            });
    }

    function displayQuote(data) {
        const quote = `"${data.content}" - ${data.author}`;
        quoteText.innerHTML = `<p>${quote}</p>`;
    }

    const bannerContainer =document.querySelector('.banner-container')
    const banners = document.querySelectorAll('.banner')
    const imgList =['banner0','banner1','banner2','banner3','banner4']

    let index=0
    banners.forEach((banner)=>{
        banner.addEventListener('click',()=>{
            console.log('clicked')
            if(banner.classList.contains('btn-left')){
                index--;
                if(index<0)
                {
                    index=imgList.length-1;
                }
                
                bannerContainer.style.background= `url('./Imgs/${imgList[index]}.jpg') center/cover fixed no-repeat`;
            }
                else{
                    index++;
                    if(index===imgList.length)
                {
                    index=0;
                }
                bannerContainer.style.background= `url('./Imgs/${imgList[index]}.jpg') center/cover fixed no-repeat `;
                }

            })
        })
        
        
    
    const taskNameInput = document.getElementById('taskName');
    const dueDateInput = document.getElementById('dueDate');
    const status = document.getElementById('status');
    const taskList = document.getElementById('taskList');
    

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(function (task, index) {
            const li = document.createElement('li');
 
            li.innerHTML = `<div>
                <input type="text" id="task${index}" disabled value="${task.name}">
                <input type="date" id="date${index}" disabled value="${task.dueDate}">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="saveTask(${index})">Save</button>
                <button onclick="changeStatus(${index})" >${task.status}</button>
                <button style="color:white; background-color:red;border:none;" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
        taskList.appendChild(li);

            
        });
        saveTasksToLocalStorage();
    }

    function addTask() {
        const taskName= taskNameInput.value.trim();
        const dueDate = dueDateInput.value;
        const status = "PENDING";
     
     
        if (taskName !== '' && dueDate !== '') {
            const newTask = {
                name: taskName,
                status:status,
                dueDate: dueDate
            };
            const selectedDate = new Date(dueDate);
            const currentDate = new Date();
         
            if (selectedDate <= currentDate) {
                alert("Please select an upcoming date for the dueDate.");
                return; // Don't add task if deadline is not in the future
            }
           
       
            tasks.push(newTask);
            displayTasks();
            clearInputFields();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
    }

    function clearInputFields() {
        taskNameInput.value = '';
        dueDateInput.value = '';
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

   
   
function searchInput() {
    var   i;
   let input = document.getElementById("searchInput").value;
   input = input.toLowerCase();

   let  ul = document.getElementById("taskList");
   li = ul.getElementsByTagName("li");
   for (i = 0; i <  li.length; i++) {
        if (!li[i].innerHTML.toLowerCase().includes(input)) {
            li[i].style.display = "none";
          }
          else {
            li[i].style.display = "list-item";
          }
        }
    }
   
    function editTask(index) {
        document.getElementById("task"+index).removeAttribute("disabled");
        document.getElementById("date"+index).removeAttribute("disabled");

    }
    function saveTask(index) {
        var taskName = document.getElementById("task"+index).value;
        var dueDate = document.getElementById("date"+index).value;

        var oldTask = tasks[index];
        oldTask.name = taskName;
        oldTask.dueDate = dueDate;

        tasks[index] = oldTask;
        saveTasksToLocalStorage();
        displayTasks();
      
    }    
    
    function changeStatus(index)
    {

        var oldStatus = tasks[index];
        
        if(oldStatus.status === "COMPLETED"){

            oldStatus.status = 'PENDING';
           
        } else {
            oldStatus.status = 'COMPLETED';
        }
        tasks[index] = oldStatus;
    
      
      saveTasksToLocalStorage();
      displayTasks();
    }
     

             // Initial display of tasks
    displayTasks();


    
