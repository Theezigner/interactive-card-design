# Frontend Mentor - Interactive card details form

This project is a visually interactive credit card form built with TypeScript and Tailwind CSS. Users can enter card details and instantly see the card preview update in real-time. It was developed as the first official assignment for the third semester of my frontend engineering course, with a focus on DOM manipulation, form validation, and responsive layout using modern tools.

---

## Project Overview

The form is split into two main parts:
1. A responsive credit card preview section (front and back) that updates live as users type.
2. A form section that collects cardholder name, number, expiration date, and CVC.

On successful submission, the form transitions to a "Thank You" screen with an option to reset and resubmit.

---

## Features

- Live preview of:
  - Card number (formatted in real-time)
  - Cardholder name (converted to uppercase)
  - Expiration date (MM/YY)
  - CVC (on the card back)
- Auto-formatting for:
  - Card number input (`1234 5678 9012 3456`)
  - Month capping at `12`
  - CVC limited to 3 digits
- Dynamic error handling using native validation patterns
- Reset-to-form functionality after submission
- Mobile-first responsive layout
- Built using vanilla TypeScript (no frameworks)

---

## Built With

- TypeScript
- Vite
- Tailwind CSS
- DOM APIs (`createElement`, `addEventListener`, `appendChild`)
- Mobile-first responsive design
- Modern module structure

---

## Folder Structure

```
/src
 ├── components
 │    ├── cardPreview.ts     # Card front & back preview logic
 │    └── createForm.ts      # Form construction and DOM logic
 ├── script.ts               # App root logic, view toggling
 └── style.css               # Tailwind base styles
/public
 └── images                  # Card background, logo, icon-complete
index.html
vite.config.ts
package.json
```

---

## How to Run

1. Clone this repo
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the dev server:

   ```bash
   pnpm dev
   ```

4. Visit `http://localhost:5173`

---

## What I Learned

This project helped me:
- Master **DOM creation and manipulation** without using JSX or any framework.
- Understand **real-time form updates** by syncing input values with visual elements.
- Use **Tailwind CSS responsively** to control layout across screen sizes.
- Apply **form validation patterns** using HTML5 and TypeScript safely.

Example of card number formatting:
```ts
input.value = input.value
  .replace(/\D/g, '')
  .slice(0, 16)
  .replace(/(.{4})/g, '$1 ')
  .trim();
```

---

## Future Improvements

- Add full validation messages (e.g., "Invalid number format").
- Implement card brand detection (Visa, MasterCard, etc.).
- Improve accessibility (aria-labels, tab flow, etc.).
- Allow Amex-style formatting (`XXXX XXXXXX XXXXX` for 15 digits).

---

## Screenshot

- [Desktop Empty](./public/images/desktop-empty.png)
- [Mobile Empty](./public/images/mobile-empty.png)
- [Desktop Thank you](./public/images/desktop-thankyou.png)
- [Desktop Thank you](./public/images/mobile-thankyou.png)

---

## 🔗 Live Demo
- [Live Site URL](https://interactive-card-design-plum.vercel.app/)
- [GitHub Repo](https://github.com/Theezigner/interactive-card-design.git)

---

## Author

- Name: [Temitayo Adebayo](#)
- GitHub: [@Theezigner](https://github.com/Theezigner)

---

