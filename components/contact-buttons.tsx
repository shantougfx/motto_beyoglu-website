import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";

interface ContactButtonsProps {
  productName?: string;
  variant?: "default" | "large";
  className?: string;
}

export function ContactButtons({
  productName,
  variant = "default",
  className = "",
}: ContactButtonsProps) {
  const whatsappMessage = productName
    ? `Merhaba, "${productName}" ürünü hakkında bilgi almak istiyorum.`
    : "Merhaba, ürünleriniz hakkında bilgi almak istiyorum.";

  const whatsappUrl = `https://wa.me/905348246584?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = "https://instagram.com/motto_beyoglu";

  if (variant === "large") {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full h-12 bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 text-base font-medium">
            <WhatsAppIcon className="h-5 w-5" />
            {"WhatsApp'tan Yaz"}
          </Button>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full h-12 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white gap-2 text-base font-medium">
            <Instagram className="h-5 w-5" />
            {"Instagram'dan Yaz"}
          </Button>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-1.5 text-xs"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </Button>
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white gap-1.5 text-xs"
        >
          <Instagram className="h-4 w-4" />
          Instagram
        </Button>
      </a>
    </div>
  );
}
