function isPrime(num) {
  // Angka 1 atau kurang dari 1 bukan bilangan prima
  if (num <= 1) {
    return false;
  }

  // Periksa apakah angka bisa dibagi habis oleh angka lain
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPrime
};