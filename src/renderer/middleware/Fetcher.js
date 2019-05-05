import fs from 'fs'

import { MOCK_PAGES } from '../assets/MOCK_DATA'

const fileName = '~/.journal.json'

class _Fetcher {
  constructor () {
    if (fs.existsSync(fileName)) {
      fs.readFileSync(fileName, 'utf-8', (err, data) => {
        if (err) {
          alert('An error ocurred reading the file :' + err.message)
          // create a .journal.json
          return
        }

        // Change how to handle the file content
        console.log('The file content is : ' + data)
      })
    } else {
      const file = fs.createWriteStream(fileName)
      file.write(
        JSON.stringify({
          // TODO: Make this use an app version.
          version: '0.1',
          pages: []
        })
      )
      file.end()
    }
    try {
    } catch (err) {}
  }

  getAllPages () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(MOCK_PAGES)
      }, 300)
    })
  }
}

export let Fetcher = new _Fetcher()
