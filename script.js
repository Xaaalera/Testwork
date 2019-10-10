"use strict";
/**
 * Ждем загрузки документа
 */
document.addEventListener("DOMContentLoaded", () => {

    const city = [    //как будто мы получили объект с API
        {id: 0, name: 'Ярославль', phone: 70000000000},
        {id: 1, name: 'Екатеринбург', phone: 70000000001},
        {id: 2, name: 'Москва', phone: 70000000002},
        {id: 3, name: 'Чернобыль', phone: 70000000003},
        {id: 4, name: 'Рим', phone: 70000000004},
        {id: 5, name: 'Город Х', phone: 70000000005},
        {id: 6, name: 'Город Z', phone: 70000000006},
    ];
    let replacedPhone = '74951111111'; //телефон по умолчанию который придется заменять в 1ой итерации
    const optionContainer = document.getElementById('city');
    let cityMap = new Map(); //неочевидно но с картой удобнее работать.
    city.map(item => {
        cityMap.set(item.id, item);
        optionContainer.append(new Option(item.name, item.id))
    });
    /**
     * Функция замены всех телефонов на странице
     * @param tel
     * @param replace
     */
    const replaced = (tel, replace) => {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(tel, 'gm'), replace);
        replacedPhone = replace;
    };
    /**
     * Листнер на  смену  города
     */
    optionContainer.addEventListener('change', (event) => {
        const citySelected = cityMap.get(parseInt(event.target.value));
        let res = replaced(replacedPhone, citySelected.phone);
        console.log(res);
    });
    optionContainer.dispatchEvent(new Event('change')); //тригерим чендж для 1ой замены.


});