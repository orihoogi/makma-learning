
# Express Auth API
JWT based authentication strategy with MongoDB

### Installation

```bash
$ npm install
$ mongod
$ npm run dev
```

### Config

__/config/dev.js__
```js
module.exports = {
  jwtSecret: 'make up your own secret',
  mongoURI: 'mongodb://localhost:auth/auth'
}
```
