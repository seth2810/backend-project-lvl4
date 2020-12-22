#! /usr/bin/env node
import micro from 'micro';

const port = process.env.PORT || 5000;
const address = '0.0.0.0';

const server = micro(() => 'Welcome to Micro');

server.listen(port, address, () => {
  console.log(`Server is running on port: ${port}`);
});
