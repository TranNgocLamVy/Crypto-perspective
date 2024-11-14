import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "@/src/provider/AuthProvider";
import { UserOperation } from "@/src/libs";

export const metadata: Metadata = {
  title: "Coin price",
  description: "A web to view crypto price",
};

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNSyIsInN1YiI6InRlc3QiLCJwYXNzd29yZCI6ImFpIGNobyBjb2kgbeG6rXQga2jhuql1IiwiZXhwIjoxNzMxNjAxNjQ3fQ.PmEb6ncosc8hv2M-kwkTuQw7MVpqHm8HC6kF184pW9A";

async function getUserInfo() {
  const user = new UserOperation();
  const res = await user.getUserInfoFromServer(token);
  const data = res.data;
  if (res.success && data) {
    return data;
  } else {
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basicUserInfor = await getUserInfo();
  return (
    <html lang="en">
      <body>
        <AuthProvider basicUserInfor={basicUserInfor}>
          <Toaster position="top-center" richColors closeButton />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
