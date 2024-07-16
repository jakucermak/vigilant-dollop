import { FormData } from "@/components/commands/contact";
export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
