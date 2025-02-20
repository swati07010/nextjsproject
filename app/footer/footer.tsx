export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
      <p className="text-xs">Designed with ❤️ by Swati Kumari Singh</p>
    </footer>
  );
}
