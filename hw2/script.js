const errorMessage = document.getElementById('error-message');
let countdown = 5;
errorMessage.innerHTML += `<p>將在 ${countdown} 秒後自動刷新。</p>`;
const timer = setInterval(() => {
    if (countdown === 0) {
        clearInterval(timer);
        window.location.reload();
    } else {
        countdown--;
    }
}, 1000);
