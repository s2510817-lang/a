const foods = [
  {
    name: "김치찌개",
    img: "https://cdn.pixabay.com/photo/2021/03/15/13/51/kimchi-stew-6096460_1280.jpg",
    desc: "매콤하고 깊은 맛의 대표 한식! 밥이랑 찰떡궁합이에요 🍚"
  },
  {
    name: "짜장면",
    img: "https://cdn.pixabay.com/photo/2022/03/29/12/09/jajangmyeon-7099781_1280.jpg",
    desc: "중식의 정석! 고소하고 달콤한 짜장 한 그릇 어떠세요? 🥢"
  },
  {
    name: "비빔밥",
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/bibimbap-1239406_1280.jpg",
    desc: "다양한 채소와 고추장의 조화! 건강하고 맛있어요 🥬"
  },
  {
    name: "초밥",
    img: "https://cdn.pixabay.com/photo/2017/01/11/11/33/sushi-1979392_1280.jpg",
    desc: "싱싱한 회와 밥의 만남 🍣 깔끔한 한 끼로 딱!"
  },
  {
    name: "치킨",
    img: "https://cdn.pixabay.com/photo/2020/07/22/19/07/fried-chicken-5428549_1280.jpg",
    desc: "바삭하고 짭짤한 국민 야식! 🍗"
  },
  {
    name: "떡볶이",
    img: "https://cdn.pixabay.com/photo/2022/03/25/07/33/tteokbokki-7090917_1280.jpg",
    desc: "매콤달콤한 길거리 간식의 대표주자! 🔥"
  },
  {
    name: "햄버거",
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    desc: "든든하고 맛있는 패스트푸드의 왕 👑"
  }
];

document.getElementById("recommend-btn").addEventListener("click", () => {
  const randomFood = foods[Math.floor(Math.random() * foods.length)];

  const foodImg = document.getElementById("food-img");
  const foodName = document.getElementById("food-name");
  const foodDesc = document.getElementById("food-desc");

  foodImg.src = randomFood.img;
  foodName.textContent = randomFood.name;
  foodDesc.textContent = randomFood.desc;

  // 간단한 애니메이션 효과
  foodImg.style.opacity = "0";
  setTimeout(() => {
    foodImg.style.opacity = "1";
  }, 150);
});