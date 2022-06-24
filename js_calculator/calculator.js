//Javascript program for a simple calculator

let result;


const operator = prompt('Enter operator from(+, -, *, /):');


const first_num = parseFloat(prompt('Enter First Number'));
const secon_num = parseFloat(prompt('Enter Second number:'));

switch(operator) {
    case '+':
        result = first_num + secon_num;
        alert('${first_num} + ${secon_num} = ${result}');
        break;
    
    case '-':
        result = first_num - secon_num;
        alert('${first_num} - ${secon_num} = ${result}');
        break;

    case '*':
        result = first_num * secon_num;
        alert('${first_num} * ${secon_num} = ${result}')
        break;
    
    case '/':
        result = first_num / secon_num;
        alert('${first_num} / ${secon_num} = ${result}')
        break;
    
    default:
        alert('invalid operator');
        break;
}
