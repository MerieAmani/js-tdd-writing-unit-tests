import { pointsForWord } from '../utils';

describe('pointsForWord', () => {
  it('calculates the total points for a word (1 point per vowel, 2 per consonant)', () => {
    const word = 'test';
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it('handles uppercase and lowercase input', () => {
    const word = 'tEsT';
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it('returns 0 for an empty string', () => {
    const word = '';
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it('ignores non-alphabetic characters', () => {
    const word = 't3st!';
    const points = pointsForWord(word);
    expect(points).toBe(6); // Corrected expected value
  });

  it('throws an error for non-string input', () => {
    expect(() => pointsForWord(123)).toThrow('Input must be a string');
  });

  it('handles words with only vowels', () => {
    const word = 'aeiou';
    const points = pointsForWord(word);
    expect(points).toBe(5);
  });

  it('handles words with only consonants', () => {
    const word = 'bcdfg';
    const points = pointsForWord(word);
    expect(points).toBe(10);
  });

  it('handles words with mixed vowels and consonants', () => {
    const word = 'hello';
    const points = pointsForWord(word);
    expect(points).toBe(8);
  });

  it('handles words with spaces', () => {
    const word = 'he llo';
    const points = pointsForWord(word);
    expect(points).toBe(8);
  });

  it('handles words with special characters', () => {
    const word = 'h@e#l$l%o^';
    const points = pointsForWord(word);
    expect(points).toBe(8);
  });
});