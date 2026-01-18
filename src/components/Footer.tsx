import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Jordan Smith
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
