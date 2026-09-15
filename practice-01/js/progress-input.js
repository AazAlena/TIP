"use strict";

const totalInput = "12";
const completedInput = "5";

// Здесь разместите своё решение.

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
    console.log("Ошибка: на вход ожидались строки.");
} else {
    const totalText = totalInput.trim();
    const completedText = completedInput.trim();

    if (totalText === "" || completedText === "") {
        console.log("Ошибка: пустой ввод.");
    } else {
        const totalTasks = Number(totalText);
        const completedTasks = Number(completedText);

        if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
            console.log("Ошибка: недопустимое числовое значение.");
        } else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
            console.log("Ошибка: дробное количество.");
        } else if (totalTasks < 0 || completedTasks < 0) {
            console.log("Ошибка: отрицательное количество.");
        } else if (totalTasks > 1000) {
            console.log("Ошибка: превышена верхняя граница.");
        } else if (completedTasks > totalTasks) {
            console.log("Ошибка: выполнено больше, чем существует.");
        } else if (totalTasks === 0 && completedTasks === 0) {
            console.log("Задач пока нет");
        } else {
            const remaining = totalTasks - completedTasks;
            const progress = (completedTasks / totalTasks) * 100;

            let status;
            if (completedTasks === 0) {
                status = "Не начато";
            } else if (completedTasks === totalTasks) {
                status = "Завершено";
            } else {
                status = "В работе";
            }

            console.log("Всего задач:", totalTasks);
            console.log("Выполнено:", completedTasks);
            console.log("Осталось:", remaining);
            console.log("Прогресс:", progress.toFixed(1) + "%");
            console.log("Статус:", status);
        }
    }
}
