import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our TS server');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
