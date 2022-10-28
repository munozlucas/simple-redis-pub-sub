import * as redis from "redis";
import config from "./config";

const redisConnection = redis.createClient({
  socket: {
    host: config.host,
    port: config.port,
  },
  password: config.password,
});

export default redisConnection;
