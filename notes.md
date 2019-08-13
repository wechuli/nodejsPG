## What Exactly in Node.js

Node.js uses an event-driven, non blocking I/O model that makes it lightweight and efficient. Node.js packaged ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node os an event-dirven, non-blocking language. What is I/O? I/O is something that your application does all of the time. When you're reading or writing to a database, that is I/O, which is short for input/output.
This is the communication from your Node application to other things inside of the Internet of Things. This could be a database read and write request, you may be changing some files on your filesystem, or you may be making an HTTP request to a separate web server, such
as a Google API for fetching a map for the user's current location. All of these use I/O, and I/O takes time.
The non-blocking I/O is great. That means, while one user is requesting a URL from Google, other users can be requesting a database file read and write access; they can be requesting all sorts of things without preventing anyone else from getting their work done.

Node.js is single threaded, which means your application runs on one single thread, but since we have non-blocking I/O, that's not a problem.

## Debugging NodeJS Applications

- Syntax Errors
- Logical Errors

### Debugging NodeJS Apps

- **Logging** - using console.log
- **node debugger** - This is node's built in debugging tool which integrates with V8 and the chrome browser. Like console.log, the debugger needs to be added at a specific point in your application. We can use Chrome to debug our applications and look at various points during its execution.
  This can be achieved using `node inspect app.js` command and navigating to `chrome://inspect/#devices` on Google Chrome. You will see the running application to which you can connect to and start debugging.

### Error Messages

The error message spit out by an exception offers a starting point to decoding our NodeJS application. Below the error message, we have a stack trace - This contains a trace of all the functions that are running to get to the point where the code throws an error. The first line after the message contains the most useful information - the file that the exception occurred in. You look at the stack Trace from top to bottom.

### Asynchronous Basics

- **The Call Stack** - The Call Stack is a simple data structure provided by the V8 engine.It keeps track of the functions currently executing and the statements that are fired.The Call Stack can do two things:
    - You can add something on top of it
    - You can remove the top item
- **The Call Back Queue** - The Job of the Call back queue is to maintain a list of all of the callback functions that are ready to get executed


