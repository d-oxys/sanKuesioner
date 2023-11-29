/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/router";

function ListGuru() {
  const router = useRouter();
<<<<<<< HEAD
  const { nipnuptk } = router.query;
  return (
    <>
      <li>
        <Link href={`/dashboardGuru?nipnuptk=${nipnuptk}`} className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700">
=======
  const { npsn } = router.query;
  return (
    <>
      <li>
        <Link href={`/dashboardGuru?npsn=${npsn}`} className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700">
>>>>>>> e01b401 (first commit)
          <svg className="h-5 w-5  text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
          <span className="ml-3 flex-1 whitespace-nowrap">Kuesioner Guru</span>
        </Link>
      </li>
    </>
  );
}

export default ListGuru;
