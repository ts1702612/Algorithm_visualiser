 import { swap } from "./Utility";

 export function getQuickSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];
  quickSort(copy, 0, copy.length - 1, animations);
  return animations;
 }

function quickSort(arr, left, right, animations) {
 }

