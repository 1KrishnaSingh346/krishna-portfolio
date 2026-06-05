import { EmailPayload } from "@/type/email";

interface MailResponse {
  success: boolean;
  message: string;
}

export function useSendMail() {
    const sendMail = async (data: EmailPayload): Promise<MailResponse> => {
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        return {
          success: false,
          message: errorData?.message || "Failed to send message.",
        };
      }

      const result = await response.json();
      return {
        success: result.success ?? true,
        message: result.message || "Message sent successfully.",
      };
      
    } catch (e) {
      console.error("Send mail error:", e);
      return {
        success: false,
        message: "Unable to connect to the server. Please try again later.",
      };
    }
  };

  return { sendMail };
}