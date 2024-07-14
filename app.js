const express = require('express')
const bodyParser = require('body-parser')
const webpush = require('web-push')
const cors = require('cors') // Importar el paquete cors

const app = express()
app.use(bodyParser.json())

app.use(cors())

const publicVapidKey =
  'BBp-OzEUfXW-r-qIJ-R05QHR9aqrmozgrbh7oU8-P4OwWengKGaB0zk2Hr1SsTbnsRN_kY_9A25zmwDavRLlxZA'
const privateVapidKey = 'wEI2rhvU-ZXPWqa-JEhFVWJZRoMfZnWthZAu-i1xDGA'

webpush.setVapidDetails('mailto:juandirios2011@gmail.com', publicVapidKey, privateVapidKey)

app.post('/subscribe', (req, res) => {
  const subscription = req.body
  res.status(201).json({})

  console.log('Subscripción recibida:', subscription)

  const payload = JSON.stringify({
    title: 'Notificación Push',
    body: 'Hola, has recibido una notificación push!'
  })

  webpush.sendNotification(subscription, payload).catch((error) => console.error(error))
})

const port = 5001
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
