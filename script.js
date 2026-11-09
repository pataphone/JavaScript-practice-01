alert('1.1')
{
let student = `Сердюк Ярослав`
let age = `17`
let major = `Комп'ютерні науки`

let log = `Student: ${student}, Age: ${age}, Major: ${major}`
alert(log)
}

alert('1.2')
{
let a = 2
let b = 3

alert(`a = ${a}, b = ${b}`)
alert(`a + b: ${a + b} \n a - b: ${a - b} \n a * b: ${a * b} \n a / b: ${a / b} \n a % b: ${a % b} \n a ** b: ${a ** b}`)
}

alert('2.1')
{
let a = prompt('Введіть число')
if (a % 2 === 0) {
    alert('Це парне число')
}
else {
    alert('Це непарне число')
}

}
alert('2.2')
{
    let temp = prompt('Введіть температуру')

    if (temp < 0) {
        alert('Холодно')
    }
    else if (temp >= 0 && temp <= 15) {
        alert('Прохолодно')
    }
    else if (temp > 15 && temp <= 25) {
        alert('Нормально')
    }
    else if (temp > 25) {
        alert('Тепло')
    }
}

alert('3.1')
{
    let str = ''
    for (let i = 1; i <= 20; i++) {
        console.log(i);
        str += `\n ${i}`
    }
    alert(`В консолі: ${str}`)
}

alert('3.2')
{
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    alert(`Порахувати суму чисел від 1 до 100: ${sum}`)
}

alert('4.1')
{
    let arr = ['1', '2', '3', '4', '5']
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        result += `\n ${arr[i]}`
    }
    alert(`for ${result}`)

    result = ''
    for (let i of arr) {
        result += `\n ${i}`
    }
    alert(`for of ${result}`)

    result = ''
    arr.forEach(i => result += `\n ${i}`);
    alert(`forEach ${result}`)
}

    alert('4.2')
    {
        let nums = [10, 5, 22, 8, 1];
        let result = nums[0]

        for (let i of nums) {
            result = i < result ? i : result
        }
        alert(`Мінімальне ${result}`)

        result = nums[0]
        for (let i of nums) {
            result = i > result ? i : result
        }
        alert(`Максимальне ${result}`)

        alert(`Сума: ${nums.reduce((acc, i) => acc + i, 0)}`)
    }

    alert('5.1')
    {
        function square(a) {
            return a ** 2
        }

        let result = ''

        for (let i = 1; i <= 10; i++) {
            result += `Квадрат ${i}: ${square(i)} \n`
        }
        alert(result)
    }

    alert('5.2')
    {
        function isAdult(age) {
            return age >= 18
        }
        alert(`17: ${isAdult(17)} \n 18: ${isAdult(18)} \n 19: ${isAdult(19)}`)
    }

    alert('6')
    {
        let title = document.getElementById('title')
        let btn = document.getElementById('btn')

        btn.addEventListener('click', () => {title.innerText = "JavaScript is awesome!"})
    }
