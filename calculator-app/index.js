function main() {
    let htmlData = `<tr>
        <td colspan="4"><label for="inp"></label><input id="inp" type="text" value="0"></td>
    </tr>
    <tr>
        <td colspan="2">
            <button onClick="clearValue()" class="btn-ac">AC</button>
        </td>
        <td >
            <button onClick="rollBackValue()" class="btn-ac">DEL</button>
        </td>
        ${handleKeyPress('/', 'btnCal')}
    </tr>
    <tr>
         ${handleKeyPress(7, 'btnNumber')}
         ${handleKeyPress(8, 'btnNumber')}
         ${handleKeyPress(9, 'btnNumber')}
         ${handleKeyPress('*', 'btnCal')}
    </tr>
    <tr>
         ${handleKeyPress(4, 'btnNumber')}
         ${handleKeyPress(5, 'btnNumber')}
         ${handleKeyPress(6, 'btnNumber')}
         ${handleKeyPress('-', 'btnCal')}
    </tr> 
    <tr>
         ${handleKeyPress(1, 'btnNumber')}
         ${handleKeyPress(2, 'btnNumber')}
         ${handleKeyPress(3, 'btnNumber')}
         ${handleKeyPress('+', 'btnCal')}
    </tr>
    <tr>
        <td colspan="2">
                <button onClick="replace('0')" class="btnNumber">0</button>
            </td>
        ${handleKeyPress('.', 'btnNumber')}
        <td><button onclick="calculate()" class="btnCal">=</button></td>
    </tr>`
    document.getElementById('calc-app').innerHTML = htmlData;
}

main();

function replace(value) {
    let inpValue = document.getElementById('inp').value;
    inpValue === '0' ? document.getElementById('inp').value = value : document.getElementById('inp').value += value;


}

function clearValue() {
    document.getElementById('inp').value = 0
}

function calculate() {
    let value = document.getElementById('inp').value;
    if (value !== '') {
        document.getElementById('inp').value = eval(value)
    }
}

function handleKeyPress(value, className) {
    return `<td>
                <button onClick="replace('${value}')" class="${className}">${value}</button>
            </td>`
}

function rollBackValue() {
    let value = document.getElementById('inp').value;
    document.getElementById('inp').value = value.substring(0, value.length - 1)
    if (document.getElementById('inp').value === '') {
        document.getElementById('inp').value = 0
    }
}