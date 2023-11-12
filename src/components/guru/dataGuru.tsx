// pages/index.js atau halaman yang sesuai
import React, { useState, FormEvent, useEffect } from "react";
import { auth, db } from "../../API/firebase";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import "tailwindcss/tailwind.css";
import { Router, useRouter } from "next/router";
import Container from "../container";
import FloatingButton from "../floatingButton";

type PertanyaanData = {
  [key: string]: string;
};
type JawabanData = {
  [key: string]: string;
};

type UserData = {
  alamat: string;
  jabatan: string;
  nama: string;
  npsn: string;
  pangkat: string;
  unitKerja: string;
};

type KuesionerData = {
  asalSekolah: string;
  nama: string;
  npsnPeninjau: string;
  npsnResponden: string;
  jawaban: JawabanData;
};

const DataGuru: React.FC = () => {
  const router = useRouter();
  const { documentNames } = router.query;
  let documentNamesString = "";
  const [userData, setUserData] = useState<UserData | null>(null);
  const [kuesionerData, setKuesionerData] = useState<KuesionerData | null>(null);
  const pertanyaanData = require("../../API/guru.json") as PertanyaanData;

  if (typeof documentNames === "string") {
    documentNamesString = documentNames;
  } else if (Array.isArray(documentNames)) {
    documentNamesString = documentNames[0];
  }
  useEffect(() => {
    const fetchData = async () => {
      // Menggunakan db yang diimpor dari file konfigurasi Firebase Anda
      const kuesionerQuery = query(collection(db, "kuesionerGuru"), where("npsnResponden", "==", documentNamesString));
      const kuesionerQuerySnapshot = await getDocs(kuesionerQuery);
      kuesionerQuerySnapshot.forEach(async (doc) => {
        const data = doc.data() as KuesionerData;
        setKuesionerData(data);

        // Menggunakan db yang diimpor dari file konfigurasi Firebase Anda
        const userQuery = query(collection(db, "users"), where("npsn", "==", data.npsnPeninjau));
        const userQuerySnapshot = await getDocs(userQuery);
        userQuerySnapshot.forEach((doc) => {
          const userData = doc.data() as UserData;
          setUserData(userData);
        });
      });
    };

    fetchData();
  }, [documentNamesString]);

  return (
    <>
      <Container>
        <FloatingButton />
        <div className="my-5 overflow-auto rounded-sm bg-white md:w-[70%]">
          <h1 className="py-4 text-center text-lg font-semibold md:text-2xl">
            SURAT PERNYATAAN SUPERVISI <span className="block">PENGAWAS SD TENTANG BELAJAR MENGAJAR</span>
          </h1>
          <div className="mx-2 p-2 text-xs font-semibold md:text-base md:last:font-medium">
            {userData && (
              <table className="table-auto">
                <tr>
                  <td className="">Nama</td>
                  <td className=" pl-8 pr-2 md:pl-32 md:pr-2">:</td>
                  <td className="text-blue-700">{userData.nama}</td>
                </tr>
                <tr>
                  <td className="">NPSN</td>
                  <td className=" pl-8 pr-2 md:pl-32 md:pr-2">:</td>
                  <td className="text-blue-700">{userData.npsn}</td>
                </tr>
                <tr>
                  <td className="">Alamat</td>
                  <td className=" pl-8 pr-2 md:pl-32 md:pr-2">:</td>
                  <td className="text-blue-700">{userData.alamat}</td>
                </tr>
                <tr>
                  <td className="">Jabatan</td>
                  <td className=" pl-8 pr-2 md:pl-32 md:pr-2">:</td>
                  <td className="text-blue-700">{userData.jabatan}</td>
                </tr>

                <tr>
                  <td className="">Pangkat</td>
                  <td className=" pl-8 pr-2 md:pl-32 md:pr-2">:</td>
                  <td className="text-blue-700">{userData.pangkat}</td>
                </tr>
                <tr>
                  <td className="">Unit Kerja</td>
                  <td className=" pl-8 pr-2 md:pl-32 md:pr-2">:</td>
                  <td className="text-blue-700">{userData.unitKerja}</td>
                </tr>
              </table>
            )}
          </div>
          <div className=" mx-4 text-xs font-semibold md:text-base md:last:font-medium">Menyatakan bahwa</div>
          <div className="mx-2 mb-3 p-2 text-xs font-semibold md:text-base md:last:font-medium">
            {kuesionerData && (
              <table className="table-auto">
                <tr>
                  <td className="">Nama</td>
                  <td className=" pl-8 pr-2 md:pl-28 md:pr-2">:</td>
                  <td className="text-blue-700">{kuesionerData.nama}</td>
                </tr>
                <tr>
                  <td className="">NPSN</td>
                  <td className=" pl-8 pr-2 md:pl-28 md:pr-2">:</td>
                  <td className="text-blue-700">{kuesionerData.npsnResponden}</td>
                </tr>
                <tr>
                  <td className="">Asal Sekolah</td>
                  <td className=" pl-8 pr-2 md:pl-28 md:pr-2">:</td>
                  <td className="text-blue-700">{kuesionerData.asalSekolah}</td>
                </tr>
              </table>
            )}
          </div>
          <div className=" mx-4 text-xs font-semibold md:text-base md:last:font-medium">Telah melaksanakan kegiatan proses belajar mengajar pada tahun pelajaran saat ini</div>
          <div className="mx-4 my-4 text-xs font-semibold md:text-base md:last:font-medium">
            {kuesionerData && (
              <table className="table-auto border-collapse border border-black">
                <thead>
                  <tr>
                    <td className="border border-black p-2 text-center">Kompetensi</td>
                    <td className="border border-black p-2 px-4 text-center text-blue-700">Nilai</td>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(pertanyaanData).map((key) => (
                    <tr key={key}>
                      <td className="border border-black p-2">{pertanyaanData[key]}</td>
                      <td className="border border-black p-2 px-4 text-center text-blue-700">{kuesionerData.jawaban[key]}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="border border-black p-2 text-center">Jumlah (Hasil Penilaian Kinerja Guru)</td>
                    <td className="border border-black p-2 px-4 text-center text-blue-700">{Object.values(kuesionerData.jawaban).reduce((a, b) => a + Number(b), 0)}</td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DataGuru;
