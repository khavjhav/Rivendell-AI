import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import type { InsertContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Initialize EmailJS
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactInput) => {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
      const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

      if (!serviceId || !adminTemplateId || !userTemplateId) {
        throw new Error("EmailJS configuration is missing");
      }

      // Prepare template variables
      const templateData = {
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        serviceInterest: data.serviceInterest || "General inquiry",
        message: data.message,
        to_email: adminEmail,
      };

      try {
        // Send email to admin
        await emailjs.send(serviceId, adminTemplateId, templateData);

        // Send confirmation email to user
        await emailjs.send(serviceId, userTemplateId, {
          ...templateData,
          to_email: data.email,
        });

        return { success: true, message: "Message sent successfully" };
      } catch (error) {
        throw new Error(
          error instanceof Error ? error.message : "Failed to send email"
        );
      }
    },
    onSuccess: () => {
      toast({
        title: "Message Sent! ⚜",
        description: "Your message has reached the Council. Check your email for confirmation.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Unable to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });
}
