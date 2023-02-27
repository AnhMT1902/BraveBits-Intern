function main() {
    let htmlData = `
    <tr>
        <td colspan="4"><label for="inp"></label><input id="inp" type="text" value="0"></td>
    </tr>
    <tr>
        <td colspan="2">
            <button onClick="clearValue()" class="btn-ac ripple">AC</button>
        </td>
        <td >
            <button onClick="rollbackValue()" class="btn-ac ripple">DEL</button>
        </td>
        ${handleKeyPress('/', 'btnCal ripple')}
    </tr>
    <tr>
         ${handleKeyPress(7, 'btnNumber ripple')}
         ${handleKeyPress(8, 'btnNumber ripple')}
         ${handleKeyPress(9, 'btnNumber ripple')}
         ${handleKeyPress('*', 'btnCal ripple')}
    </tr>
    <tr>
         ${handleKeyPress(4, 'btnNumber ripple')}
         ${handleKeyPress(5, 'btnNumber ripple')}
         ${handleKeyPress(6, 'btnNumber ripple')}
         ${handleKeyPress('-', 'btnCal ripple')}
    </tr> 
    <tr>
         ${handleKeyPress(1, 'btnNumber ripple')}
         ${handleKeyPress(2, 'btnNumber ripple')}
         ${handleKeyPress(3, 'btnNumber ripple')}
         ${handleKeyPress('+', 'btnCal ripple')}
    </tr>
    <tr>
        <td colspan="2">
          <button onClick="replace('0')" class="btnNumber ripple">0</button>
        </td>
        ${handleKeyPress('.', 'btnNumber ripple')}
        <td>
            <button onclick="calculate()" class="btnCal ripple">=</button>
        </td>
    </tr>`
    document.getElementById('calc-app').innerHTML = htmlData;
    document.getElementById('calc-app').addEventListener("click", (e) => {
        if (e.target.matches(".ripple")) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            const circle = document.createElement('span');
            circle.classList.add('ripple-effect');
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
            const buttons = document.querySelectorAll('.ripple');
            buttons.forEach((button) => {
                if (button.offsetLeft === e.target.offsetLeft && button.offsetTop === e.target.offsetTop) {
                    button.appendChild(circle)
                }
            })
            setTimeout(() => circle.remove(), 500);
        }
    })
}

main();

function replace(value) {
    let res = ['+', '-', '*', '/', '.']
    let inpValue = document.getElementById('inp').value;
    if (inpValue === '0') {
        if (!res.includes(value)) {
            document.getElementById('inp').value = value
        }
    } else {
        if (res.includes(inpValue[inpValue.length - 1])) {
            if (res.includes(value)) {
                document.getElementById('inp').value = inpValue
            } else {
                document.getElementById('inp').value += value
            }
        } else {
            document.getElementById('inp').value += value
        }
    }
}

function clearValue() {
    return document.getElementById('inp').value = 0;
}

function calculate() {
    let value = document.getElementById('inp').value;
    if (value !== '') {
        let calc = `${eval(value)}`
        if (calc.includes('.')) {
            return document.getElementById('inp').value = calc.substring(0, calc.indexOf('.') + 6);
        } else {
            return document.getElementById('inp').value = eval(value)
        }
    }
}

function handleKeyPress(value, className) {
    return `<td>
                <button onClick="replace('${value}')" class="${className}">${value}</button>
            </td>`
}

function rollbackValue() {
    let value = document.getElementById('inp').value;
    document.getElementById('inp').value = value.substring(0, value.length - 1)
    if (document.getElementById('inp').value === '') {
        document.getElementById('inp').value = 0
    }
}