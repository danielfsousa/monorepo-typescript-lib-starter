const url = require('url')
const { execSync } = require('child_process')
const pkg = require('../package.json')

const ghToken = process.env.GH_TOKEN
const repoUrl = pkg.repository?.url
const authorName = pkg.author?.name
const authorEmail = pkg.author?.email

if (!repoUrl) {
  throw new Error('Repository URL does not exist in package.json')
}

if (!authorName) {
  throw new Error('Author name does not exist in package.json')
}

if (!authorEmail) {
  throw new Error('Author email does not exist in package.json')
}

const parsedUrl = new url.URL(repoUrl)
const repository = parsedUrl.host + parsedUrl.pathname

console.log('Deploying docs...')

const script = `
  cd docs
  touch .nojekyll
  git init
  git add .
  git config user.name "${authorName}"
  git config user.email "${authorEmail}"
  git commit -m "docs(docs): update gh-pages"
  git push --force --quiet "https://${ghToken}@${repository}" main:gh-pages
`

execSync(script, { stdio: 'inherit' })

console.log('Docs deployed.')
