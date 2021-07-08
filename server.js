const http =  require ('http');
 const server =http.createServer((req ,res )=>{
     res.end('Probando AWS')
 })

 server.listen(3000)
 console.log('Server runnign port:3000')