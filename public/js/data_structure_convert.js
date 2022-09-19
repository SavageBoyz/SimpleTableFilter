/**
 * Данные таблицы в кучу
 * @param tableData - данные таблицы
 * @returns {{}}
 */
function tableDataToHeap(tableData) {
    let heap = {};

    tableData.map(el => {
        if (!heap.hasOwnProperty(el[0])) {
            heap[el[0]] = [];
        }

        heap[el[0]].push(el.slice(1));
    });

    return heap;
}