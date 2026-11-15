import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// Lets Express read JSON sent in request bodies (req.body)
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'cinevault-api' });
});

export default app;