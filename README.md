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

### 3. Run the development server
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
- JSON-based mock data
- Mock login system using browser cookies
- Demo credentials autofill button
- Client-side authentication state hook
- Logout functionality
- Tailwind CSS theme system using `@theme`
- Clean and organized component structure

---

## Feature Explanation

### Destinations
Destinations are displayed using reusable cards. Each destination includes an image, description, and price per day, with a dedicated details page providing more information.

### Travel Packages
Travel packages group multiple tourist places into a single curated experience. Each package includes the country, covered places, duration, and total price. Package detail pages follow the same layout structure as destination detail pages to maintain visual consistency.

### Mock Authentication
Authentication is mock-based and handled entirely on the client side. Login credentials are validated against fixed demo values, and login state is stored in a browser cookie. A custom hook reads this cookie to determine login status, and logout clears the cookie.

### UI & Styling
The UI is built using Tailwind CSS with a custom design system defined via `@theme`. Colors, typography, spacing, and layout rules are consistent across the application. The site is fully responsive and optimized for mobile and desktop views.

---

## Important Notes

- This project uses **mock data and mock authentication only**
- No backend or real authentication is implemented
- Intended strictly for frontend learning, demos, and portfolio use

---

## License

This project is created for educational and demonstration purposes only.
