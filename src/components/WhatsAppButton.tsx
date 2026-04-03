import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const msg = encodeURIComponent("Hi! I'm interested in booking Shri Ram Vatika for an event.");
  return (
    <a
      href={`https://wa.me/919339480827?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-primary-foreground" size={26} />
    </a>
  );
};

export default WhatsAppButton;
