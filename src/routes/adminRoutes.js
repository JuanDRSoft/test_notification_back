var express = require('express')
var router = express.Router()
const webpush = require('web-push')

const publicVapidKey =
  'BBp-OzEUfXW-r-qIJ-R05QHR9aqrmozgrbh7oU8-P4OwWengKGaB0zk2Hr1SsTbnsRN_kY_9A25zmwDavRLlxZA'
const privateVapidKey = 'wEI2rhvU-ZXPWqa-JEhFVWJZRoMfZnWthZAu-i1xDGA'

webpush.setVapidDetails('mailto:juandirios2011@gmail.com', publicVapidKey, privateVapidKey)

router.route('/subscribe').post((req, res) => {
  const subscription = req.body
  res.status(201).json({})

  console.log('Subscripción recibida:', subscription)

  const payload = JSON.stringify({
    title: 'Notificación Push',
    body: 'Hola, has recibido una notificación push!'
  })

  webpush.sendNotification(subscription, payload).catch((error) => console.error(error))
})

module.exports = router
