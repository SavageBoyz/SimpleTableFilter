/**
 * Сгенерировать контент для таблицы
 * @param heap - куча с данными
 * @returns {string}
 */
function renderTableContent(heap) {
    let result = '';
    let counter = 0;

    for (const [key, value] of Object.entries(heap)) {
        result += value.map(rows => {
            return `<tr>
                        <th scope="row">${counter++}</th>
                        <td>${key}</td>
                        ${rows.map(content => wrapContentToHtmlTag(content, 'td')).join('\n')}
                    </tr>`;
        }).join('\n');
    }

    return result;
}

/**
 * Обернуть контент html тегом
 * @param content - контент
 * @param htmlTag - тэг, в который будет обернут контент
 * @returns {string}
 */
function wrapContentToHtmlTag(content, htmlTag) {
    return `<${htmlTag}>${content}</${htmlTag}>`;
}