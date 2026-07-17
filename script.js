document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribeForm');
  const emailInput = document.getElementById('emailInput');
  const message = document.getElementById('formMessage');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (form && emailInput && message) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();

      if (!email) {
        message.textContent = '请输入邮箱后再订阅。';
        return;
      }

      message.textContent = `感谢订阅，${email} 已加入衣绘会员名单。`;
      form.reset();
    });
  }
});
