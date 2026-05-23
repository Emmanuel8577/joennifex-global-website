
# Joennifex Global Website

Official website for **Joennifex Global Limited**, a professional solar energy solutions provider. This project provides a clean, modern, and interactive interface for customers to browse solar products, calculate total project estimates, and submit inquiries directly.

## Features

* **Product Catalog**: Showcase of various solar generators and panels with clear pricing.
* **Dynamic Price Estimator**: Real-time total calculation based on user product selection.
* **Responsive Design**: Mobile-friendly layout using Tailwind CSS.
* **Integrated Contact Forms**: Seamless inquiry submission powered by Formspree.
* **WhatsApp Integration**: Instant communication channel for customer support.
* **Event Tracking**: Integrated pixel tracking for monitoring lead generation performance.

## Tech Stack

* **Frontend**: React.js
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Form Handling**: Formspree
* **Deployment**: Vercel

## Project Structure

* `/src/components`: Contains modular components like `Header.jsx` and `OrderForm.jsx`.
* `/src/data`: Holds the `products.js` file for managing inventory data.
* `/public`: Contains static assets like `logo.png`.

## Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/joennifex-global-website.git

```



```
2. Install dependencies:
   ```bash
   npm install

```

3. Run the development server:
```bash
npm run dev

```



```

## Configuration
*   **Formspree**: The order form is configured to send data to Formspree. Ensure your Formspree endpoint in `OrderForm.jsx` is updated if you create a new form.
*   **WhatsApp**: Update the `waLink` in `Header.jsx` with your correct phone number and custom message.
*   **Logo**: Ensure your file is named exactly `logo.png` and placed in the `public/` directory for the header to render correctly.

## Deployment
This project is optimized for deployment on [Vercel](https://vercel.com).
1. Connect your GitHub repository to Vercel.
2. Ensure the build command is `npm run build` and the output directory is `dist`.
3. Click **Deploy**.

## License
© 2026 Joennifex Global Limited. All rights reserved.

---

**Do you need any help with the setup or have any questions about these instructions?**

```
