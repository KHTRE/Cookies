'use strict';

const set = document.getElementById('set');
const get = document.getElementById('get');
const userName = document.getElementById('name-field');

function setCookie() {
  const str = `name=${userName.value}; expires=Fri, 31 Dec 2022 23:59:59 GMT`
  document.cookie = str;
  userName.value = '';
}

function getCookie() {
  const name = document.cookie.replace('name=', '');
  alert('Hello, ' + name);
}

set.addEventListener('click', () => {setCookie()})
get.addEventListener('click', () => {getCookie()})