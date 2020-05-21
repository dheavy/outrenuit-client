import Fuse from 'fuse.js';

const fuzzySearchOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  keys: [
    'text', 'title', 'transcripted_at'
  ]
};

export const fuzzy = (list, pattern, options = fuzzySearchOptions) => {
  return new Fuse(list, options).search(pattern);
}
