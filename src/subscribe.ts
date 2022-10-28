import { USER_QUEUE } from "./config";
import redis from "./redis";

const subscribe = async () => {
  await redis.connect();

  await redis.subscribe(USER_QUEUE, (message) => {
    console.log(message);
  });
};

subscribe();
