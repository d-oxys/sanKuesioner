<<<<<<< HEAD
import React from 'react';
import { useRouter } from 'next/router';

const FloatingButton: React.FC = () => {
  const router = useRouter();
  const { nipnuptk } = router.query;

  const handleBackToDashboard = () => {
    router.push({
      pathname: '/dashboard',
      query: { nipnuptk: nipnuptk },
=======
import React from "react";
import { useRouter } from "next/router";

const FloatingButton: React.FC = () => {
  const router = useRouter();
  const { npsn } = router.query;

  const handleBackToDashboard = () => {
    router.push({
      pathname: "/dashboard",
      query: { npsn: npsn },
>>>>>>> e01b401 (first commit)
    });
  };

  return (
<<<<<<< HEAD
    <button onClick={handleBackToDashboard} className='fixed right-4 top-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600'>
      Kembali Ke Dashboard
=======
    <button onClick={handleBackToDashboard} className="fixed bottom-4 right-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
      Kembali ke Dashboard
>>>>>>> e01b401 (first commit)
    </button>
  );
};

export default FloatingButton;
