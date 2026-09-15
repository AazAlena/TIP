"use strict";

const totalTasks = 15;
const completedTasks = 0;
const dailyLimit = 4;

// Здесь разместите своё решение.

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
    console.log("Ошибка: вместо числа передана строка.");
} else if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение.");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: дробное количество.");
} else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество.");
} else if (totalTasks > 1000) {
    console.log("Ошибка: превышена верхняя граница.");
} else if (completedTasks > totalTasks) {
    console.log("Ошибка: некорректное число выполненных задач.");
} else if (typeof dailyLimit !== "number") {
    console.log("Ошибка: дневная норма задана строкой.");
} else if (Number.isNaN(dailyLimit)) {
    console.log("Ошибка: недопустимое числовое значение.");
} else if (!Number.isInteger(dailyLimit)) {
    console.log("Ошибка: дробной дневной нормы быть не должно.");
} else if (dailyLimit < 1) {
    console.log("Ошибка: дневная норма должна быть не меньше 1.");
} else if (dailyLimit > 1000) {
    console.log("Ошибка: превышена верхняя граница нормы.");
} else {
    const remaining = totalTasks - completedTasks;

    console.log("Осталось задач:", remaining);

    if (remaining == 0) {
        console.log("Все задачи уже выполнены");
        console.log("Потребуется дней: 0");
    } else {
        let days = 0;
        let left = remaining;

        while (left > 0) {
            days++;
            const perDay = Math.min(dailyLimit, left);
            left -= perDay;
            console.log("День " + days + ": выполнено " + perDay + ", осталось " + left);
        }

        console.log("Потребуется дней:", days);
    }
}
