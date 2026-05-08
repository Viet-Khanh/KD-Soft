import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kdsoft.example.com"),
  title: {
    default: "KDSoft - Phần mềm bán hàng trọn đời cho cửa hàng nhỏ",
    template: "%s | KDSoft"
  },
  description:
    "KDSoft là phần mềm quản lý bán lẻ desktop offline cho cửa hàng nhỏ: bán hàng, tồn kho, công nợ, nhập hàng, sổ quỹ và báo cáo rõ ràng. Mua một lần, dùng trọn đời.",
  keywords: [
    "phần mềm bán hàng trọn đời",
    "phần mềm quản lý cửa hàng",
    "phần mềm bán lẻ offline",
    "phần mềm quản lý tồn kho",
    "phần mềm bán hàng không thuê bao",
    "phần mềm công nợ cửa hàng nhỏ"
  ],
  openGraph: {
    title: "KDSoft - Phần mềm bán hàng trọn đời",
    description:
      "Quản lý bán hàng, tồn kho, công nợ và báo cáo cho cửa hàng nhỏ. Desktop offline, backup Google Drive, hỗ trợ cài đặt.",
    type: "website",
    locale: "vi_VN"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#145839"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
