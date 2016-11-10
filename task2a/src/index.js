import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2A', (req, res) => {
	let a = parseInt(req.query.a) || 0;
	let b = parseInt(req.query.b) || 0;
	let result = a + b;
	res.send(result.toString());
});
	
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
