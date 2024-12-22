// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
function updateObject(obj, ...rest) {
const newObject = {};
const keys = Object.keys(obj);
for (const element of keys) {
    if(!rest.includes(element)){
        newObject[element] = obj[element];
    }
}
return newObject
}
console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));
