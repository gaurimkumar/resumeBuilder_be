const jsonServer= require('json-server')
// common js

const server =jsonServer.create()
// creata a server using json-server

server.use(jsonServer.defaults())
// default returns middlewares (parsing,stringify, resource sharing b/w diff origins) used by JSON server - tells our server to use these middlewares

const route=jsonServer.router('db.json')
// tells the place where the data should be saved

server.use(route)

server.listen(3000,()=>{
    console.log('Server is running on portno 3000')
})