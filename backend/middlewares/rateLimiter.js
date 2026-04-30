import rateLimit, { ipKeyGenerator } from "express-rate-limit";

//for all routes
//to protect from DOS attack - denial of service
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 1000, //1000 request - it can be from 20 10users using same wifi , let it be loose
  legacyHeaders: false, //remove old header format
  standardHeaders: true, //send modern header : eg:- Ratelimit-Remaining
  message: {
    error: "Too many request. Try again after 15 min",
  },
});

export const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 3,
  legacyHeaders: false,
  standardHeaders: true,

  /*
   by default : key:req.ip
    1. attackers can change IP
    2. others using same wifi gets blocked when any one of them fails thrice
  */
  keyGenerator: (req) => {
    const email = req.body.email;
    const ip = ipKeyGenerator(req);

    //per user account
    return email ? `email:${email}-ip:${ip}` : `ip:${ip}`;
  },
  skipSuccessfulRequests: true, //do not count successful request
  message: {
    error: "Too many attempts. Try again after 1 min",
  },
});

//to protect from brute force attack - add second layer in login
//temporarily block user
export const loginSlowLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  legacyHeaders: false,
  standardHeaders: true,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    const email = req.body.email;
    const ip = ipKeyGenerator(req);
    return email ? `email:${email}` : `ip:${ip}`;
  },
  message: {
    error: "Too many attempts. Try again after 15 mins",
  },
});
