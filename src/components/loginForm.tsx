// LoginForm.tsx
import { useState, FormEvent, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../API/firebase";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [npsn, setNpsn] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Mendapatkan data pengguna dari Firestore
      const docRef = doc(db, "users", npsn);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Jika NPSN terdaftar, cek password
        const userData = docSnap.data();
        if (userData.password === password) {
          console.log("Pengguna berhasil login:", npsn);
          alert("Anda berhasil login");
          router.push({
            pathname: "/dashboard",
            query: { npsn: npsn },
          });
        } else {
          // Jika password salah, tampilkan pesan kesalahan
          alert("Password salah. Silahkan coba lagi.");
        }
      } else {
        // Jika NPSN tidak terdaftar, tampilkan pesan kesalahan
        alert("NPSN tidak terdaftar. Silahkan daftar terlebih dahulu.");
      }
    } catch (error: any) {
      console.error("Terjadi kesalahan saat login:", error.message);

      // Menampilkan pesan kesalahan
      alert(`Login gagal karena: ${error.message}`);
    }
  };

  return (
    <section className="bg-gradient-calm-elegant h-screen">
      <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="npsn" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  NPSN
                </label>
                <input
                  type="text"
                  name="npsn"
                  id="npsn"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="masukan npsn"
                  value={npsn}
                  required={true}
                  onChange={(e) => setNpsn(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      required={true}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link href="/SignUp" className="text-primary-600 dark:text-primary-500 font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
