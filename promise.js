const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs = require('fs/promises')
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const dataFile = './external.js'
const utf8 = 'utf-8'

const promiseOutput = async (args) => {

  try {
    let hasil = [];
    const hasilixx = await promiseTheaterIXX(fs.readFile(dataFile, utf8))
    const hasilvgc = await promiseTheaterVGC(fs.readFile(dataFile, utf8))
    hasil.push(hasilixx)
    hasil.push(hasilvgc)

    if (args === 'marah') {
      const hasilixx2 = hasil[0].filter((a) => a.hasil == 'marah')
      const hasilvgc2 = hasil[1].filter((a) => a.hasil == 'marah')
      return hasilixx2.length + hasilvgc2.length
    }
    else {
      const hasilixx2 = hasil[0].filter((a) => a.hasil == 'tidak marah')
      const hasilvgc2 = hasil[1].filter((a) => a.hasil == 'tidak marah')
      return hasilixx2.length + hasilvgc2.length
    }
  }
  catch (err) {
    return err
  }
}

module.exports = {
  promiseOutput,
};
