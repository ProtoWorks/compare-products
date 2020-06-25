const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'lint-staged',
      'rimraf docs',
      'rimraf build',
      'npm run build',
      'mve build docs',
      'git add docs'
    ])
  }
}
