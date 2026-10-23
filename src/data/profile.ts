export const profile = {
  name: "Fauzan Naufal Anbia",
  role: "S1 Teknik Informatika",
  tagline:
    "Lulusan S1 Teknik Informatika, Universitas Perjuangan Tasikmalaya — berpengalaman di operasional retail, layanan digital, dan pembuatan konten.",
  location: "Tasikmalaya, Jawa Barat",
  address:
    "Jalan Taman Pahlawan No. 49, RT 02 / RW 10, Empangsari, Tawang, Kota Tasikmalaya",
  email: "fauzannaufala18@gmail.com",
  phone: "082317634511",
  phoneHref: "https://wa.me/6282317634511",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  address: string;
  description: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Owner & Digital Service Provider",
    company: "Ash Store",
    period: "Agu 2025 — Feb 2026",
    address: "Jl. Taman Pahlawan No. 49, Empangsari, Tawang, Kota Tasikmalaya",
    description:
      "Mengelola usaha sendiri di bidang layanan digital — melayani kebutuhan pelanggan sekaligus mengatur operasional dan pemasaran usaha.",
    current: true,
  },
  {
    role: "Freelance Content Model",
    company: "AL-Haq Muslim Wear",
    period: "Apr 2025",
    address: "Cibeuti, Kawalu, Kab. Tasikmalaya",
    description:
      "Menjadi model konten untuk brand muslim wear — mendukung kebutuhan foto dan materi promosi digital.",
  },
  {
    role: "Store Crew",
    company: "Angkringan Sumber Rezeki",
    period: "Nov 2024 — Jan 2025",
    address: "Jl. Dr. Sukarjo No. 9, Tawangsari, Tawang, Kab. Tasikmalaya",
    description:
      "Menjalankan operasional gerai harian — melayani pelanggan, menyiapkan pesanan, dan menjaga kerapian area kerja.",
  },
];

export type Education = {
  school: string;
  period: string;
  address: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "Universitas Perjuangan Kota Tasikmalaya",
    period: "Agu 2022 — Agu 2026",
    address: "Jl. Peta No. 177, Kahuripan, Tawang, Kota Tasikmalaya",
    detail: "S1 Teknik Informatika",
  },
  {
    school: "SMA Negeri 1 Kota Tasikmalaya",
    period: "Jul 2018 — Mei 2021",
    address: "Jl. Rumah Sakit No. 28, Empangsari, Tawang, Kota Tasikmalaya",
  },
  {
    school: "SMP Negeri 1 Kota Tasikmalaya",
    period: "Jul 2015 — Mei 2018",
    address: "Jl. Otto Iskandardinata No. 21, Empangsari, Tawang, Kota Tasikmalaya",
  },
  {
    school: "SD Negeri Tarumanagara",
    period: "Jul 2009 — Jun 2015",
    address: "Jl. Taman Pahlawan Kusuma Bangsa No. 9, Cikalang, Tawang, Kab. Tasikmalaya",
  },
];

export const softSkills = [
  "Komunikasi Efektif",
  "Kerja Tim",
  "Manajemen Waktu",
  "Problem Solving",
  "Customer Service",
  "Adaptability",
];

export const hardSkills = [
  "Microsoft Office",
  "Analisis Data",
  "Manajemen Media Sosial",
  "Dasar Pemrograman IT",
  "AI Prompt Engineering",
  "AI-Assisted Web Development",
  "Version Control (Git & GitHub)",
];

export const interests = [
  "Content Creation",
  "Eksplorasi Tren Media Sosial",
  "Olahraga & Gym",
];
