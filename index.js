const dynamicList = document.querySelectorById("list")
const backdrop = document.querySelectorById("backdrop")

const items = [
  {
    name: "Яблоко",
    price: 100,
    photo:
      "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
  },

  {
    name: "Ківі",
    price: 300,
    photo:
      "https://vitaverde.com.ua/wp-content/uploads/2020/09/bermix-studio-1oMGgHn-M8k-unsplash.jpg",
  },

  {
    name: "Банан",
    price: 230,
    photo: "https://img.fozzyshop.com.ua/228783-thickbox_default/banan.jpg",
  },

  {
    name: "Полуниця",
    price: 150,
    photo:
      "https://produkty24.com.ua/db_pic/products/original/img_369750_[1539701715.5988].jpg",
  },

  {
    name: "Ананас",
    price: 350,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UdS09H62AG_GfNUAV2BDHE1V7CKqh_Qo7g&s",
  },

  {
    name: "Папайя",
    price: 500,
    photo: "https://nebanan.com.ua/wp-content/uploads/2019/11/fcb7ad251a.jpg",
  },

  {
    name: "Кокос",
    price: 100,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUsu2xrT7zMx49zh_hw9XOprmShgt-bOUgg&s",
  },

  {
    name: "Малина",
    price: 300,
    photo:
      "https://shuyagoda.ru/wp-content/uploads/2019/03/malina_svegaya-1024x1024.jpg",
  },

  {
    name: "Виноград",
    price: 230,
    photo:
      "https://da-mart.ru/storage/catalog/goods/9f0ef37873e21866b6946b35b7620413.w700h700.png",
  },
];

function createList() {
  const dynamicList = document.getElementById("list");
  const markup = items
    .map(
      (product) =>
        `<li class="products__card">
    <h3 class="products__title">Назва:${product.name}</h3>
      <h4 class="products__price">Ціна: ${product.price}</h4>
      <img class="products__img" src="${product.photo}" alt="">
      </li>
  `
    )
    .join("");
  dynamicList.innerHTML = markup;
  return markup;
}

console.log(createList());

// function openInfoModal() {
//   console.log()
//   dynamicList.addEventListener("click", (e) => {
//     document.querySelector("backdrop").classList.remove("is-hidden");
//   });
// }

dynamicList.addEventListener("click", openInfoModal)

function openInfoModal(у) {
  dynamicList.classList.remove(".is-hidden")ж
 console.log("click")
}

exit.addEventListener("click", closeInfoModal);

function closeInfoModal()