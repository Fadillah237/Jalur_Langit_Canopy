'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, MessageCircle, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Tentang Kami', id: 'tentang' },
    { label: 'Produk', id: 'produk' },
    { label: 'Kontak', id: 'kontak' },
    { label: 'Ulasan', id: 'ulasan' },
  ]

  const products = [
    {
      id: 1,
      name: 'Canopy Minimalis Modern',
      image: '/canopy-modern.png',
      price: '',
      details: [
        'Desain minimalis dengan garis-garis bersih',
        'Material berkualitas tinggi (aluminium dan polikarbonat)',
        'Tahan cuaca ekstrem dan UV',
        'Instalasi profesional termasuk dalam paket',
        'Garansi hingga 5 tahun'
      ]
    },
    {
      id: 2,
      name: 'Canopy Luxury Premium',
      image: '/canopy-premium.png',
      price: '',
      details: [
        'Desain eksklusif dengan material premium',
        'Atap polycarbonate UV protection',
        'Kolom stainless steel berkualitas tinggi',
        'Sistem pencahayaan LED terintegrasi',
        'Desain custom sesuai keinginan'
      ]
    },
    {
      id: 3,
      name: 'Canopy Retractable Otomatis',
      image: '/canopy-otomatis.png',
      price: '',
      details: [
        'Sistem retractable otomatis dengan kontrol remote',
        'Material tahan air dan UV',
        'Cocok untuk terrace dan outdoor space',
        'Hemat energi dengan sistem otomatis',
        'Garansi mesin hingga 10 tahun'
      ]
    },
    {
      id: 4,
      name: 'Canopy Polycarbonate Tebal',
      image: '/canopy-tebal.png',
      price: '',
      details: [
        'Polycarbonate 10mm dengan UV protection',
        'Struktur baja galvanis yang kokoh',
        'Transparan untuk pencahayaan alami',
        'Tahan banting dan tidak mudah pecah',
        'Instalasi cepat dan rapi'
      ]
    },
    {
      id: 5,
      name: 'Canopy Kayu Modern',
      image: '/canopy-kayu.png',
      price: '',
      details: [
        'Kombinasi kayu jati dan baja berkualitas',
        'Desain modern dengan sentuhan tradisional',
        'Tahan lama dan ramah lingkungan',
        'Cocok untuk desain rumah kontemporer',
        'Pengobatan kayu premium anti rayap'
      ]
    },
    {
      id: 6,
      name: 'Canopy Kain',
      image: '/canopy-kain.png',
      price: '',
      details: [
        'Sistem otomatis dengan kontrol smartphone',
        'Sensor hujan dan angin otomatis',
        'Pencahayaan LED yang dapat diatur',
        'Kompatibel dengan smart home system',
        'Garansi elektronik dan mesin 5 tahun'
      ]
    },
  ]

  const reviews = [
    {
      name: 'Budi Santoso',
      rating: 5,
      text: 'Hasil kerja yang sangat memuaskan! Tim profesional dan tepat waktu. Kanopi kami sekarang jadi lebih cantik.',
      location: 'Jakarta Selatan'
    },
    {
      name: 'Siti Nurhaliza',
      rating: 5,
      text: 'Kualitas material sangat bagus dan desainnya elegan. Harga juga masuk akal untuk kualitas seperti ini.',
      location: 'Tangerang'
    },
    {
      name: 'Ahmad Wijaya',
      rating: 4,
      text: 'Pelayanan bagus, komunikasi lancar. Proses instalasi berjalan dengan baik dan rapi.',
      location: 'Bekasi'
    },
    {
      name: 'Dewi Kusuma',
      rating: 5,
      text: 'Sangat puas dengan hasil akhirnya. Desain cantik dan materialnya berkualitas tinggi. Recommended!',
      location: 'Depok'
    },
    {
      name: 'Rinto Harahap',
      rating: 5,
      text: 'Proses yang transparan, tim yang profesional, dan hasil yang sempurna. Tidak ada yang perlu dikomplain.',
      location: 'Bogor'
    },
    {
      name: 'Eka Putri',
      rating: 4,
      text: 'Canopynya bagus dan tahan lama. Instalasi rapi dan cepat. Terima kasih sudah membantu mewujudkan impian saya.',
      location: 'Jakarta Barat'
    },
  ]

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Jalur Langit Canopy"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg text-slate-900">Jalur Langit</h1>
                <p className="text-xs text-blue-600">Canopy Solutions</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                    activeSection === item.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`https://wa.me/08161454639?text=Halo, saya ingin mengetahui lebih lanjut tentang produk Jalur Langit Canopy`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Chat WA
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100 text-slate-700 font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`https://wa.me/08161454639?text=Halo, saya ingin mengetahui lebih lanjut tentang produk Jalur Langit Canopy`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm text-center"
              >
                Chat WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-lg text-blue-300 font-semibold mb-2 animate-pulse">Selamat datang di Jalur Langit Canopy!</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Jalur Langit Canopy</h2>
                <p className="text-xl text-blue-300 font-semibold">Solusi Kanopi Modern Untuk Hunian Anda!</p>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed">
                Temukan berbagai pilihan canopy modern berkualitas tinggi dengan desain inovatif yang sempurna untuk melindungi dan mempercantik hunian Anda. Dengan pengalaman bertahun-tahun dan tim profesional, kami siap mewujudkan impian outdoor space Anda.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('produk')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  Lihat Produk
                  <ChevronDown size={20} />
                </button>
                <a
                  href={`https://wa.me/08161454639?text=Halo, saya ingin konsultasi canopy untuk hunian saya`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 border border-white/30"
                >
                  <MessageCircle size={20} />
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/JalurLangit.png"
                alt="Canopy Modern"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tentang Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/JalurLangit.png"
              alt="Tim Jalur Langit Canopy"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Tentang Jalur Langit Canopy</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jalur Langit Canopy adalah perusahaan terpercaya yang telah melayani ribuan pelanggan di Jakarta dan sekitarnya. Kami memiliki komitmen untuk memberikan solusi canopy terbaik dengan kualitas material premium dan desain yang inovatif.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Setiap produk kami dirancang dengan cermat oleh tim profesional dan diinstalasi dengan standar kualitas tertinggi untuk memastikan kepuasan pelanggan.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Material Berkualitas Premium</h4>
                    <p className="text-slate-600 text-sm">Hanya menggunakan material terbaik dari supplier terpercaya</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Tim Profesional Berpengalaman</h4>
                    <p className="text-slate-600 text-sm">Tim installer bersertifikat dengan pengalaman puluhan tahun</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Garansi Resmi</h4>
                    <p className="text-slate-600 text-sm">Semua produk dilengkapi dengan garansi hingga 5 tahun</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Informasi Kontak</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-slate-600">WhatsApp Business</p>
                      <a href="https://wa.me/08161454639" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-blue-600">08161454639</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-slate-600">Alamat Kantor</p>
                      <p className="font-semibold text-slate-900">Jl. Pajaten Barat Raya No.3A, Pasar Minggu, Jakarta Selatan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Section */}
      <section id="produk" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Produk Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Pilihan canopy modern dengan berbagai varian desain dan harga untuk memenuhi kebutuhan Anda</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>

                  <div className="space-y-2 mb-6">
                    {product.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <span className="text-blue-600 font-bold text-lg mt-[-2px]">•</span>
                        <p className="text-slate-700 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/08161454639?text=Saya tertarik dengan produk "${product.name}" dan ingin mengetahui lebih lanjut`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form className="bg-white rounded-xl p-8 shadow-lg space-y-4">
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Pesan Anda"
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Kirim Pesan
              </button>
            </form>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">WhatsApp Business</h4>
                    <a href="https://wa.me/08161454639" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                      08161454639
                    </a>
                    <p className="text-slate-600 text-sm mt-1">Hubungi kami untuk konsultasi gratis</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Lokasi Kantor</h4>
                    <p className="text-slate-700 font-semibold">Jl. Pajaten Barat Raya No.3A, Pasar Minggu, Jakarta Selatan</p>
                    <p className="text-slate-600 text-sm mt-1">Kunjungi showroom kami untuk melihat produk secara langsung</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                <h3 className="font-bold text-lg mb-3">Jam Operasional</h3>
                <div className="space-y-2 text-sm">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 09:00 - 16:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ulasan Section */}
      <section id="ulasan" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ulasan Pelanggan</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-slate-600 mt-4">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-slate-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-600">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-3">Bagikan Pengalaman Anda</h3>
            <p className="mb-6 opacity-90">Kami ingin mendengar cerita Anda tentang pengalaman menggunakan produk Jalur Langit Canopy</p>
            <a
              href={`https://wa.me/08161454639?text=Saya ingin memberikan ulasan tentang produk Jalur Langit Canopy`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Berikan Ulasan Anda
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Jalur Langit Canopy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Solusi kanopi modern berkualitas tinggi untuk hunian Anda dengan tim profesional dan berpengalaman.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('beranda')} className="text-slate-400 hover:text-white transition-colors">Beranda</button></li>
                <li><button onClick={() => scrollToSection('tentang')} className="text-slate-400 hover:text-white transition-colors">Tentang Kami</button></li>
                <li><button onClick={() => scrollToSection('produk')} className="text-slate-400 hover:text-white transition-colors">Produk</button></li>
                <li><button onClick={() => scrollToSection('kontak')} className="text-slate-400 hover:text-white transition-colors">Kontak</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <p className="text-slate-400 text-sm">WhatsApp: <a href="https://wa.me/08161454639" className="text-white hover:text-blue-400">08161454639</a></p>
              <p className="text-slate-400 text-sm mt-2">Email: info@jalurlangtcanopy.com</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 Jalur Langit Canopy. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/08161454639?text=Halo, saya ingin mengetahui lebih lanjut tentang produk Jalur Langit Canopy`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 flex items-center justify-center"
        title="Chat WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
