const test = {
  name: 'hello world',
  else: 'hello world',
  age: '20',
};
const { name, ...usertest } = test;
console.log('🚀 ~ file: route.js:36 ~ usertest:', usertest);
console.log('🚀 ~ file: route.js:36 ~ name:', name);
