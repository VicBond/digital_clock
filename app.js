const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();

  const hours = now.getHours();

  console.log(hours);
};

setInterval(tick, 1000);