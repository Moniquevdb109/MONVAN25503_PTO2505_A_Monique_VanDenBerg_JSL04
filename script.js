// 1. clear existing HTML before renderling columns
function clearExistingTasks() {
    document.querySelectorAll('.task-container').forEach(c => c.innerHTML = '');
}

