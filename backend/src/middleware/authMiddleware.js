import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
// import { isTokenBlacklisted } from "../controllers/authController.js";
import { redis } from "../config/upstash.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // 1. Check if token is blacklisted
      const isBlacklisted = await redis.get(token)
      if (isBlacklisted) {
        return res.status(401).json({ message: "Token expired. Please log in again." });
      }

      
      // 2. Verify JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 3. Find user in DB
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return res.status(401).json({ message: "User not found. Please register again." });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Protect middleware error:", error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default protect;
