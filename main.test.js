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
               const div = element.querySelector('div');
        expect(div).toBeTruthy();
        expect(div.querySelector('span')).toBeTruthy();
        expect(div.querySelector('button')).toBeTruthy();
    });

    test('DIV element has set proper class', () => {
                const div = element.querySelector('.userTest');
        expect(div).toBeTruthy();
    });

    test('SPAN element has set proper text', () => {
                expect(span.textContent).toContain('Użytkownik Justyna Adamczyk');
    });

    test('BUTTON click working properly', () => {
               btn.click();
        const div = element.querySelector('.clicked');
        expect(div).toBeTruthy();
    });

    test('api() returns expected data', () => {
        return expect(main.api()).resolves.toHaveProperty('status', 200);
           });
});