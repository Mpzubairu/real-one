// module.exports = {
//     Plugins:{
//         'autoprefixer':{},
//         'postcss-import':{}
//     },
// }
module.exports = {
    Plugins:[
        require('postcss-import'),
        require('autoprefixer'),
    ],
}