import { USER_QUEUE } from "./config";
import redis from "./redis";

const publish = async () => {
  const message = {
    id: 1,
    name: "Lucas Munoz",
  };

  await redis.connect();

  await redis.publish(USER_QUEUE, JSON.stringify(message));
  console.log("Message published");

  await redis.disconnect();
};

publish();
