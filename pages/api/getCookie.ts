import AES from 'crypto-js/aes';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function GET(request: NextApiRequest, res: NextApiResponse){
  const cook = request.headers['set-cookie']
  const cookie = decodeURIComponent(cook ? cook[0].replace('token=', '') : '');
  var encrypted = AES.encrypt(cookie, process.env.SECRET as string);

  return res.status(200).json({cookie: encrypted.toString()})
}
