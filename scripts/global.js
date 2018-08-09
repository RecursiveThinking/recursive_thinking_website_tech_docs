// global MD Parser setup variable.  Can be accessed as 'md' in any setup JS file.

var md = window.markdownit({
  html: true,  // Enable HTML tags in source
//   xhtmlOut:     false,        // Use '/' to close single tags (<br />).
//                               // This is only for full CommonMark compatibility.
//   breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-'  // CSS language prefix for fenced blocks. Can be
//                         // useful for external highlighters.
});