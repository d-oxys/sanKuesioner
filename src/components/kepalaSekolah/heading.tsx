"use client";
import Image from "next/image";
import Link from "next/link";

function Heading() {
  return (
    <>
      <div className="my-5 rounded-lg border border-gray-200 bg-white object-fill p-6 shadow md:w-[58%]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KUESIONER KINERJA KEPALA SEKOLAH ONLINE</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Assalamualaikum Wr. Wb. Apa kabar tunas bangsa ? Demi kemajuan pendidikan di Indonesia, melalui kuesioner ini saya mohon bantuan kalian, untuk memberi data tentang kinerja Ibu/Bapak Guru yang mendidik kalian, mohon kuesioner ini
          di isi sesuai dengan kondisi objektif, kerahasiaan data responden di jamin oleh peneliti, Terima kasih.
        </p>
      </div>
    </>
  );
}

export default Heading;
