class mapWordsToCount {
  constructor(inputString) {
      this.wordsToCounts = new Map(); 
      this.populateWordsToCounts(inputString); 
  }
  // iterate over the input string, split the words, then pass to addWordToMap()
  populateWordsToCounts(inputString) {
      let currentWordStartIndex = 0; 
      let currentWordLength = 0; 
      for (let i = 0; i < inputString.length; i++) {
          // return the character at index i 
          const character = inputString.charAt(i); 
          // if we reach the end of the string, we check if the last character is a ltter and add the last word to our map 
          if (i === inputString.length - 1) {
              if (this.isLetter(character)) {
                  currentWordLength += 1; 
              }
              if (currentWordLength > 0) {
                  const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength); 
                  this.addWordToMap(word)
              }
          // if we reach a space or emdash, we know we're at the end of a word, so we add it to our map and reset our current word 
          } else if (character === ' ' || character === '\u2014') {
              if (currentWordLength > 0) {
                  const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength); 
                  this.addWordToMap(word); 
                  currentWordLength = 0; 
              }
          // we want to make sure we split on ellipses so if we get two periods in a row,
          // we add the current word to our map and reset our current word 
          } else if (character === '.') {
              // if we're not at the end of the string AND the following character is a period
              if (i !== inputString.length - 1 && inputString.charAt(i + 1) === '.') {
                  if (currentWordLength > 0) {
                      const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength); 
                      this.addWordToMap(word); 
                      currentWordLength = 0; 
                  }
              }
          // if the character is a letter or an apostrophe, we add it to our current word    
          } else if (this.isLetter(character) || character === '\'') {
              if (currentWordLength === 0) {
                  currentWordStartIndex = i
              }
              currentWordLength += 1; 
          // if the character is a hyphen, we want to check if its surrounded by letters, if it is, we add it to our current word    
          } else if (character === '-') {
              if (i > 0 && this.isLetter(inputString.charAt(i + 1)) && this.isLetter(inputString.charAt(i - 1))) {
                  if (currentWordLength === 0) {
                      currentWordStartIndex = i; 
                  }
                  currentWordLength += 1; 
              } else {
                  if (currentWordLength > 0) {
                      const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength); 
                      this.addWordToMap(word); 
                      currentWordLength = 0; 
                  }
              }
          }
      }
  }
  // populate the word to the map
  addWordToMap(word) {
      // track counts
      let newCount; 
      // if the word is already in the map, we increment its count
      if (this.wordsToCounts.has(word)) {
          newCount = this.wordsToCounts.get(word) + 1; 
          this.wordsToCounts.set(word, newCount); 
      // if a lowercase version is already in the map, we know our input word is uppercase
      // we only include uppercase if its always uppercase
      // so we increment the lowercase versions count 
      } else if (this.wordsToCounts.has(word.toLowerCase())) {
          newCount = this.wordsToCounts.get(word.toLowerCase()) + 1; 
          this.wordsToCounts.set(word.toLowerCase(), newCount); 
      // If an uppercase version is in the map, we know our input word must be lowercase.
      // since we only include uppercase words if they're always uppercase, we add the
      // lowercase version and give it the uppercase version's count, then delete the uppercase version
      } else if (this.wordsToCounts.has(this.capitalize(word))) {
          newCount = this.wordsToCounts.get(this.capitalize(word)) + 1; 
          this.wordsToCounts.set(word, newCount); 
          this.wordsToCounts.delete(this.capitalize(word))
      // otherwise if the word is not in the map at all, we add it to the map
      } else {
          this.wordsToCounts.set(word, 1)
      }
  }
  // capitalize word
  capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1); 
  }
  // check to see if the character is a letter, will return true if it is
  isLetter(character) {
      return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0; 
  }
}