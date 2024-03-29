// src/pages/api/signup

import type { NextApiRequest, NextApiResponse } from "next"
import handler from "../../middleware/_defaultHandler"

export default handler.post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password1, password2 } = req.body

    const errors: string[] = getFormErrors(username, password1, password2)
    if (errors.length > 0) {
      return res.status(400).json({ error: errors })
    }
  }
)

const getFormErrors = (
  username: string,
  password1: string,
  password2: string
) => {
  const errors: string[] = []
  if (!username || !password1 || !password2) {
    errors.push("All fields are required")
  }
  if (password1.length < 6) {
    errors.push("Password must be at least 6 characters")
  }
  if (password1 !== password2) {
    errors.push("Passwords do not match")
  }
  return errors
}