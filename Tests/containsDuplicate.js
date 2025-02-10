const { Benchmark } = require('./../benchmark.js');

function containsDuplicateDummy(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsDuplicateOptimize(array) {
    let set = new Set();
    for (let i = 0; i < array.length; i++) {
        if (set.has(array[i]))
            return true;
        set.add(array[i]);
    }
    return false;
}

const array = [];
for(let index = 0; index < 100000; index++)
{
    array[index] = index;
}

const benchmarkContainsDuplicate = new Benchmark(array, "Comparaison des algorithmes de containsDuplicate");

benchmarkContainsDuplicate.addTest(containsDuplicateDummy, 10, "contains Duplicate Dummy");
benchmarkContainsDuplicate.addTest(containsDuplicateOptimize, 10);

benchmarkContainsDuplicate.run();