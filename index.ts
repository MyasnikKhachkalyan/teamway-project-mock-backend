import { createExpressOvenRoutes } from 'express-oven';
import express, { json, raw, text, urlencoded } from 'express';

const app = express();

app.use(json(), raw(), text());
app.use(urlencoded({ extended: true }));

app.use(createExpressOvenRoutes());
app.use((req, res) => {
  res.status(404);
  res.send({
    error: {
      message: `API "${req.url}" not found!`,
    },
  });
});


const port = process.env.PORT || 4469;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
