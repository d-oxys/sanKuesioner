import React, { useEffect, useState } from "react";
import DashboardLayout from "./dashboardLayout";
import { db } from "../../API/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import DashboardCard from "./dashboardCard";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ContentGuru() {
  const router = useRouter();
  const { npsn } = router.query;
  const [documentNames, setDocumentNames] = useState<{ id: string; nama: string }[]>([]);

  useEffect(() => {
    const getDocumentNames = async () => {
      const kuesionerGuruCollection = collection(db, "kuesionerGuru");
      const snapshot = await getDocs(kuesionerGuruCollection);
      const names = snapshot.docs.map((doc) => ({ id: doc.id, nama: doc.data().nama }));
      setDocumentNames(names);
    };

    getDocumentNames();
  }, []);

  const handleDelete = async (name: string) => {
    // Tampilkan konfirmasi sebelum menghapus
    if (!window.confirm("Apakah Anda yakin ingin menghapus dokumen ini?")) {
      return;
    }

    try {
      // Hapus dokumen dari Firebase
      const docRef = doc(db, "kuesionerGuru", name);
      await deleteDoc(docRef);

      // Hapus nama dari state documentNames
      setDocumentNames(documentNames.filter((docName) => docName.id !== name));

      alert("Dokumen berhasil dihapus");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Terjadi kesalahan saat menghapus dokumen:", error);
        alert(`Dokumen gagal dihapus karena: ${error.message}`);
      }
    }
  };

  return (
    <DashboardLayout>
      <h1 className="mb-3 text-lg font-semibold md:text-2xl ">
        KUESIONER KINERJA GURU <span className="text-sm font-light">SDN Lorem, ipsum dolor.</span>
      </h1>
      <DashboardCard borderColor="border-orange-500">
        <h1 className="ml-2 flex items-center justify-between border-b-[1px] border-b-slate-300 px-2 py-4">
          Data Kuesioner Guru
          <Link href={`/kuesionerGuru?npsn=${npsn}`}>
            <button
              type="button"
              className="mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              tambah
            </button>
          </Link>
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  NPSN
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {documentNames.map(({ id, nama }) => (
                <tr key={id} className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">{nama}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">{id}</td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/lihatDataGuru?npsn=${npsn}&documentNames=${id}`} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Lihat
                    </Link>
                    <Link href={`/kuesionerGuru?npsn=${npsn}&documentNames=${id}`} className="ml-4 font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(id)} className="ml-4 font-medium text-red-600 hover:underline dark:text-red-500">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </DashboardLayout>
  );
}
