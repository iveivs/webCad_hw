const arrForJson = ['qwer', 'asdf', 6, 'zxcv', true, 'oiuy']

const json = JSON.stringify(arrForJson)

console.log(json); // ["qwer","asdf",6,"zxcv",true,"oiuy"]


const string = '["qwer","asdf",6,"zxcv", false,"oiuy"]'

const arrFromString = JSON.parse(string)
console.log(arrFromString); // [ 'qwer', 'asdf', 6, 'zxcv', false, 'oiuy' ]

const tovar = {
    name: 'product',
    bolean: true,
    number: 4,
    arr: [1, 2, 'one'],
    obj: {
        one: 1,
        two: 2,
        somearr: ['odin', 'dva', 3]
    }
}

const objToJson = JSON.stringify(tovar)
console.log(objToJson);

const jsonString = '{"name":"product","bolean":true,"number":4,"arr":[1,2,"one"],"obj":{"one":1,"two":2,"somearr":["odin","dva",3]}}'
const parseJsonString = JSON.parse(jsonString)
console.log(parseJsonString);