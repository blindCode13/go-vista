# GoVista – Travel & Tour Website

GoVista is a modern travel and tour website built using **Next.js App Router** and **Tailwind CSS**. The project focuses on clean UI, reusable components, structured routing, and a realistic frontend architecture using mock data and mock authentication.
This project is intended for frontend demos, learning, and portfolio presentation.

---

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS v4 with `@theme`
- React Icons
- JSON-based mock data
- Client-side mock authentication (cookies)

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd govista
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create environment file

Create a `.env.local` file in the root directory and add:

```env
NEXT_SITE_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```

Open the app in your browser at:

```
http://localhost:3000
```

---

## Route Summary

- `/` – Home page
- `/destinations` – List of all destinations
- `/destinations/[id]` – Destination details page
- `/packages` – List of travel packages
- `/packages/[id]` – Package details page
- `/login` – Mock login page

---

## Implemented Features

- Responsive navigation bar with mobile menu
- Reusable destination and package cards
- Destination listing and details pages
- Travel packages containing multiple places
- Package details pages with extended information
- JSON-based mock data stored in the public folder
- Mock login system using browser cookies
- Demo credentials autofill button
- Client-side authentication state hook
- Logout functionality
- Tailwind CSS theme system using `@theme`
- Clean and organized component structure

---

## Feature Explanation

### Destinations
Destinations are loaded from a JSON file and displayed using reusable cards. Each destination includes an image, description, and price per day. A dedicated details page provides more information about each destination.

### Travel Packages
Travel packages group multiple tourist places into a single curated experience. Each package includes the country, covered places, duration, and total price. Package detail pages follow the same layout structure as destination detail pages to maintain visual consistency.

### Mock Authentication
Authentication is fully mock-based and handled on the client side. Login credentials are validated against fixed demo values, and the login state is stored in a browser cookie. A custom authentication hook reads this cookie to determine login status. Logging out clears the cookie.

### UI & Styling
The UI is built using Tailwind CSS with a custom design system defined via `@theme`. Colors, typography, spacing, and layout rules are consistent across the entire application. The site is fully responsive and works across all screen sizes.

---

## Important Notes

- This project uses **mock data and mock authentication only**
- No backend or real authentication is implemented
- Intended strictly for frontend learning, demos, and portfolio use

---

## Possible Future Improvements

- Replace mock authentication with real authentication
- Add booking and checkout flow
- Add search and filtering for destinations and packages
- Migrate JSON data to a CMS or database
- Improve accessibility and SEO
- Add user profiles and booking history