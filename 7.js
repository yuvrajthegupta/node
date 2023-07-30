const path=require('path')
console.log(path.sep);
const filepath=path.join('/content','subfolder','test.txt')
console.log(filepath);
const filepaths=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(filepaths);
const basename=path.basename(filepath)
console.log(basename);