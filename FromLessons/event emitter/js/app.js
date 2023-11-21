class EventEmitter {
    constructor() {
        this.events = {};
    }

    emit(eventName, data) {
        const event = this.events[eventName];
        if (event) {
            event.forEach((fn) => {
                fn.call(null, data);
            });
        }
    }

    subscribe(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(fn);
        return () => {
            this.events[eventName] = this.events[eventName].filter(
                (eventFn) => fn !== eventFn
            );
        };
    }
}

let input = document.querySelector('input[type="text"]');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

let emitter = new EventEmitter();

const subscribe1 = emitter.subscribe('event:name-changed', (obj) => {
    h1.innerHTML = `Your name is: ${obj.name}`;
});

const subscribe2 = emitter.subscribe('event:name-changed', () => {
    alert('Second function subscribed');
});

button.addEventListener('click', () => {
    emitter.emit('event:name-changed', { name: input.value });
});
