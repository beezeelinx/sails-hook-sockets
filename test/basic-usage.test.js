/**
 * Module dependencies
 */

var Sails = require('sails').Sails;
var lifecycle = require('./helpers/lifecycle.helper');



describe('basic usage', function (){

  before(lifecycle.setup);

  it('should not crash', function (done){
    done();
  });

  it('should not crash after flinging a bunch of requests at it', function (done){

    io.socket.get('/hello');
    io.socket.get('/hello', {});
    io.socket.get('/hello', function (data, jwr){});
    io.socket.get('/hello', {}, function (data, jwr){});

    io.socket.post('/hello');
    io.socket.post('/hello', {});
    io.socket.post('/hello', function (data, jwr){});
    io.socket.post('/hello', {}, function (data, jwr){});

    io.socket.put('/hello');
    io.socket.put('/hello', {});
    io.socket.put('/hello', function (data, jwr){});
    io.socket.put('/hello', {}, function (data, jwr){});

    io.socket.delete('/hello');
    io.socket.delete('/hello', {});
    io.socket.delete('/hello', function (data, jwr){});
    io.socket.delete('/hello', {}, function (data, jwr){});

    done();
  });

  after(lifecycle.teardown);

});