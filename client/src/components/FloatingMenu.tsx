import { useState } from "react";
import { MessageCircle, X, Bot } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ChatWidget } from "./ChatWidget";

export function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* WhatsApp Button */}
                            <motion.a
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                transition={{ delay: 0.1 }}
                                href="https://wa.me/447376971045"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
                                aria-label="Contact via WhatsApp"
                            >
                                <span className="text-sm font-medium px-2">WhatsApp</span>
                                <FaWhatsapp className="w-6 h-6" />
                            </motion.a>

                            {/* AI Chat Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                transition={{ delay: 0.05 }}
                                onClick={() => {
                                    setIsChatOpen(true);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                                aria-label="Open AI Chat"
                            >
                                <span className="text-sm font-medium px-2">Rivendell AI</span>
                                <Bot className="w-6 h-6" />
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>

                {/* Main Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="bg-[hsl(var(--gold))] text-white p-4 rounded-full shadow-xl hover:bg-[hsl(var(--gold-dark))] transition-colors relative"
                    aria-label="Open contact menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                            >
                                <X className="w-8 h-8" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                            >
                                <MessageCircle className="w-8 h-8" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Actual Chat Widget */}
            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    );
}
