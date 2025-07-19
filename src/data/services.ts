import { 
  MapPin, 
  FileText, 
  Car, 
  Users, 
  Camera, 
  Bus, 
  Plane, 
  Shield 
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  priceDetail: string;
  image: string;
  icon: typeof MapPin;
  features: string[];
  included: string[];
  gallery: string[];
  popular?: boolean;
  duration?: string;
  groupSize?: string;
}

export const services: Service[] = [
  {
    id: 'private-land-tour',
    title: 'Private Land Tour',
    description: 'Jelajahi destinasi impian dengan tour privat yang disesuaikan dengan kebutuhan Anda.',
    fullDescription: 'Nikmati pengalaman traveling yang tak terlupakan dengan layanan Private Land Tour kami. Dengan guide berpengalaman dan kendaraan yang nyaman, kami akan mengantarkan Anda ke destinasi-destinasi menakjubkan dengan fleksibilitas penuh sesuai keinginan Anda.',
    price: 'Mulai dari Rp 1.500.000',
    priceDetail: 'Harga per hari untuk 1-4 orang',
    image: '/api/placeholder/400/300',
    icon: MapPin,
    features: [
      'Guide profesional berpengalaman',
      'Kendaraan AC yang nyaman',
      'Rute fleksibel sesuai keinginan',
      'Dokumentasi perjalanan',
      'Asuransi perjalanan',
      'Entrance fee ke objek wisata'
    ],
    included: [
      'Transportasi selama tour',
      'Guide berbahasa Indonesia/Inggris',
      'BBM dan tol',
      'Parkir',
      'Air mineral'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    popular: true,
    duration: '8-10 jam',
    groupSize: '1-15 orang'
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'Bantuan pengurusan visa ke berbagai negara dengan proses yang mudah dan terpercaya.',
    fullDescription: 'Layanan visa assistance kami membantu Anda mengurus visa ke berbagai negara dengan proses yang mudah, cepat, dan terpercaya. Tim ahli kami akan memandu Anda dari awal hingga visa disetujui.',
    price: 'Mulai dari Rp 500.000',
    priceDetail: 'Biaya handling, belum termasuk fee kedutaan',
    image: '/api/placeholder/400/300',
    icon: FileText,
    features: [
      'Konsultasi dokumen gratis',
      'Pengisian formulir aplikasi',
      'Pengecekan kelengkapan dokumen',
      'Penjadwalan appointment',
      'Tracking status aplikasi',
      'Garansi proses ulang jika ditolak'
    ],
    included: [
      'Konsultasi awal',
      'Bantuan pengisian form',
      'Review dokumen',
      'Koordinasi dengan kedutaan'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    duration: '7-21 hari kerja',
    groupSize: 'Individual/keluarga'
  },
  {
    id: 'private-car-driver',
    title: 'Private Car + Driver',
    description: 'Sewa mobil dengan driver berpengalaman untuk perjalanan yang aman dan nyaman.',
    fullDescription: 'Layanan sewa mobil dengan driver profesional yang berpengalaman. Nikmati kenyamanan berkendara tanpa harus repot menyetir sendiri. Tersedia berbagai jenis kendaraan sesuai kebutuhan Anda.',
    price: 'Mulai dari Rp 600.000',
    priceDetail: 'Per hari (12 jam) dalam kota',
    image: '/api/placeholder/400/300',
    icon: Car,
    features: [
      'Driver berpengalaman & berlisensi',
      'Kendaraan terawat dan bersih',
      'BBM sudah termasuk (dalam kota)',
      'Asuransi comprehensive',
      'Layanan 24/7',
      'Fleksibel pick-up point'
    ],
    included: [
      'Driver profesional',
      'BBM dalam kota',
      'Parkir',
      'Tol dalam kota',
      'Air mineral'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    duration: 'Fleksibel',
    groupSize: '1-7 orang'
  },
  {
    id: 'daily-guide',
    title: 'Daily Guide',
    description: 'Guide harian yang akan menemani dan memberikan informasi terbaik selama perjalanan.',
    fullDescription: 'Dapatkan pengalaman traveling yang lebih berkesan dengan guide harian yang berpengalaman. Guide kami akan memberikan informasi menarik tentang destinasi, budaya lokal, dan rekomendasi tempat terbaik.',
    price: 'Mulai dari Rp 350.000',
    priceDetail: 'Per hari (8 jam)',
    image: '/api/placeholder/400/300',
    icon: Users,
    features: [
      'Guide berlisensi resmi',
      'Menguasai bahasa lokal & asing',
      'Pengetahuan sejarah & budaya',
      'Rekomendasi kuliner lokal',
      'Bantuan komunikasi dengan local',
      'Dokumentasi perjalanan'
    ],
    included: [
      'Guide profesional',
      'Penjelasan destinasi',
      'Rekomendasi tempat makan',
      'Bantuan belanja oleh-oleh'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    duration: '8 jam',
    groupSize: '1-20 orang'
  },
  {
    id: 'photographer',
    title: 'Photographer',
    description: 'Jasa fotografer profesional untuk mendokumentasikan momen berharga perjalanan Anda.',
    fullDescription: 'Abadikan momen indah perjalanan Anda dengan jasa fotografer profesional kami. Dapatkan foto-foto berkualitas tinggi yang akan menjadi kenangan tak terlupakan dari trip Anda.',
    price: 'Mulai dari Rp 800.000',
    priceDetail: 'Per hari dengan 50+ edited photos',
    image: '/api/placeholder/400/300',
    icon: Camera,
    features: [
      'Fotografer berpengalaman',
      'Peralatan fotografi profesional',
      '50+ foto edited berkualitas tinggi',
      'Raw files tersedia',
      'Online gallery pribadi',
      'Konsep foto kreatif'
    ],
    included: [
      'Fotografer + equipment',
      'Photo editing',
      'Online gallery',
      'High resolution photos'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    duration: '6-8 jam',
    groupSize: '1-10 orang'
  },
  {
    id: 'private-bus',
    title: 'Private Bus',
    description: 'Sewa bus privat untuk group besar dengan kenyamanan dan keamanan terjamin.',
    fullDescription: 'Untuk grup besar, nikmati kenyamanan bus privat dengan fasilitas lengkap. Cocok untuk family trip, corporate outing, atau wisata rombongan dengan kapasitas hingga 50 orang.',
    price: 'Mulai dari Rp 2.500.000',
    priceDetail: 'Per hari untuk bus 35-45 seat',
    image: '/api/placeholder/400/300',
    icon: Bus,
    features: [
      'Bus pariwisata berkualitas',
      'AC dan audio system',
      'Driver berpengalaman rute wisata',
      'Kapasitas 25-50 orang',
      'Bagasi yang luas',
      'Asuransi penumpang'
    ],
    included: [
      'Bus + driver',
      'BBM',
      'Tol',
      'Parkir',
      'Driver allowance'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    duration: 'Fleksibel',
    groupSize: '25-50 orang'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'Layanan antar-jemput bandara yang nyaman, aman, dan tepat waktu.',
    fullDescription: 'Mulai dan akhiri perjalanan Anda dengan layanan airport transfer yang profesional. Kami menjamin ketepatan waktu dan kenyamanan perjalanan dari/ke bandara.',
    price: 'Mulai dari Rp 150.000',
    priceDetail: 'One way dalam kota',
    image: '/api/placeholder/400/300',
    icon: Plane,
    features: [
      'Monitoring flight schedule',
      'Driver standby di airport',
      'Greet & meet service',
      'Luggage assistance',
      'Multiple pickup points',
      'No hidden cost'
    ],
    included: [
      'Airport pickup/drop',
      'Tol & parkir',
      'Welcome sign',
      'Luggage handling'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    popular: true,
    duration: '1-3 jam',
    groupSize: '1-7 orang'
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    description: 'Asuransi perjalanan untuk melindungi Anda dari risiko selama traveling.',
    fullDescription: 'Lindungi perjalanan Anda dengan asuransi travel yang komprehensif. Dapatkan perlindungan dari berbagai risiko seperti kecelakaan, sakit, kehilangan bagasi, hingga pembatalan perjalanan.',
    price: 'Mulai dari Rp 50.000',
    priceDetail: 'Per orang per hari',
    image: '/api/placeholder/400/300',
    icon: Shield,
    features: [
      'Medical coverage hingga $50,000',
      'Baggage loss protection',
      'Trip cancellation coverage',
      'Emergency evacuation',
      'Personal liability',
      '24/7 assistance hotline'
    ],
    included: [
      'Medical coverage',
      'Baggage protection',
      'Emergency assistance',
      'Digital certificate'
    ],
    gallery: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
    duration: 'Sesuai durasi trip',
    groupSize: 'Individual/grup'
  }
];