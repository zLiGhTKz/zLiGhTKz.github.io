// 等待 5 秒
setTimeout(function() {
    // 移除 loader，顯示內容
    document.querySelector('.container').removeChild(document.querySelector('.loader'));
    document.querySelector('.container').innerHTML = `
    <h1>Video Title</h1>
    <p>Video Description</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `;
}, 5000);
