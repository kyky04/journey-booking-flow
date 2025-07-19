import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp perusahaan
  const whatsappMessage = "Halo! Saya tertarik dengan layanan travel Anda.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-secondary text-secondary-foreground p-4 rounded-full shadow-glow hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;