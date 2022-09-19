/**
 * Данные таблицы
 * @type {(string|number)[][]}
 */
let tableData = [
    ['Отдел А', 'Контрагент 1', 100],
    ['Отдел Б', 'Контрагент 2', 150],
    ['Отдел Б', 'Контрагент 3', 200],
    ['Отдел В', 'Контрагент 4', 200],
    ['Отдел Г', 'Контрагент 5', 250],
    ['Отдел Г', 'Контрагент 6', 300],
    ['Отдел Г', 'Контрагент 7', 350],
    ['Отдел Г', 'Контрагент 8', 400],
    ['Отдел Д', 'Контрагент 9', 450],
    ['Отдел Д', 'Контрагент 10', 500],
    ['Отдел Д', 'Контрагент 11', 50]
];

/**
 * Ссылка на table body
 * @type {HTMLElement}
 */
let tableBodyElement;

/**
 * Ссылка на селект с выбором департамента
 * @type {HTMLElement}
 */
let departmentSelectElement;

/**
 * Cтруктурированные данные в виде кучи
 */
let heap;

/**
 * Инициализация событий
 */
function bindEvents() {
    departmentSelectElement.onchange = function () {
        let departmentSelectElementValue = departmentSelectElement.value;
        let currentHeapData = heap;

        if (departmentSelectElementValue !== 'all') {
            currentHeapData = {[departmentSelectElementValue]: heap[departmentSelectElementValue]};
        }

        tableBodyElement.innerHTML = renderTableContent(currentHeapData);
    };
}

document.addEventListener("DOMContentLoaded", function () {
    heap = tableDataToHeap(tableData);

    tableBodyElement = document.getElementById('main-table-body');
    departmentSelectElement = document.getElementById('department-select');

    tableBodyElement.innerHTML = renderTableContent(heap);

    bindEvents();
});
