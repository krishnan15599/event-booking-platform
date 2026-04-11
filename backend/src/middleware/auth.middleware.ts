import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // The token usually looks like "Bearer <token>"

  // 1. If there's no token, the user is not allowed in
  if (!token) {
    res.status(401).json({ message: "Access token missing" });
    return;
  }

  try {
    // 2. Try to unlock and read the token using our Secret Key
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    (req as any).user = decoded; // Save the user info into the request for later use
    next(); // Move to the next step
  } catch {
    // 3. If the token is fake or expired, block the user
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

export function authorizeAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const user = (req as any).user as JwtPayload;

  // Check if the logged-in user has the 'ADMIN' rank
  if (!user || user.role !== "ADMIN") {
    res.status(403).json({ message: "Admin access required" });
    return;
  }

  next(); // If they are an admin, let them proceed
}
