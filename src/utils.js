export function pointsForWord(word) {
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let points = 0;

  for (const char of word.toLowerCase()) {
    if (/[a-z]/.test(char)) { // Only process alphabetic characters
      points += vowels.has(char) ? 1 : 2;
    }
  }

  return points;
}
