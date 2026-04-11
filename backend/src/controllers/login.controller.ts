import { Request, Response } from "express";
import prisma from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../middleware/auth.middleware";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    // 1. Check if email or password are empty
    if (!email || !password) {
      res.status(400).json({ message: "email and password are required" });
      return;
    }

    // 2. Look for the user in our database using their email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Generic message to avoid user enumeration
      return;
    }

    // 3. Compare the typed password with the encrypted password in the DB
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    // 4. Everything matches! Create a login token
    const tokenPayload: JwtPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    } as jwt.SignOptions);

    // 5. Send the Token and User Info to the frontend
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("[login]", error);
    res.status(500).json({ message: "Error during login" });
  }
}
