const glob = require('glob'),
  path = require('path')

let globPath = {
  js: './src/modules/**/*.js',
  html: './src/modules/**/*.html'
}

// vue multi entries
function getEntries(globPath) {
  let entries = {},
    basename,
    tmp,
    pathname

  glob.sync(globPath).forEach((entry) => {
    basename = path.basename(entry, path.extname(entry))
    tmp = entry.split('/').splice(-3)
    pathname = tmp.splice(0,1) + '/' + basename
    entries[pathname] = entry
  })
  return entries
}
// console.log(getEntries(globPath.js))

// entries js && html
exports.entriesJs = getEntries(globPath.js)
exports.entriesHtml = getEntries(globPath.html)