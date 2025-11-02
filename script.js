import { initialTasks } from './initialData.js';

// 1. clear existing HTML before renderling columns
function clearExistingTasks() {
    document.querySelectorAll('.task-container').forEach(c => c.innerHTML = '');
}

// 2. render tasks to the columns based on their status
function createTaskElement(task) {
    const div = document.createElemennt('div');
    div.className = 'task-div';
    div.textContent = task.title;
    div.dataset.taskId = taskId
    div.addEventListener('click',() => openTaskModal(task));
    return div;
}
// 3. Add tasks to their respective columns using their status
function getTaskContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector('.task-container') : null;
}

// 4. Main function to render all tasks
function renderTasks (task) {
    task.forEach(task => {
        const container = getTaskContainerByStatus(task.status);
        if (container) container.appendChild (createTaskElement(task));
    })
}

// 5. Function to open the modal with task details
function openTaskModal(task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.description;
    document.getElementById('task-status').value = task.status;
    modal.showModal();
}