import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
            <a href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20am%20interested%20in%20your%20Sikkim%20tour%20packages." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" fill="white">
            <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>
        </div>
      </a>
      <a href="tel:+919474090064" aria-label="Call ZenHills" className="fixed bottom-6 left-6 z-50">
  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="white">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  </div>
</a>
    </div>
  );
};

export default NotFound;
