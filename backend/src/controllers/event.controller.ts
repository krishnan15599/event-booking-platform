import { Request, Response } from "express";
import prisma from "../prisma/client";
import { JwtPayload } from "../middleware/auth.middleware";

// POST /api/events → Create event (Admin)
export async function createEvent(req: Request, res: Response): Promise<void> {
  try {
    const { title, description, city, startTime, endTime } = req.body;
    const user = (req as any).user as JwtPayload;

    // 1. Check if required fields like title and city are missing
    if (!title || !city || !startTime || !endTime) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // 2. Create the event in the database
    const event = await prisma.event.create({
      data: {
        title,
        description,
        city,
        startTime: new Date(startTime), // Convert text date to a real Date object
        endTime: new Date(endTime),
        createdBy: user.userId,
      },
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("[createEvent]", error);
    res.status(500).json({ message: "Error creating event" });
  }
}

// GET /api/events → List all events (Public)
export async function listEvents(req: Request, res: Response): Promise<void> {
  try {
    const { city, status } = req.query;

    // Search for events. If 'city' or 'status' is provided in the URL, filter the results.
    const events = await prisma.event.findMany({
      where: {
        city: city ? String(city) : undefined,
        status: status ? (String(status) as any) : undefined,
      },
      orderBy: { startTime: "asc" }, // Show nearest events first
    });

    res.json(events);
  } catch (error) {
    console.error("[listEvents]", error);
    res.status(500).json({ message: "Error fetching events" });
  }
}

// GET /api/events/:id → Event details
export async function getEventDetails(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        shows: {
          include: {
            venue: true,
          },
        },
      },
    });

    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    res.json(event);
  } catch (error) {
    console.error("[getEventDetails]", error);
    res.status(500).json({ message: "Error fetching event details" });
  }
}

// PUT /api/events/:id → Update event (Admin)
export async function updateEvent(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { title, description, city, startTime, endTime, status } = req.body;

    const event = await prisma.event.findUnique({ where: { id } });

    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    // Update the event with the new details provided
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title,
        description,
        city,
        startTime: startTime ? new Date(startTime) : undefined, // Only update if new date is sent
        endTime: endTime ? new Date(endTime) : undefined,
        status,
      },
    });

    res.json(updatedEvent);
  } catch (error) {
    console.error("[updateEvent]", error);
    res.status(500).json({ message: "Error updating event" });
  }
}

// DELETE /api/events/:id → Delete event (Admin)
export async function deleteEvent(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({ where: { id } });

    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    await prisma.event.delete({ where: { id } });

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("[deleteEvent]", error);
    res.status(500).json({ message: "Error deleting event" });
  }
}
