var testObject = (function () {
    const _myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function init() {
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
    }

    function api() {
        return _simulateApiResponse().then(res => res);
    }

    async function _simulateApiResponse() {
        return await new Promise((resolve) => setTimeout(resolve, 100, {status: 200}));
    }

    function _checkArrayValues() {
        return _myArray.filter((elem) => {
            return elem > 4;
        });
    }

    function _changeArrayStructure(arr) {
        return arr.map(x => {
            return {item: x};
        });
    }

    return {
        init: init,
        createHTML: createHTML,
        api: api
    }
}());
console.log(
    testObject.init(),
    testObject.createHTML('Justyna Adamczyk')
);
testObject.api()

if (typeof exports !== 'undefined') {
    module.exports = testObject;
}