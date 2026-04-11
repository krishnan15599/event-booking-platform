# 🌐 Event Booking Platform - API Documentation

Welcome to the official API documentation for the Event Booking Platform. Use these endpoints to manage users, events, and bookings.

---

## ⚙️ Base Configuration
- **Base URL**: `http://localhost:5000/api`
- **Content-Type**: `application/json`
- **Auth Strategy**: JWT Bearer Token (`Authorization: Bearer <token>`)

---

## 🔐 1. Authentication
**Base Path:** `/auth`

### 📝 Register User
Create a new user account.
- **Route**: `POST /register`
- **Auth**: `Public`

#### Request Payload
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123"
}
```

#### Response (201 Created)
```json
{
  "token": "eyJh... (JWT Token)",
  "user": {
    "id": "user_123",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "USER"
  }
}
```

---

### 🔑 Login User
Authenticate and receive a JWT token.
- **Route**: `POST /login`
- **Auth**: `Public`

#### Request Payload
```json
{
  "email": "jane@example.com",
  "password": "securepassword123"
}
```

#### Response (200 OK)
```json
{
  "token": "eyJh...",
  "user": {
    "id": "user_123",
    "role": "ADMIN"
  }
}
```

---

## 👤 2. User Profile
**Base Path:** `/users`

### 🆔 Get Current User
Fetch details of the logged-in user.
- **Route**: `GET /me`
- **Auth**: `Required` (Bearer Token)

#### Response (200 OK)
```json
{
  "user": {
    "id": "user_123",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "createdAt": "2024-10-10T12:00:00Z"
  }
}
```

---

## 📅 3. Events
**Base Path:** `/events`

### 📋 List All Events
Fetch a list of events with optional filtering.
- **Route**: `GET /`
- **Auth**: `Public`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `city` | Query | Filter by city name (e.g., `Mumbai`) |
| `status` | Query | Filter by status (`SCHEDULED`, `CANCELLED`) |

#### Response (200 OK)
```json
[
  {
    "id": "event_001",
    "title": "Concert Night",
    "city": "Chennai",
    "startTime": "2024-12-05T18:00:00Z",
    "status": "SCHEDULED"
  }
]
```

---

### 🔍 Get Event Details
Get full details of a specific event including shows and venues.
- **Route**: `GET /:id`
- **Auth**: `Public`

---

### ➕ Create Event
Create a new event entry.
- **Route**: `POST /`
- **Auth**: `ADMIN ONLY` (Bearer Token)

#### Request Payload
```json
{
  "title": "Sunburn Goa",
  "description": "Asia's largest music festival.",
  "city": "Goa",
  "startTime": "2024-12-28T14:00:00Z",
  "endTime": "2024-12-30T22:00:00Z"
}
```

---

### 🛠️ Update Event
Modify an existing event.
- **Route**: `PUT /:id`
- **Auth**: `ADMIN ONLY` (Bearer Token)

---

### 🗑️ Delete Event
Remove an event from the platform.
- **Route**: `DELETE /:id`
- **Auth**: `ADMIN ONLY` (Bearer Token)

---

## 🚀 Future Roadmap
The following modules are currently in development:
- **📍 Venues**: Location management.
- **⏰ Shows**: Specific time slots for events.
- **🎟️ Bookings**: User reservations and seat selection.
- **💳 Payments**: Gateway integration.

> [!IMPORTANT]
> Admin routes will return `403 Forbidden` if a standard user token is provided. Always check your user role if you encounter permission issues.
