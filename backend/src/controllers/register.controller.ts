import { Request, Response } from "express";
import prisma from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../middleware/auth.middleware";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body;

    // 1. Check if the user forgot to provide any details
    if (!name || !email || !password) {
      res.status(400).json({ message: "name, email and password are required" });
      return;
    }

    // 2. Check if someone is already registered with this email
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // 3. Encrypt the password so it's not stored as plain text
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Save the new user into our Database
    const user = await prisma.user.create({
      data: { name, email, passwordHash: hashedPassword },
    });

    // 5. Create a "Token" (Security Key) so the user stays logged in
    const tokenPayload: JwtPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    } as jwt.SignOptions);

    // 6. Send everything back to the user (Success!)
    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("[register]", error);
    res.status(500).json({ message: "Error creating user" });
  }
}
