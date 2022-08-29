import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

import { getTodo } from './util/getTodo';
import { postTodo } from './util/postTodo';
import { putTodo } from './util/putTodo';
import { deleteTodo } from './util/deleteTodo';
import { errorHandler } from './util/errorHandler';

const PORT = process.env.PORT || 4000; // port

const app = express();
app.use(
  cors({
    origin: 'https://todobyhal.netlify.app/',
  })
);
app.use(express.json());

// Handling requests
app.get('/', getTodo);
app.post('/', postTodo);
app.delete('/', deleteTodo);
// app.param('id', paramHandler); // handle params
app.put('/', putTodo);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

exports.app = functions.https.onRequest(app);
