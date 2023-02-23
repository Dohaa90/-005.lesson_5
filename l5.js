let mathOptions = prompt('Введите математическую операцию');
let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');


switch (mathOptions) {
    case "add":
        let plus = Number(firstNumber) + Number(secondNumber);
        let resultPlus = firstNumber.concat(' + ', secondNumber, ' = ', plus)
        alert(resultPlus);
        break;
    case "sub":
        let minus = Number(firstNumber) - Number(secondNumber);
        let resultMinus = firstNumber.concat(' - ', secondNumber, ' = ', minus)
        alert(resultMinus);
        break;
    case "mult":
        let multiply = Number(firstNumber) * Number(secondNumber);
        let resultMultiply = firstNumber.concat(' * ', secondNumber, ' = ', multiply)
        alert(resultMultiply);
        break;
    case "div":
        let division = Number(firstNumber) / Number(secondNumber);
        let resultDivision = firstNumber.concat(' / ', secondNumber, ' = ', division)
        alert(resultDivision);
        break;
    default:
        alert('Вы выбрали некорректную операцию');
}
