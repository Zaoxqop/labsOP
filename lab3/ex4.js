'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  m4: 'not func xd',
  m5: 5,
  m6 : function (x,y,z,a,b) {
    return [x,y,z,a,b];
  }
}

const funcs = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};

console.log(funcs(iface));