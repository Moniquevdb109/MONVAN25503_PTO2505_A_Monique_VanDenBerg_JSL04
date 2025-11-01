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
// Add tasks to their respective columns using their status
function getTaskContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector('.task-container') : null;
}
