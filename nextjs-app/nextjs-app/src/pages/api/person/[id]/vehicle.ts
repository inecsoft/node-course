import type { NextApiRequest, NextApiResponse } from 'next'


export default function getAllVehiclesByPeopleById(req: NextApiRequest, res: NextApiResponse) {

    res.json({ byId: req.query.id , message: 'getAllVehiclesByPeopleById'});
    
}