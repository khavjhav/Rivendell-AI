import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    text: string;
    sender: "user" | "ai";
    timestamp: Date;
}

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Mae govannen! Welcome to Rivendell AI. How can I assist you on your digital journey today?",
            sender: "ai",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI delay and response
        setTimeout(() => {
            const aiResponses = [
                "That involves deep magic tailored to your needs. Could you elaborate?",
                "Our elves are crafting solutions for that as we speak.",
                "A fascinating query! Let us consult the archives of Rivendell.",
                "Indeed, wisdom is the cornerstone of our craft.",
                "I can certainly help you navigate our services. What specific realm interests you?",
            ];
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: "ai",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-background border border-[hsl(var(--gold)/0.3)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <Bot className="w-6 h-6" />
                            <span className="font-serif font-bold tracking-wide">Rivendell Guide</span>
                        </div>
                        <button onClick={onClose} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/95 scrollbar-thin scrollbar-thumb-[hsl(var(--gold)/0.3)]">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex w-full",
                                    msg.sender === "user" ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                                        msg.sender === "user"
                                            ? "bg-[hsl(var(--gold))] text-white rounded-tr-none"
                                            : "bg-muted text-foreground rounded-tl-none border border-[hsl(var(--gold)/0.1)]"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-[hsl(var(--gold)/0.1)] flex gap-1 items-center">
                                    <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-[hsl(var(--gold)/0.1)] bg-background">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Ask the council..."
                                className="w-full bg-muted/50 border border-[hsl(var(--gold)/0.2)] rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-[hsl(var(--gold))] focus:ring-1 focus:ring-[hsl(var(--gold))] transition-all text-sm placeholder:text-muted-foreground"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 p-2 bg-[hsl(var(--gold))] text-white rounded-full hover:bg-[hsl(var(--gold-dark))] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-muted-foreground">Powered by Rivendell AI</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
