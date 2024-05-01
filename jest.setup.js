// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

require('dotenv').config({
    path: '.env'
})

jest.mock('./src/helpers/getEnvironments.js',()=>({
    getEnvironments: () => ({...process.env})
}))