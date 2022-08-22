//http://localhost:3001/api/vehicles

import type { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';


export default async function getAllVehicles( req: NextApiRequest,  res: NextApiResponse) {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
    
  });
  const vehicle = await db.all('SELECT * FROM vehicle')
  console.log('ALL PEOPLE', JSON.stringify(vehicle, null, 2));

  res.json(vehicle)
}
