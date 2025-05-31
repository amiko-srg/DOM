let name = prompt("Ismingizni yozing:");
let surname = prompt("Familiyangizni yozing:");
let age = prompt("Yoshingizni yozing:");

// Запрашиваем выбор регистра
let caseChoice;
while (true) {
    caseChoice = prompt("Harfni katta yoki kichik qilishni tanlang:\n1 - Upper case\n2 - Lower case");
    if (caseChoice === "1" || caseChoice === "2") break;
    alert("Iltimos, faqat 1 - upper case yoki 2 - lower case raqamini tanlang.");
}

// Приведение к выбранному регистру
if (caseChoice === "1") {
    name = name.toUpperCase();
    surname = surname.toUpperCase();
} else {
    name = name.toLowerCase();
    surname = surname.toLowerCase();
}

// Отображение в HTML
document.querySelector(".name").innerHTML = "Name: " + name;
document.querySelector(".surname").innerHTML = "Surname: " + surname;
document.querySelector(".age").innerHTML = "Age: " + age;

// Работа с баллом
let ball = +prompt("Balingizni yozing:");
document.querySelector(".ball").innerHTML = "Ball: " + ball;

// Проверка результата и смена фона
if (ball >= 60) {
    document.body.style.backgroundColor = "lightgreen";
    alert("Tabriklaymiz, ekzamenni muvaffaqiyatli topshirdingiz!");
} else {
    document.body.style.backgroundColor = "lightcoral";
    alert("Afsuski, siz ekzamenni o'tmadingiz.");
}