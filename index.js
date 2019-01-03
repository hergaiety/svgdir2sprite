const fs = require('fs')
const async = require('async')
const svgSprite = require('svg2sprite')
const { join } = require('path')
const sprite = svgSprite.collection()

const isSVG = (filename) => filename.split('.').pop() === 'svg'
const iconName = (filename) => filename.split('.')[0]

function saveSpritesheet (path, spritesheet) {
  if (path.indexOf('.svg') === -1) throw new Error('Error: Please specify a filename ending with .svg')

  fs.writeFile(path, spritesheet, error => {
    if (error) throw error
  })
}

function readSprite (filename, file) {
  sprite.add(iconName(filename), `<svg>${file}</svg>`)
}

function allSpritesRead (pathBuild) {
  let spritesheet = sprite.compile()

  if (pathBuild) {
    saveSpritesheet(pathBuild, spritesheet)
  }

  return spritesheet
}

function generate (pathSrc, pathBuild) {
  return new Promise((resolve, reject) => {
    fs.readdir(pathSrc, (error, filenames) => {
      if (error) reject(error)

      async.eachSeries(filenames.filter(isSVG), (filename, cb) => {
        fs.readFile(join(pathSrc, filename), (error, fileData) => {
          if (error) reject(error)

          readSprite(filename, fileData)
          cb()
        })
      }, (error) => {
        if (error) reject(error)

        resolve(allSpritesRead(pathBuild))
      })
    })
  })
}

module.exports = generate
