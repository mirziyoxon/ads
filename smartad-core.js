(function(){
  // === Static ads database ===
  const ADS = [
    { image: "https://unicorner.uz/ads/ad1.jpg", link: "https://unicorner.uz/offer1" },
    { image: "https://unicorner.uz/ads/ad2.jpg", link: "https://unicorner.uz/research" },
    { image: "https://unicorner.uz/ads/ad3.jpg", link: "https://unicorner.uz/book" },
    { image: "https://unicorner.uz/ads/ad4.jpg", link: "https://unicorner.uz/event" }
  ];

  // === Pick random ad ===
  function getRandomAd() {
    return ADS[Math.floor(Math.random() * ADS.length)];
  }

  // === Inject styles ===
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
    .smartad-box img {
      width: 100%;
      display: block;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // === Create ad container ===
  const container = document.createElement("div");
  container.className = "smartad-box";

  const ad = getRandomAd();
  container.innerHTML = `<a href="${ad.link}" target="_blank">
    <img src="${ad.image}" alt="Ad">
  </a>`;

  // === Insert automatically ===
  window.addEventListener("load", () => {
    // Try to place inside body’s first container or end of body
    const main = document.querySelector("main, article, section, body");
    main.appendChild(container);
  });
})();
