const _=require('lodash')
const itmes=[1,[2,[3,[4]]]]
const newitems=_.flattenDeep(itmes)
console.log(newitems);