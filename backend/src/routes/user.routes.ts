import { Router, Request, Response } from "express";
import prisma from "../prisma/client";
import { authenticateToken, JwtPayload } from "../middleware/auth.middleware";

const router = Router();

// GET /api/users/me  (protected)
router.get("/me", authenticateToken, async (req: Request, res: Response) => {
  try {
    const { userId } = (req as any).user as JwtPayload;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("[me]", error);
    res.status(500).json({ message: "Error fetching user" });
  }
});

export default router;