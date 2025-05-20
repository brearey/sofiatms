import { Router } from 'express';
import { create } from './ticket.controller';

const router = Router();

router.post('/create', (req, res) => {
  if (!req.body.topic || !req.body.message) {
    res.status(400).send({message: "Error in parameters"})
  }
  res.send(create(req.body.topic, req.body.message));
});
router.put('/progress', (req, res) => {
  res.send({ message: 'progress' });
});
router.put('/complete', (req, res) => {
  res.send({ message: 'complete' });
});
router.put('/cancel', (req, res) => {
  res.send({ message: 'cancel' });
});
router.put('/cancel-all', (req, res) => {
  res.send({ message: 'cancel-all' });
});
router.get('/', (req, res) => {
  res.send({ message: 'get' });
});

export default router;
