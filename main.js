var testObject = (function () {
    const _myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function init() {
        // Tu niczego nie zmieniaj
        return _changeArrayStructure(_checkArrayValues());
    }

    function createHTML(user) {
        const jsdom = require('jsdom');
        const {JSDOM} = jsdom;
        let dom = new JSDOM("<!doctype html><html><body></body></html>");
        global.window = dom.window;
        global.document = dom.window.document;
        global.navigator = global.window.navigator;
        const newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        const newSpan = document.createElement('span');
        const newButton = document.createElement('button');
        newDiv.appendChild(newSpan);
        newDiv.appendChild(newButton);
        newSpan.textContent = `Użytkownik ${user}`;
        newDiv.className = 'userTest';
        newButton.addEventListener('click', () => {
            newDiv.className = 'clicked';
        });
        return document;
        // Ta funkcja bedzie zwracała dynamicznie stworzony element DIV.
        // Będzie on wewnątrz zawierał elementy SPAN oraz BUTTON.
        // Po kliknięciu w BUTTON, dla elementu DIV będzie ustawiana klasa 'clicked'.
        // Element SPAN będzie zawierał tekst `Użytkownik YOUR_NAME` - gdzie YOUR_NAME to Twoje imię i nazwisko.
        // Twoje imię i nazwisko będzie przekazywane do tej funkcji jako argument 'user'.
        // Do elementu DIV będzie dodawana klasa 'userTest'.
        // Na koniec funkcja zwróci gotową strukturę elementów HTML, opisaną w powyższych krokach.
    }

    function api() {
        // Tu niczego nie zmieniaj - funkcja będzie przydatna do testów jednostkowych
        return _simulateApiResponse().then(res => res);
    }

    async function _simulateApiResponse() {
        // Tu niczego nie zmieniaj - funkcja będzie przydatna do testów jednostkowych
        return await new Promise((resolve) => setTimeout(resolve, 100, {status: 200}));
    }

    function _checkArrayValues() {
        return _myArray.filter((elem) => {
            return elem > 4;
        });
        // Funkcja zwraca tylko te elementy tablicy _myArray, które są większe od 4.
    }

    function _changeArrayStructure(arr) {
        // Funkcja przyjmuje tablicę cyfr jako argument i zwraca jej zmienioną strukturę.
        // Struktura ma wyglądać następująco: { item: INDEKS_1, item: INDEKS_2, itd. }
    }

    return {
        init: init,
        createHTML: createHTML,
        api: api
    }
}());
// kod sprawdzający wyniki zwracane przez funkcje
console.log(
    testObject.init(),
    testObject.createHTML('Justyna Adamczyk')
);
testObject.api()

if (typeof exports !== 'undefined') {
    module.exports = testObject;
}