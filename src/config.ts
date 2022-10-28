import dotenv from "dotenv";

dotenv.config();

const config = {
  port: Number(process.env.PORT),
  host: process.env.HOST,
  password: process.env.PASSWORD,
};

export const USER_QUEUE = "user";

export default config;
