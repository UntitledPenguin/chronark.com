export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 text-sm py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p>
            Based on Vercel Template by Chronark &bull; © {new Date().getFullYear()} &bull; PelicanFlow All rights reserved.
          </p>
        </div>
      </footer>
    );
  }