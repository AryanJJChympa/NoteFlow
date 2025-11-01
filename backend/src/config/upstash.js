import {Ratelimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import dotenv from "dotenv";

dotenv.config();
//I want to have 100 requests per 60 seconds
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
    // redis: Redis.fromEnv(),
     redis,
    limiter:Ratelimit.slidingWindow(100, "60 s"),
})


export default ratelimit