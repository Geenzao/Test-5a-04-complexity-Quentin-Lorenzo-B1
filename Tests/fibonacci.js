const { Benchmark } = require('./../benchmark.js');

function fibonacciDummy(n) {
  if (n <= 1) return n;
  return fibonacciDummy(n - 1) + fibonacciDummy(n - 2);
}

function fibonacciOptimize(n,  memo = {}) {
  if (n <= 1) return n;
  
  // Vérifie si la valeur est déjà en cache
  if (memo[n]) return memo[n];
  
  // Calcule et stocke la valeur dans le cache
  memo[n] = fibonacciOptimize(n - 1, memo) + fibonacciOptimize(n - 2, memo);
  return memo[n];
}


let n = 42

// Exemple d'utilisation
const benchmark = new Benchmark([n], "Comparaison des algorithmes de fibonnacci");

// Ajout des fonctions à tester
benchmark.addTest(fibonacciDummy, 10, "fibonnacci non optimisé");
benchmark.addTest(fibonacciOptimize, 10, "fibonnacci optimisé");

// Lancement des tests
benchmark.run(); 