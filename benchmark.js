/**
 * Classe Benchmark pour mesurer et comparer les performances de fonctions.
 * 
 * Exemple d'utilisation :
 * const benchmark = new Benchmark(1000, "Comparaison des algorithmes de Fibonacci");
 * benchmark.addTest(fibonacciRecursive, [30], "Récursive");
 * benchmark.addTest(fibonacciIterative, [30], "Itérative");
 * benchmark.addTest(fibonacciMemoization, [30], "Mémoization");
 * await benchmark.run();
 */
class Benchmark {
  /**
   * Constructeur de la classe Benchmark.
   * @param {list} params - Nombre d'itérations pour chaque test.
   * @param {string} suiteName - Nom de la suite de tests (optionnel).
   */
  constructor(params, suiteName = "Suite de tests") {
    this.tests = [];
    this.suiteName = suiteName;
    this.params = params;
  }

  /**
   * Ajoute une fonction à tester avec ses paramètres.
   * @param {Function} func - La fonction à tester.
   * @param {number} iterations - Le nombre d'itérations pour le test.
   * @param {string} name - Le nom du test (optionnel).
   */
  addTest(func, iterations, name = func.name) {
    this.tests.push({ func, iterations, name });
  }

  /**
   * Exécute tous les tests de manière asynchrone et affiche les résultats.
   * - Affiche les fonctions à tester, le nombre d'iterations et les parametres utilisés.
   * - Calcule et affiche le temps moyen d'exécution pour chaque fonction.
   * - Identifie et affiche la fonction la plus rapide et la plus lente.
   */
  async run() {
    const results = [];
    console.log(`\nSuite de tests : ${this.suiteName}`);
    
    // Afficher les fonctions à tester
    console.log("\nVersions de l'algorithme à tester :");
    this.tests.forEach((test, index) => {
      console.log(`- Version ${index + 1}: ${test.name}`);
    });
    console.log("\nParamètres utilisés :");
    console.log(this.params);
    console.log("-------------------------------------");

    //On parcours la list de fonctions à tester
    for (const [index, test] of this.tests.entries()) {
      const { func, iterations } = test;
      let totalTime = 0;

      //On appelle la fonction n fois
      for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        func(...this.params);
        const end = performance.now();
        totalTime += (end - start);
      }

      //On calcule le temps moyen et on affiche le resultat
      const averageTime = totalTime / iterations;
      console.log(`Nombre d'itération : ${iterations}`);
      console.log(`Test ${index + 1} - ${test.name}: Temps moyen d'exécution = ${averageTime.toFixed(4)} ms`);
      results.push({ name: test.name, averageTime });
    }
    
    console.log("-------------------------------------");

    // Trouver le plus rapide et le plus lent
    const fastest = results.reduce((prev, curr) => 
      (curr.averageTime < prev.averageTime) ? curr : prev
    );
    const slowest = results.reduce((prev, curr) => 
      (curr.averageTime > prev.averageTime) ? curr : prev
    );

    console.log(`\nVersion la plus rapide : ${fastest.name} (${fastest.averageTime.toFixed(4)} ms)`);
    console.log(`Version la plus lente : ${slowest.name} (${slowest.averageTime.toFixed(4)} ms)`);
  }
}

// Exportez la classe pour qu'elle puisse être importée
module.exports = { Benchmark };