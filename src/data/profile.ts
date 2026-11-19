export const profile = {
  name: "Fauzan Naufal Anbia",
  shortName: "Fauzan",
  role: "S1 Teknik Informatika",
  tagline:
    "Lulusan S1 Teknik Informatika, Universitas Perjuangan Tasikmalaya — berpengalaman di operasional retail, layanan digital, dan pembuatan konten.",
  location: "Tasikmalaya, Jawa Barat",
  country: "Indonesia",
  address:
    "Jalan Taman Pahlawan No. 49, RT 02 / RW 10, Empangsari, Tawang, Kota Tasikmalaya",
  email: "fauzannaufala18@gmail.com",
  phone: "082317634511",
  phoneHref: "https://wa.me/6282317634511",
};

export type ThemeOption = {
  id: string;
  name: string;
  swatch: string;
  bgPreview: string;
};

export const themes: ThemeOption[] = [
  { id: "light", name: "Light", swatch: "#171717", bgPreview: "#ffffff" },
  { id: "dark", name: "Dark", swatch: "#fafafa", bgPreview: "#141414" },
  { id: "purple", name: "Purple", swatch: "#7c3aed", bgPreview: "#f8f6fc" },
  { id: "ocean", name: "Ocean", swatch: "#0ea5e9", bgPreview: "#f4faff" },
  { id: "forest", name: "Forest", swatch: "#16a34a", bgPreview: "#f4faf6" },
  { id: "sunset", name: "Sunset", swatch: "#f97316", bgPreview: "#fff8f2" },
  { id: "rose", name: "Rose", swatch: "#e11d48", bgPreview: "#fff5f7" },
  { id: "midnight", name: "Midnight", swatch: "#6366f1", bgPreview: "#0c0c1d" },
  { id: "coffee", name: "Coffee", swatch: "#854d0e", bgPreview: "#f7f3ee" },
  { id: "mint", name: "Mint", swatch: "#2dd4bf", bgPreview: "#0b1a17" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  address: string;
  description: string;
  current?: boolean;
  tag: string;
  highlights: string[];
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
    tag: "(Owner)",
    highlights: [
      "Menangani langsung kebutuhan layanan digital pelanggan dengan respon cepat dan komunikasi jelas.",
      "Mengatur alur operasional harian, pencatatan transaksi, serta strategi pemasaran digital secara mandiri.",
      "Memanfaatkan tools AI dan automasi ringan untuk menjaga efisiensi layanan.",
    ],
  },
  {
    role: "Freelance Content Model",
    company: "AL-Haq Muslim Wear",
    period: "Apr 2025",
    address: "Cibeuti, Kawalu, Kab. Tasikmalaya",
    description:
      "Menjadi model konten untuk brand muslim wear — mendukung kebutuhan foto dan materi promosi digital.",
    tag: "(Freelance)",
    highlights: [
      "Berpose dan beradaptasi sesuai arahan konsep visual untuk katalog dan konten promosi digital.",
      "Berkolaborasi dengan tim kreatif untuk menghasilkan aset visual yang siap tayang di media sosial.",
    ],
  },
  {
    role: "Store Crew",
    company: "Angkringan Sumber Rezeki",
    period: "Nov 2024 — Jan 2025",
    address: "Jl. Dr. Sukarjo No. 9, Tawangsari, Tawang, Kab. Tasikmalaya",
    description:
      "Menjalankan operasional gerai harian — melayani pelanggan, menyiapkan pesanan, dan menjaga kerapian area kerja.",
    tag: "(Operations)",
    highlights: [
      "Melayani pelanggan dengan sigap di jam ramai sekaligus menjaga akurasi pesanan.",
      "Menjaga kebersihan, stok harian, dan ritme kerja tim di lapangan.",
    ],
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

export type Project = {
  name: string;
  tagline: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Admin Olshop",
    tagline: "Sistem admin toko online",
    period: "2026",
    description:
      "Aplikasi web untuk mengelola produk, pesanan, dan laporan penjualan toko online. Dibuat karena banyak toko kecil masih mencatat pesanan secara manual, padahal pesanan datang dari beberapa marketplace sekaligus.",
    highlights: [
      "Stok hanya berubah lewat tiga jalur tercatat, sehingga angka stok tidak bisa diedit bebas dan tetap bisa dipercaya.",
      "Pembuatan pesanan dan pengurangan stok dijalankan dalam satu transaksi database dengan row locking — mencegah stok minus saat dua admin memproses bersamaan.",
      "Import pesanan dari CSV Shopee/TikTok Shop dengan pencocokan nama produk otomatis, karena nama di marketplace sering berbeda dari nama di database.",
      "Export laporan ke file Excel dengan rumus hidup, dibuat tanpa library eksternal.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL"],
    demo: "https://admin-olshop-hdiz.vercel.app",
    featured: true,
  },
];

export const showcaseSlides = [
  {
    id: "web-dev",
    title: "Web & App Development",
    subtitle: "01 / ENGINEERING",
    description:
      "Membangun aplikasi web yang rapi dan benar-benar terpakai — mulai dari antarmuka responsif hingga transaksi database PostgreSQL & Supabase yang aman dari race condition.",
  },
  {
    id: "ai-assisted",
    title: "AI-Assisted Engineering",
    subtitle: "02 / AUTOMATION",
    description:
      "Menggabungkan AI Prompt Engineering dengan logika pemrograman untuk mempercepat riset, prototyping, analisis data, dan eksekusi produk digital secara presisi.",
  },
  {
    id: "digital-ops",
    title: "E-Commerce & Operations",
    subtitle: "03 / SYSTEMS",
    description:
      "Berpengalaman mengelola layanan digital (Ash Store) dan operasional lapangan — memahami langsung titik macet pencatatan stok, rekonsiliasi CSV marketplace, dan laporan.",
  },
  {
    id: "content-visual",
    title: "Content & Social Media",
    subtitle: "04 / CREATIVE",
    description:
      "Peka terhadap tren media sosial, produksi materi promosi digital, dan pengalaman sebagai freelance content model — menjaga keseimbangan antara fungsi dan daya tarik visual.",
  },
];

export type TechItem = {
  id: string;
  name: string;
  category: string;
  color: string;
  usage: string;
};

export const techArsenal: TechItem[] = [
  {
    id: "canva",
    name: "Canva",
    category: "Design",
    color: "#00C4CC",
    usage: "Desain poster, katalog produk, thumbnail, dan aset konten promosi media sosial.",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    color: "#E34F26",
    usage: "Struktur semantik halaman web yang rapi, ringan, dan ramah aksesibilitas.",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Styling",
    color: "#1572B6",
    usage: "Layout responsif, animasi transisi halus, dan styling UI modern.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Language",
    color: "#F7DF1E",
    usage: "Logika interaktif web, parsing CSV marketplace, dan export Excel tanpa library eksternal.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    color: "#3178C6",
    usage: "Menjaga keamanan tipe data di aplikasi Next.js & React modern.",
  },
  {
    id: "react",
    name: "React",
    category: "UI",
    color: "#61DAFB",
    usage: "Membangun komponen UI modular yang interaktif dan reaktif.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Framework",
    color: "#737373",
    usage: "Framework utama untuk membangun web cepat dengan routing & optimasi aset.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling",
    color: "#06B6D4",
    usage: "Rapid UI styling dengan utility classes dan sistem tema dinamis.",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Backend",
    color: "#3ECF8E",
    usage: "Backend, autentikasi, dan koneksi database real-time untuk Admin Olshop.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    color: "#4169E1",
    usage: "Transaksi database dengan row locking untuk mencegah stok minus.",
  },
  {
    id: "ai",
    name: "AI Prompting",
    category: "Workflow",
    color: "#8B5CF6",
    usage: "AI-assisted web development, riset cepat, dan optimasi alur kerja digital.",
  },
  {
    id: "excel",
    name: "MS Office",
    category: "Data",
    color: "#217346",
    usage: "Pengolahan data operasional, rekap penjualan, dan formula laporan otomatis.",
  },
  {
    id: "data",
    name: "Data Analysis",
    category: "Data",
    color: "#F59E0B",
    usage: "Membaca pola penjualan, rekonsiliasi stok, dan insight performa konten.",
  },
  {
    id: "social",
    name: "Social Media",
    category: "Content",
    color: "#EC4899",
    usage: "Manajemen media sosial, riset tren, dan strategi konten digital.",
  },
  {
    id: "git",
    name: "Git",
    category: "VCS",
    color: "#F05032",
    usage: "Version control untuk melacak perubahan kode saat development.",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Deploy",
    color: "#525252",
    usage: "Deployment instan untuk aplikasi web seperti Admin Olshop & portofolio.",
  },
];
