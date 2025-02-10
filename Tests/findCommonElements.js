const { Benchmark } = require('./../benchmark.js');

function findCommonElementsDummy(array1, array2) {
  let commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        commonElements.push(array1[i]);
      }
    }
  }
  return commonElements;
}

function findCommonElementsOptimize(array1, array2) {
  let commonElements = [];
  let set = new Set();
  array1.forEach((num) => set.add(num));
  for (let i = 0; i < array2.length; i++) {
    if (set.has(array2[i])) commonElements.push(array2[i]);
  }
  return commonElements;
}

const array1 = [];
const array2 = [];
for (let index = 0; index < 100000; index++) {
  array1[index] = index;
  array2[index] = index * 2;
}


const benchmarkfindCommonElements = new Benchmark([array1, array2], "Comparaison des algorithmes de findCommonElements");

benchmarkfindCommonElements.addTest(findCommonElementsDummy, 10);
benchmarkfindCommonElements.addTest(findCommonElementsOptimize, 10);

benchmarkfindCommonElements.run(); 