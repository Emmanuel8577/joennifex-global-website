export const FB_PIXEL_ID = 'YOUR_PIXEL_ID_HERE'; // Replace with your actual Pixel ID

export const trackEvent = (name, data = {}) => {
  if (window.fbq) {
    window.fbq('track', name, data);
  }
};