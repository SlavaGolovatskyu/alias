import {
  A1_A2,
  A2_B2,
  B2_C2,
  FIXED_PHRASES_A1_A2,
  FIXED_PHRASES_A2_B2,
  FIXED_PHRASES_B2_C2,
  IDIOMS_A1_A2,
  IDIOMS_A2_B2,
  IDIOMS_B2_C2,
} from "../words/words";
import { shuffle } from "./shuffle";

const levelToWordsMap = {
  1: A1_A2,
  2: A2_B2,
  3: B2_C2,
};

const fixedPhrasesMap = {
  1: FIXED_PHRASES_A1_A2,
  2: FIXED_PHRASES_A2_B2,
  3: FIXED_PHRASES_B2_C2,
};

const idiomsMap = {
  1: IDIOMS_A1_A2,
  2: IDIOMS_A2_B2,
  3: IDIOMS_B2_C2,
};

function getWordsForLevels(levels, map) {
  if (levels?.length === 0) {
    return Object.values(map).flat();
  }
  
  return levels.map(id => map[id] || []).flat();
}

export function getAllWords(selectedLevels) {
  let words = [];
  const filteredLevels = selectedLevels.filter(id => id <= 3);
  
  selectedLevels.forEach(id => {
    if (id <= 3) {
      words = [...words, ...(levelToWordsMap[id] || [])];
    }

    if (id === 4) {
      words = [...words, ...getWordsForLevels(filteredLevels, fixedPhrasesMap)];
    }

    if (id === 5) {
      words = [...words, ...getWordsForLevels(filteredLevels, idiomsMap)];
    }
  });

  return shuffle([...new Set(words)]);
}