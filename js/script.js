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
                // A bemenet olvasása a kijelzőről
                const expression = display.displayElement.value;
                const operands = expression.split(/[\+\-\*\/]/); // Operátorok alapján darabolás
                const operator = expression.match(/[\+\-\*\/]/)[0]; // Az első operátor kiválasztása

                const num1 = parseFloat(operands[0]);
                const num2 = parseFloat(operands[1]);

                let result;
                // A művelet kiválasztása és a Calculator használata
                switch (operator) {
                    case '+':
                        result = calculator.add(num1, num2);
                        break;
                    case '-':
                        result = calculator.subtract(num1, num2);
                        break;
                    case '*':
                        result = calculator.multiply(num1, num2);
                        break;
                    case '/':
                        result = calculator.divide(num1, num2);
                        break;
                }
                display.update(result);
            } catch (e) {
                display.update('Error');
            }
        } else {
            display.update(display.displayElement.value + value);
        }
    });
});
