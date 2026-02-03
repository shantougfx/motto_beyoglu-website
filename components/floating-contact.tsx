"use client";

import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://instagram.com/motto_beyoglu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Instagram'da takip et"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/905348246584?text=Merhaba%2C%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp'tan mesaj gönder"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
