// src/app/page.js
import MapComponent from '../components/MapComponent';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to the Leaflet Map Example!
      </h1>
      <div className="w-full max-w-4xl">
        <MapComponent />
      </div>
    </main>
  );
}
