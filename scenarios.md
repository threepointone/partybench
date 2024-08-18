### Scenarios

- One Durable Object, One producer (websocket), One consumer (websocket)
  - assume all mesasges are broadcast to all consumers
  - How many messages can be sent per second?

Instead of using a producer with a websocket, what if we just send HTTP POST requests to the object?

Ok, now turn knobs:

- Increase the number of producers
- Increase the number of consumers

- the message can be

  - a string (of size x)
  - a binary packet (of size x)
  - a json object (of size x)

- we might do some simple parsing in the eyeball worker for routing. does it affect performance?
