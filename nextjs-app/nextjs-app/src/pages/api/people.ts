import type { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';


export default async function getPeople( req: NextApiRequest,  res: NextApiResponse) {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
    
  });
  const people = await db.all('SELECT * FROM person')
  // const people = await db.all('SELECT * FROM person');
  console.log('ALL PEOPLE', JSON.stringify(people, null, 2));

  res.json(people)
}

///api/people