function clearSearchField() {
  document.getElementById('search-input').value = "";
}

var langMatch = location.pathname.match(/^\/(\w{2})(?:\/|\z)/);
var lang = langMatch && langMatch[1];
var indexKey = 'BIBLIO_TEST';

var client = algoliasearch('9AYJ75P776', '954e49de116dadc316eac02a0aec736e');
var index = client.initIndex(indexKey);

autocomplete(
  '#search-input',
  {
    hint: false
  },
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
    displayKey: 'title',
    templates: {
      suggestion: function(suggestion) {
        var contentMatch = '';
        var heading = '';

        if( suggestion.headings.length){
          heading =  [
            '<span class="aa-suggestion-heading"> &bull; ',
            suggestion.headings[0],
            '</span>'
          ].join('');
        }

        if (suggestion._snippetResult.content.matchLevel !== 'none') {
          contentMatch = [
            '<div class="aa-suggestion-content">',
            suggestion._snippetResult.content.value,
            '</div>'
          ].join('');
        }

        return [
          '<div class="aa-suggestion-title">',
          suggestion._highlightResult.title.value,
          heading,
          '</div>',
          contentMatch
        ].join('');
      }
    }
  }
).on('autocomplete:selected', function(event, suggestion, dataset) {
  var url = suggestion.url;

  if(suggestion.anchor) {
    url += '#' + suggestion.anchor;
  }

  location.href = url;
});;
