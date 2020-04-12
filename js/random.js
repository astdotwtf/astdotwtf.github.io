const myArray = [
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733979968&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578830938%3Fsecret_token%3Ds-QM7Al&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572511663%3Fsecret_token%3Ds-0uQt0&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/562212333%3Fsecret_token%3Ds-KOB7z&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/527429922%3Fsecret_token%3Ds-yBwXG&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499987521%3Fsecret_token%3Ds-tfN3P&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/488220393%3Fsecret_token%3Ds-9HWS7&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/468387804%3Fsecret_token%3Ds-LBfKX&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/448839864&color=%23242424&inverse=false&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/434215632%3Fsecret_token%3Ds-V6Kwu&color=%23242424&inverse=false&auto_play=true&show_user=false',
];

const rand = myArray[Math.floor(Math.random() * myArray.length)];
document.getElementById('iframe').src = rand;

document.getElementById('left-button').onclick = function () {
  const rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById('iframe').src = rand;
}

document.getElementById('right-button').onclick = function () {
  const rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById('iframe').src = rand;
}
