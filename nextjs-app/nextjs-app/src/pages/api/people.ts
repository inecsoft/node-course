import type { NextApiRequest, NextApiResponse } from 'next'


export default function getPeople( req: NextApiRequest,  res: NextApiResponse) {
  res.status(200).json([{ name: 'John Doe'}, { lastname: 'pedro arteaga' }])
}