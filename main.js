
// Zadanie 1.1.
function arraySum(numbers)
{
    let sum = 0;

    numbers.forEach(function(item) {
        sum += parseInt(item);
    });

    return sum;
}

console.log(arraySum([2, '3', 12, '45']));


// Zadanie 1.2.
function arraySumNumbersOnly(mixedNumbers)
{
    let sum = 0;

    mixedNumbers.forEach(function(item) {
        if (Number.isInteger(item)) {
            sum += parseInt(item);
        }
    });

    return sum;
}

console.log(arraySumNumbersOnly([2, '3', 12, '45']));


// Zadanie 2
function safeSheep(herd)
{
    let wolfPosition = herd.indexOf("wolf");

    if (wolfPosition > herd.lastIndexOf("sheep")) {
        return "Pls stop eating my sheeps!";
    }

    return "Sheep number " + (wolfPosition + 1) + "! RUN!!!";
}

console.log(safeSheep(["sheep", "wolf", "sheep", "sheep"]));
console.log(safeSheep(["sheep", "sheep", "wolf"]));


// Zadanie 3.
function getInitials(fullName)
{
    let splittedName = fullName.split(" ");

    return splittedName[0][0] + '.' + splittedName[1][0] + '.';
}

console.log(getInitials("Adrian Głowienka"));


// Zadanie 4.
function sumPositives(numbers)
{
    let sum = 0;

    return numbers.reduce(function(sum, item) {
        if (item > 0) {
            console.log(sum);
            return sum + item;
        }

        return sum;
    }, sum);
}

console.log(sumPositives([-1, -9, -5, -100, -3]));


// Zadanie 5.
function whoWillBeJuniorDeveloper(students, requirements) {
    let success = [], fail = [];

    students.forEach(function(student) {
        let taskRequirementPassed = student.tasksDone >= requirements.minTasksDone,
            hoursRequirementPassed = student.hoursSpent >= requirements.minHoursSpent;

        if (taskRequirementPassed && hoursRequirementPassed) {
            success.push(student.name);
        } else {
            fail.push(student.name);
        }
    });

    return success.join(", ") + " - Gratulacje! Ciężka praca popłaca\n" + fail.join(", ") + " - DO ROBOTY LENIE!";
}

console.log(whoWillBeJuniorDeveloper(
    [
        {name: 'John', tasksDone: 20, hoursSpent: 10},
        {name: 'Adam', tasksDone: 79, hoursSpent: 85},
        {name: 'Sue', tasksDone: 200, hoursSpent: 100},
    ],
    {
        minHoursSpent: 80,
        minTasksDone: 100
    }
));