import React from "react";
import { useRouter } from "next/router";

const FloatingButton: React.FC = () => {
  const router = useRouter();
  const { nipnuptk } = router.query;

  const handleBackToDashboard = () => {
    router.push({
      pathname: "/dashboard",
      query: { nipnuptk: nipnuptk },
    });
  };

  return (
    <button onClick={handleBackToDashboard} className="fixed bottom-4 right-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
      Kembali ke Dashboard
    </button>
  );
};

export default FloatingButton;
