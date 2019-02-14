function predict(word) {
  //assumes words are lower cased and cleaned
  if (word in words) {
    return words[word];
  } else {
    return 0;
  }
}

function clean_split_words(full_string) {
  var cleaned = full_string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""),
  words = $.trim(cleaned).split(/\s/);
  return words;
}

function lowStemmer(string) {
  return stemmer(string.toLowerCase());
}

function predict_all(full_string) {
  var words = clean_split_words(full_string),
  final_val = 63.33;
  for(var i = 0; i < words.length; i++) {
    final_val += predict(lowStemmer(words[i]))*33.33333;
    if(final_val < 1)
      final_val = 1
  }
  return final_val;
}

function in_words(word) {
  return word in words
}
