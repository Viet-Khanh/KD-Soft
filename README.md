# KDSoft Landing

Landing page tĩnh bằng Next.js cho phần mềm quản lý và bán lẻ desktop offline dành cho cửa hàng nhỏ.

## Chạy local

```bash
npm install
npm run dev
```

Mặc định dev server chạy tại `http://127.0.0.1:3000`.

## Build tĩnh

```bash
npm run build
```

Next.js đang cấu hình `output: "export"` trong `next.config.mjs`, nên build sẽ tạo thư mục `out/`.

## Deploy Cloudflare Pages

Project này là landing page tĩnh. Khi deploy lên Cloudflare, dùng **Pages + Static HTML Export**.
Không chọn luồng **Workers/OpenNext** vì Cloudflare sẽ chạy `npx opennextjs-cloudflare build`, không phù hợp với cấu hình static export của project này.

### Cách khuyến nghị: Cloudflare Pages + GitHub

Đẩy project này lên GitHub, sau đó vào Cloudflare Dashboard:

1. Vào `Workers & Pages`.
2. Chọn `Create application`.
3. Chọn tab `Pages`.
4. Chọn `Import an existing Git repository`.
5. Chọn repository của project này.
6. Đặt cấu hình build:

- Root directory: để trống hoặc `/`
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build` hoặc `npx next build`
- Build output directory: `out`
- Node.js version: `22.16.0`

Cloudflare sẽ tự cài dependencies, chạy build và publish thư mục `out/` lên domain dạng `*.pages.dev`.

Nếu log deploy có dòng `npx opennextjs-cloudflare build`, nghĩa là project Cloudflare đang cấu hình sai chế độ. Vào `Settings > Builds & deployments` và sửa lại build command/output directory như trên, hoặc tạo lại project Pages mới với preset `Next.js (Static HTML Export)`.

### Cách nhanh nếu chưa dùng GitHub

Chạy local:

```bash
npm install
npm run build
```

Sau đó dùng Cloudflare Pages `Direct Upload` và upload thư mục `out/`.

## Nội dung cần thay trước khi public

- Cập nhật `CONTACT_PHONE`, `ZALO_PHONE` trong `app/page.jsx`.
- Cập nhật `metadataBase` trong `app/layout.jsx` sang domain thật.
- Thay mockup giao diện trong hero bằng ảnh chụp phần mềm thật khi có screenshot chính thức.
- Chốt lại chính sách bảo hành, cập nhật và hỗ trợ kỹ thuật trước khi chạy quảng cáo.
