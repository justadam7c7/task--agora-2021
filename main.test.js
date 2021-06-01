const main = require('./main.js');

describe('testObject test', () => {

    let element;
    let span;
    let btn;

    beforeEach(() => {
        main.init();
        element = main.createHTML('YOUR_NAME');
        span = element.querySelector('span');
        btn = element.querySelector('button');
    });

    test('createHTML() return proper HTML structure', () => {
        // sprawdź czy funkcja createHTML() zwraca element DIV
        // i czy zawiera on elementy SPAN i BUTTON
    });

    test('DIV element has set proper class', () => {
        // sprawdź czy element DIV ma ustawioną klasę 'userTest'
    });

    test('SPAN element has set proper text', () => {
        // sprawdź czy element SPAN zawiera tekst
        // `Użytkownik: YOUR_NAME` - gdzie YOUR_NAME to Twoje imię i nazwisko
    });

    test('BUTTON click working properly', () => {
        // sprawdź czy po kliknięciu w BUTTON
        // ustawiana jest klasa 'clicked' na elemencie DIV
    });

    test('api() returns expected data', () => {
        // DLA CHĘTNYCH
        // Sprawdź czy funkcja api() zwraca oczekiwane dane: {status: 200}
        // Możesz włączyć test, zmieniając słowo 'xtest' na 'test'
    });
});