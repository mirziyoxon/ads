(function(){
  // === Static ad library ===
  const ADS = [
    { image: "https://picsum.photos/600/300?random=1", link: "https://unicorner.uz/offer1" },
    { image: "https://picsum.photos/600/300?random=2", link: "https://unicorner.uz/research" },
    { image: "https://picsum.photos/600/300?random=3", link: "https://unicorner.uz/book" },
    { image: "https://picsum.photos/600/300?random=4", link: "https://unicorner.uz/event" }
  ];

  function getRandomAd() {
    return ADS[Math.floor(Math.random() * ADS.length)];
  }

  const style = document.createElement("style");
  style.textContent = `
    .smartad-box {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: fadeIn 0.8s ease;
      transition: transform 0.3s ease;
    }
    .smartad-box:hover { transform: scale(1.02); }
    .smartad-box img { width: 100%; display: block; border-radius: 14px; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }`;
  document.head.appendChild(style);

  const ad = getRandomAd();
  const container = document.createElement("div");
  container.className = "smartad-box";
  container.innerHTML = `<a href="${ad.link}" target="_blank"><img src="${ad.image}" alt="Ad"></a>`;

  window.addEventListener("load", () => {
    const main = document.querySelector("main, article, section, body");
    main.appendChild(container);
  });
})();
