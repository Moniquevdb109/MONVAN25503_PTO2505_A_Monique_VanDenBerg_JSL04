import { initialTasks } from './initialData.js';

/**
 * Clear all task containers before re-rendering.
 */
function clearExistingTasks() {
    document.querySelectorAll('.tasks-container').forEach(c => c.innerHTML = '');
}

/**
 * Create an element representing a single task card.
 *
 * @param {Task} task - The task to render.
 * @returns {HTMLDivElement} A <div> with class "task-div" and a click handler to open the modal.
 */
function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'task-div';
    div.textContent = task.title;
    div.dataset.taskId = task.Id
    div.addEventListener('click',() => openTaskModal(task));
    return div;
}

/**
 * Get the tasks-container inside the column matching a given status.
 * @param {Status} status - The column status to look up.
 * @returns {HTMLElement|null} The container element or null if nothing is found.
 */
function getTaskContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector('.tasks-container') : null;
}

/**
 * Render all tasks into their respective columns.
 * @param {Array} task - Array of task objects to render.
 */
function renderTasks (task) {
    task.forEach(task => {
        const container = getTaskContainerByStatus(task.status);
        if (container) container.appendChild (createTaskElement(task));
    })
}

/**
 * Open the modal populated with the given task's details.
 * @param {Object} task - Object containing task information
 */
function openTaskModal(task) {
    const modal = document.getElementById('task-modal');
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.description;
    document.getElementById('task-status').value = task.status;
    modal.showModal();
}

/**
 * Sets up the modal's close button
 */
function setupModalCloseHandler() {
    const modal = document.getElementById('task-modal');
    document.getElementById('close-task-btn').addEventListener('click', () => modal.close());
}

/**
 * Initialises the Kanban board by clearing existing tasks, rendering initial tasks, and setting up modal handlers.
 */
function initKanbanBoard() {
    clearExistingTasks();
    renderTasks(initialTasks);
    setupModalCloseHandler();
}
/**
 * Wait for the DOM to load before initializing the Kanban board.
 */
document.addEventListener('DOMContentLoaded', initKanbanBoard);