 // Select DOM elements
 const taskInput = document.querySelector('#task-input');
 const addButton = document.querySelector('#add-task');
 const taskList = document.querySelector('#task-list');
 const filterButtons = document.querySelectorAll('.filter');
 const clearAllButton = document.querySelector('#clear-all');

 // Audio elements
 const addSound = document.querySelector('#add-sound');
 const deleteSound = document.querySelector('#delete-sound');
 const completeSound = document.querySelector('#complete-sound');
 const filterSound = document.querySelector('#filter-sound');
 const clearSound = document.querySelector('#clear-sound');

 // Function to play specific sound
 const playSound = (sound) => {
   sound.currentTime = 0; // Reset sound to the beginning
   sound.play();
 };

 // Add Task with Animation
 addButton.addEventListener('click', () => {
   playSound(addSound);
   if (taskInput.value.trim()) {
     const taskItem = document.createElement('li');
     taskItem.textContent = taskInput.value;

     // Add "I Done My Task" Button
     const doneButton = document.createElement('button');
     doneButton.textContent = 'I Done My Task';
     doneButton.classList.add('done-task');
     doneButton.addEventListener('click', (e) => {
       playSound(completeSound);
       e.stopPropagation();
       taskItem.classList.add('completed');
       doneButton.style.display = 'none';
     });

     // Add Delete Button
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.addEventListener('click', (e) => {
       playSound(deleteSound);
       e.stopPropagation();
       gsap.to(taskItem, {
         opacity: 0,
         y: -20,
         duration: 0.5,
         onComplete: () => taskItem.remove()
       });
     });

     taskItem.appendChild(doneButton);
     taskItem.appendChild(deleteButton);
     taskList.appendChild(taskItem);
     taskInput.value = '';

     gsap.to(taskItem, { opacity: 1, y: 0, duration: 0.5 });
   }
 });

 // Clear All Tasks with Animation
 clearAllButton.addEventListener('click', () => {
   playSound(clearSound);
   const tasks = Array.from(taskList.children);
   tasks.forEach(task => {
     gsap.to(task, {
       opacity: 0,
       y: -20,
       duration: 0.5,
       onComplete: () => task.remove()
     });
   });
 });

 // Filter Tasks
 filterButtons.forEach(button => {
   button.addEventListener('click', () => {
     playSound(filterSound);
     const filter = button.dataset.filter;
     const tasks = Array.from(taskList.children);
     tasks.forEach(task => {
       const doneButton = task.querySelector('.done-task');
       if (filter === 'all') {
         gsap.to(task, { display: 'flex', opacity: 1, duration: 0.3 });
         if (!task.classList.contains('completed') && doneButton) {
           doneButton.style.display = 'inline-block';
         }
       } else if (filter === 'completed') {
         if (task.classList.contains('completed')) {
           gsap.to(task, { display: 'flex', opacity: 1, duration: 0.3 });
           if (doneButton) {
             doneButton.style.display = 'none';
           }
         } else {
           gsap.to(task, { opacity: 0, duration: 0.3, onComplete: () => task.style.display = 'none' });
         }
       } else if (filter === 'active') {
         if (!task.classList.contains('completed')) {
           gsap.to(task, { display: 'flex', opacity: 1, duration: 0.3 });
           if (doneButton) {
             doneButton.style.display = 'inline-block';
           }
         } else {
           gsap.to(task, { opacity: 0, duration: 0.3, onComplete: () => task.style.display = 'none' });
         }
       } else {
         gsap.to(task, { opacity: 0, duration: 0.3, onComplete: () => task.style.display = 'none' });
       }
     });
   });
 });