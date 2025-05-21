import { Router } from 'express';
import TicketController from './ticket.controller';

const router = Router();

router.post('/create', async (req, res): Promise<void> => {
  if (req.body?.topic && req.body?.message) {
    res.send(await TicketController.create(req.body.topic, req.body.message));
  } else {
    res.status(400).send({message: 'topic and message required'});
  }
});

router.put('/progress', async (req, res): Promise<void> => {
  if (req.body?.id) {
    res.send(await TicketController.inProgress(req.body.id));
  } else {
    res.status(400).send({message: 'id required'});
  }
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
