// 选择表单元素
const form = document.querySelector('form');

// 监听表单提交事件
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  console.log(`用户名：${username}，密码：${password}`);
});
