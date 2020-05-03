import cards from './Cards';

const container = document.querySelector('.container');

const makeStatisticsTable = () => {
    const tableWrap = document.createElement('div');
    tableWrap.classList = 'table-wraper';
    container.append(tableWrap);
    container.style.background = 'yellow';
    // const wrap = document.querySelector('.wrapper');
    const table = document.createElement('table');
    table.classList = 'stat-block';
    tableWrap.append(table);

    for (let i = 0; i < cards[1].length; i += 1) {
        const tablerowHead = document.createElement('th');
        tablerowHead.setAttribute('colspan', 2);
        table.append(tablerowHead);
        tablerowHead.innerText = cards[1][i];
        const num = i + 2;
        for (let j = 0; j < cards[num].length; j += 1) {
            console.log(cards[num][j]);
            const tablerow = document.createElement('tr');
            table.append(tablerow);
            const tabledateEn = document.createElement('td');
            const tabledateRu = document.createElement('td');
            tablerow.append(tabledateEn);
            tabledateEn.innerText = cards[num][j].word;
            tablerow.append(tabledateRu);
            tabledateRu.innerText = cards[num][j].translation;
        }
    }
};
// export default makeStatisticsTable;

makeStatisticsTable();
