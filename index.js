import { listen } from './src/app.js';
import { conn } from './src/db.js';

const port = process.env.PORT || 3001

conn.sync({ force: true }).then(async() => {  
  listen(port, () => {
    console.log(`Server on port ${port}`);
  });
});
