// ***ハンバーガーメニュー***
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);
// ***ここまでハンバーガーメニュー***

// ここから画像表示JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.scroll-image');

    const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // 一度だけ表示したい場合
        }
        });
    },
    {
        threshold: 0.2 // 画像が画面の20%に入ったら
    }
    );

    images.forEach(image => observer.observe(image));
});

// h1の文字をタイプライター風に表示

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('#header h1, #header p');
    const charDelay = 100;   // 文字ごとの表示間隔
    const elementDelay = 600; // 要素ごとの開始遅延

    elements.forEach((el, elIndex) => {
    const originalText = el.textContent.trim();
      el.textContent = ''; // 一旦空にする
      el.classList.add('typing'); // カーソル表示

    [...originalText].forEach((char, i) => {
        setTimeout(() => {
        el.textContent += char;
          // 再度クラスを維持（textContent更新で消える場合あり）
        el.classList.add('typing');
        }, charDelay * i + elIndex * elementDelay);
    });

      // 全部表示し終わったらカーソルを止める（任意）
      const totalTime = charDelay * originalText.length + elIndex * elementDelay;
    setTimeout(() => {
        el.classList.remove('typing');
    }, totalTime);
    });
});