import fs from 'fs'
import path from 'path'
import Express from 'express'


const rawData = fs.readFileSync(
    path.join('server', 'api', 'character.json'),
    { encoding: 'utf8' }
  )
  const characterData = JSON.parse(rawData)
  
  // Make a router
  const router = new Express.Router()

  router.get('/character', (req, res) => {
      const characterSummary = {...characterData}
      res.json(characterSummary)
  })
  
export default router