function toggle(items) {
  let posActual = -1;
  const numPos = items.length - 1;
  return () => {

    if (posActual < numPos) {
      posActual++;
    } else {
      posActual = 0;
    }

    return items[posActual];
  }
}

const hello = toggle(['hello']);
const onOff = toggle(['on', 'off']);
const speed = toggle(['slow', 'medium', 'fast']);

console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"

console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
