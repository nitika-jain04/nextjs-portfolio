// utils/aos-init.js
import "aos/dist/aos.css"; // Import the AOS styles

if (typeof window !== "undefined") {
  // Check if running on the client side where the document is defined
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"; // Replace with the version you want
  script.integrity = "your-integrity-hash"; // Add integrity hash for better security (optional)
  script.crossOrigin = "anonymous"; // Set cross-origin attribute for better security
  document.head.appendChild(script);

  script.onload = () => {
    // AOS library is loaded, initialize it
    window.AOS.init();
  };
}
