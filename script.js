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

