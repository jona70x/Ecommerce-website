import type {NextApiRequest, NextApiResponse} from 'next'
import data from '../../dev-data/products.json'

export default (req: NextApiRequest, res: NextApiResponse) => {

if(req.method === 'GET'){
  res.status(200).json(data)

}

}