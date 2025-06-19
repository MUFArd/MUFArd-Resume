const navlinks = document.querySelectorAll('.links-nav li');

navlinks.forEach(link => {
    link.addEventListener('click', function () {
        navlinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

const navItems = document.querySelectorAll('.links-nav li');

navItems.forEach(li => {
  li.addEventListener('click', function () {
    const link = li.querySelector('a');
    if (link) {
      link.click();
    }
  });
});

const glitch = document.querySelector('.glitch');
function restartAnimation() {
  glitch.classList.remove('glitch');
  void glitch.offsetWidth; 
  glitch.classList.add('glitch');
}
setInterval(restartAnimation, 6000);


const startMsg = document.querySelector(".start-msg");
const loadingMsg = document.querySelector(".loading-msg");
const accessMsg = document.querySelector(".access-msg");
const progressBar = document.querySelector(".progress-bar");
const progressNum = document.querySelector(".progress-num");

setTimeout(() => {
    startMsg.classList.add("show");

    setTimeout(() => {
        startMsg.style.display = "none";
        loadingMsg.style.display = "block";
        loadingMsg.classList.add("show");

        let progress = 0;
        const interval = setInterval(() => {
            if (progress < 40) {
                progress += 2;
            } else if (progress < 75) {
                progress = 75;
            } else if (progress < 100) {
                progress += 5;
            } else {
                progress = 100;
            }

        const barLength = Math.floor(progress / 10);
        const bar = "[" + "█".repeat(barLength) + "░".repeat(10 - barLength) + "]";
        progressBar.textContent = bar;
        progressNum.textContent = `${progress}%`;

        if (progress >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            loadingMsg.style.display = "none";
            accessMsg.style.display = "block";
            accessMsg.classList.add("show");

            setTimeout(() => {
              document.querySelector(".loading-screen").style.display = "none";
            }, 1500);
          }, 800);
        }
      }, 100);
    }, 1500);
}, 500); 

document.addEventListener("DOMContentLoaded", function () {
  const btnentersystem = document.getElementById('btn-enter-system');
  const btnrecruit = document.getElementById('btn-recruit');

  btnentersystem.addEventListener("click", function () { 
      this.classList.add('active');
      this.disabled = true;
      btnrecruit.classList.remove('active');
      btnrecruit.disabled = true;

      setTimeout(() => {
          this.classList.remove("active");
          this.disabled = false;
          btnrecruit.disabled = false;
      }, 1000);
  });

  btnrecruit.addEventListener("click", function () { 
      this.classList.add('active');
      this.disabled = true;
      btnentersystem.classList.remove('active');
      btnentersystem.disabled = true;

      setTimeout(() => {
          this.classList.remove("active");
          this.disabled = false;
          btnentersystem.disabled = false;
      }, 1000);
  });
});

function updateMainContentByHash() {
  const urlcontent = window.location.hash || '#home';
  const maincontent = document.querySelectorAll('main > section');

  maincontent.forEach(content => {
    const contentId = `#${content.id}`;
    if (contentId === urlcontent) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', updateMainContentByHash);
window.addEventListener('hashchange', updateMainContentByHash);