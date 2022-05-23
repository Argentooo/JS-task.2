// 1 - Программа которая считает количество секунд в часе.

const countSeconds = (hour) => {
  let hourToSeconds;
  hourToSeconds = hour * 3600;
  console.log(hour + " - " + hourToSeconds + " seconds");
};

countSeconds(3);

// 2 - Переменная myNumber с значением 2022.тВывод значение этой переменной на экран с помощью метода alert.

const myNumber = 2022;
alert(myNumber);

// 3 - Спросите имя пользователя с помощью метода prompt. Вывод сообщение на страницу с помощью document.write : “Рад знакомству {имя пользователя}!”.

const name = prompt("Введите имя: ");
document.write("Рад знакомству " + name);

// 4 - Даны два числа a, b. Написанная программа, которая считает среднее арифметическое двух чисел.

const avarageNumber = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  let sum;
  sum = (a + b) / 2;
  console.log("среднее арифметическое двух чисел: " + sum);
};

avarageNumber(15, 45);

// 5 - Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число.
//   *Пример: Пользователь вводит число 10. Программа выводит число 11.*

let yourNumber = prompt("Введите любое число");

yourNumber++;

document.write(yourNumber);

// 6 - Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
// - Имя
// - Возраст
// - Список друзей
// - Почтовый адрес
// - Электронный адрес

const user = {
  name: "Argen",
  age: 15,
  friends: ["Kanybek", "Beksultan"],
  postalCode: "-",
  email: "argen.saipzhanov.alt@gmail.com",
};

// 7 - Создайте объект описывающий блог-пост на сайте:
// - Название поста
// - Автор поста
// - Дата публикации поста
// - Тело поста (содержит текст поста)
// - Картинка поста (содержит url картинки)
// - Теги поста

const blogPost = {
  name: "A friend in need is a friend indeed.",
  author: "Argen",
  publishedAt: 2022,
  postsBody:
    "Once upon a time there lived a lion in a forest. One day after a heavy meal. It was sleeping under a tree. After a while, there came a mouse and it started to play on the lion. Suddenly the lion got up with anger and looked for those who disturbed its nice sleep. Then it saw a small mouse standing trembling with fear. The lion jumped on it and started to kill it. The mouse requested the lion to forgive it. The lion felt pity and left it. The mouse ran away.On another day, the lion was caught in a net by a hunter. The mouse came there and cut the net. Thus it escaped. There after, the mouse and the lion became friends. They lived happily in the forest afterwards.",
  postsImg:
    "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.picturequotes.com%2Fa-friend-in-need-is-a-friend-indeed-quote-19566&psig=AOvVaw04NWOKc7AcXrGnuM3MzxAb&ust=1653224649513000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDRofzT8PcCFQAAAAAdAAAAABAR",
  postsTag: '<img src="">',
};

// 8 - Массив с именами пользователей.

let users = ["Sergei", "Kana", "Sasha", "Ahmet", "Mehmet"];

// 9 - Массив с url адресами на разные картинки.

let imgUrl = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2F11-outstanding-photos-show-connections%2F&psig=AOvVaw3y4y9xOHsQkpwcrM0ZLZhl&ust=1653225062743000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiu_7fV8PcCFQAAAAAdAAAAABAD",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr-fr.facebook.com%2FGrafixartPhotography%2Fposts&psig=AOvVaw3y4y9xOHsQkpwcrM0ZLZhl&ust=1653225062743000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiu_7fV8PcCFQAAAAAdAAAAABAJ",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pandasecurity.com%2Fen%2Fmediacenter%2Fsocial-media%2F5-tips-protect-photos-facebook%2F&psig=AOvVaw3y4y9xOHsQkpwcrM0ZLZhl&ust=1653225062743000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiu_7fV8PcCFQAAAAAdAAAAABAP",
];

// 10 - Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.

let blog_Post = [
  { name: "A friend in need is a friend indeed." },
  { author: "Argen" },
  { publishedAt: 2022 },
  {
    postsImg:
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.picturequotes.com%2Fa-friend-in-need-is-a-friend-indeed-quote-19566&psig=AOvVaw04NWOKc7AcXrGnuM3MzxAb&ust=1653224649513000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDRofzT8PcCFQAAAAAdAAAAABAR",
  },
  {
    postsBody:
      "Once upon a time there lived a lion in a forest. One day after a heavy meal. It was sleeping under a tree. After a while, there came a mouse and it started to play on the lion. Suddenly the lion got up with anger and looked for those who disturbed its nice sleep. Then it saw a small mouse standing trembling with fear. The lion jumped on it and started to kill it. The mouse requested the lion to forgive it. The lion felt pity and left it. The mouse ran away.On another day, the lion was caught in a net by a hunter. The mouse came there and cut the net. Thus it escaped. There after, the mouse and the lion became friends. They lived happily in the forest afterwards.",
  },
  { postsTag: '<img src="">' },
];
