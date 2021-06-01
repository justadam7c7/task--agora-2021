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
        const div = element.querySelector('div');
        expect(div).toBeTruthy();
        expect(div.querySelector('span')).toBeTruthy();
        expect(div.querySelector('button')).toBeTruthy();
    });

    test('DIV element has set proper class', () => {
        // sprawdź czy element DIV ma ustawioną klasę 'userTest'
        const div = element.querySelector('.userTest');
        expect(div).toBeTruthy();
    });

    test('SPAN element has set proper text', () => {
        // sprawdź czy element SPAN zawiera tekst
        // `Użytkownik: YOUR_NAME` - gdzie YOUR_NAME to Twoje imię i nazwisko
        expect(span.textContent).toContain('Użytkownik Justyna Adamczyk');
    });

    test('BUTTON click working properly', () => {
        // sprawdź czy po kliknięciu w BUTTON
        // ustawiana jest klasa 'clicked' na elemencie DIV
        btn.click();
        const div = element.querySelector('.clicked');
        expect(div).toBeTruthy();
    });

    test('api() returns expected data', () => {
        return expect(main.api()).resolves.toHaveProperty('status', 200);
        // DLA CHĘTNYCH
        // Sprawdź czy funkcja api() zwraca oczekiwane dane: {status: 200}
        // Możesz włączyć test, zmieniając słowo 'xtest' na 'test'
    });
});