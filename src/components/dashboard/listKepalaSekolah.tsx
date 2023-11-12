/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/router";
function ListKepalaSekolah() {
  const router = useRouter();
  const { npsn } = router.query;
  return (
    <>
      <li>
        <Link href={`/dashboardKepsek?npsn=${npsn}`} className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700">
          <svg className="h-5 w-5  text-gray-400 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
          </svg>
          <span className="ml-3 flex-1 whitespace-nowrap">Kepala Sekolah</span>
        </Link>
      </li>
    </>
  );
}

export default ListKepalaSekolah;
