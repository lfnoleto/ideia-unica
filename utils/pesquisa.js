import respresentante from './respresentante.json'
var request = require('request');

const  pesquisa = async ()=>{
   const representResult = JSON.parse(representative)
   const cnpj = await request(`https://www.receitaws.com.br/v1/cnpj/02635522000195`, function(error, response, body) {
      return body
   });
   return cnpj
}


export default pesquisa