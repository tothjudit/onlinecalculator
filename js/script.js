class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) return 'Error';
        return a / b;
    }
}

class Display {
    constructor(displayElement) {
        this.displayElement = displayElement;
    }

    update(value) {
        this.displayElement.value = value;
    }

    clear() {
        this.displayElement.value = '';
    }
}

const calculator = new Calculator();
const display = new Display(document.getElementById('display'));

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            display.clear();
        } else if (value === '=') {
            try {
                display.update(eval(display.displayElement.value));
            } catch {
                display.update('Error');
            }
        } else {
            display.update(display.displayElement.value + value);
        }
    });
});