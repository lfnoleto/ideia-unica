import {NextApiRequest,NextApiResponse} from 'next'
import rest  from '../../../utils/respresentante.json'
import pesquisa from '../../../utils/pesquisa'

const hundler = async(NextApiRequest,NextApiResponse)=>{
    try{
        console.log(pesquisa) 
        const {method,query} = NextApiRequest
        switch (method) {
            case 'GET':
                NextApiResponse.status(200).json({rest})
                break;
        
            default:
                NextApiResponse.status(405).json({mensagem:'error POST NOT'})
                break;
        }
    }catch(err){
        NextApiResponse.status(500).json({statusCode:500,mensagem:err.message})
    }
}


export default hundler