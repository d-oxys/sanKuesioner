/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <article className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="aos-init aos-animate" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-base font-bold text-[#3056D3]">Rekomendasi Artikel</h1>
            <h2 className="mb-4 mt-1 text-3xl font-bold md:text-4xl">Apakah moms tahu?</h2>
            <p className="mx-auto text-sm text-[#637381] md:w-3/4 md:text-base xl:w-1/2">
              Menurut data survei status gizi Indonesia pada tahun 2022 terdapat 4 permasalahan gizi balita di Indonesia. Daripada bingung, yuk cari tahu tentang permasalahan gizi pada balita.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-12">
            <div className="main">
              <a href="/artikel/Yuk%20Mengenal%20Stunting,%20Penyebab%20Hingga%20Cara%20Pencegahannya">
                <div data-testid="flowbite-card" className="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex h-full flex-col justify-center gap-4 p-6">
                    <div className="relative h-[250px] w-full sm:h-[300px] lg:h-[350px] xl:h-[450px]">
                      <img
                        alt="gambar artikel"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                        sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw"
                        srcSet="/_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fgenbest.id%2Fimages%2Farticle%2Fshutterstock_1552968002_original_614.jpg%3F1655644805&amp;w=3840&amp;q=75"
                      />
                    </div>
                    <h3 className="hover:text-primary-2 line-clamp-2 text-xl font-bold leading-snug duration-500">Yuk Mengenal Stunting, Penyebab Hingga Cara Pencegahannya</h3>
                    <p className="text-paragraph line-clamp-3 text-sm">
                      Istilah stunting mungkin masih terdengar asing di telinga sebagian orang. Padahal, masalah kesehatan satu ini cukup umum terjadi di Indonesia. Bahkan, stunting sendiri pernah menjadi masalah yang mendapat perhatian
                      khusus dari Kementerian Kesehatan lewat kampanye bertajuk Melawan Stunting. Secara umum, pengertian stunting adalah salah satu penyakit kronis yang mempengaruhi faktor pertumbuhan anak-anak. Lantas, penyakit seperti
                      apa stunting itu dan apa penyebabnya? Cari tahu juga beberapa cara pencegahannya di artikel ini.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* Tambahkan komponen artikel lainnya di sini */}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Dropdown;
