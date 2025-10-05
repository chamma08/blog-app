"use client";

import { useEffect, useState } from "react";

export default function Theme({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-900 min-h-screen">
      {children}
    </div>
  );
}
