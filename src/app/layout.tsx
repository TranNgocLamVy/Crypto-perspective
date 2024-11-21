import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "@/src/provider/AuthProvider";
import { UserOperation } from "@/src/libs";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Coin price",
  description: "A web to view crypto price",
};

async function getUserInfo() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const user = new UserOperation();
  if (!token) {
    return null;
  }
  const res = await user.getUserInfoFromServer(token.value);
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
