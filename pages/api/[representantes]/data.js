import {NextApiRequest,NextApiResponse} from 'next'
import representante from '../../../utils/respresentante.json'


const handler = async (NextApiRequest, NextApiResponse)=>{
    
    try{
        const {method,query} = NextApiRequest
       
       
       
        switch(method){
            case 'GET':
                
                NextApiResponse.status(200).json({representante})
                break;
            default:
                NextApiResponse.status(405).json({message:'Mentado não suportado'}) 
                break
        }
       
    }catch(err){
        NextApiResponse.status(500).json({statusCode:500,message:err.message}) 
    }
}




export default handler