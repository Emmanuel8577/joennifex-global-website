export const FB_PIXEL_ID = '1703359430764427';

// Safely call Meta Pixel track events
export const trackEvent = (eventName, data = {}, userData = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (Object.keys(userData).length > 0) {
      window.fbq('track', eventName, data, { user_data: userData });
    } else {
      window.fbq('track', eventName, data);
    }
  }
};