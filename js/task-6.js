// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]
function updateArr(arr1, arr2){
    const newArr = [];
    for (const elem of arr1) {
        if(!arr2.includes(elem)){
            newArr.push(elem);
        }
    }
    return newArr;
}
console.log(updateArr([1, 2, 3, 1, 2], [1, 2]));
