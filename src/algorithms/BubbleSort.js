import { swap } from "./Utility";
export function getBubbleSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];
  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - i - 1; j++) {
      animations.push([[j, j + 1], false]); //for comparison
      if (copy[j + 1] < copy[j]) {
        animations.push([[j, copy[j + 1]], true]); //for swapping
        animations.push([[j + 1, copy[j]], true]);
        swap(copy, j, j + 1);
      }
    }
  }
  return animations;
}
