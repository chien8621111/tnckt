# Website AcadClaude

Website một trang giới thiệu add-in AcadClaude. Viết bằng HTML, CSS và JavaScript thuần, không cần cài thêm công cụ build nào.

## Cấu trúc thư mục

```
acadclaude-site/
├── index.html            ← toàn bộ nội dung trang (chữ, bảng, câu hỏi...)
├── assets/
│   ├── css/style.css     ← màu sắc, font, bố cục
│   ├── js/main.js        ← menu điện thoại, nút Copy
│   └── img/favicon.svg   ← icon trên tab trình duyệt
├── downloads/            ← đặt file zip cho người dùng tải
└── README.md             ← file này
```

## 1. Xem trang trên máy

1. Mở VS Code → File → Open Folder → chọn thư mục `acadclaude-site`.
2. Vào Extensions (Ctrl+Shift+X), tìm và cài **Live Server** (tác giả Ritwick Dey).
3. Chuột phải vào `index.html` → **Open with Live Server**. Trình duyệt mở trang tại `http://127.0.0.1:5500`.
4. Mỗi lần bạn sửa và lưu file (Ctrl+S), trang tự tải lại.

## 2. Đưa lên mạng miễn phí bằng GitHub Pages

Làm một lần:

1. Tạo tài khoản tại github.com.
2. Bấm **+** (góc trên phải) → **New repository**. Đặt tên `acadclaude`, chọn **Public**, bấm **Create repository**.
3. Trong trang repository, bấm **uploading an existing file**, kéo toàn bộ nội dung bên trong thư mục `acadclaude-site` vào (kéo `index.html`, thư mục `assets`, `downloads`, `README.md`; không kéo cả thư mục cha). Bấm **Commit changes**.
4. Vào **Settings → Pages**. Ở mục Source chọn **Deploy from a branch**, Branch chọn **main** và **/(root)**, bấm **Save**.
5. Chờ 1–2 phút, tải lại trang Settings → Pages sẽ thấy địa chỉ dạng `https://<tên-tài-khoản>.github.io/acadclaude/`.

## 3. Quy trình cập nhật

Cách đơn giản (qua trình duyệt): mở file trên github.com → bấm biểu tượng bút chì → sửa → **Commit changes**. Trang tự cập nhật sau khoảng 1 phút.

Cách nên dùng lâu dài (qua VS Code, có lịch sử thay đổi):

1. Cài **GitHub Desktop** (desktop.github.com), đăng nhập, chọn **File → Clone repository** → chọn `acadclaude` → chọn thư mục trên máy.
2. Mở thư mục đó bằng VS Code, sửa và xem bằng Live Server.
3. Quay lại GitHub Desktop: ghi mô tả ngắn ở ô Summary (ví dụ "Thêm câu hỏi về AutoCAD 2025") → **Commit to main** → **Push origin**.
4. Khoảng 1 phút sau trang trên mạng được cập nhật.

Nếu sửa hỏng, trong GitHub Desktop vào tab **History**, chuột phải vào lần commit lỗi → **Revert changes in commit** để quay lại.

## 4. Muốn sửa gì thì mở file nào

| Muốn sửa | Mở file | Tìm chỗ |
|---|---|---|
| Tiêu đề, đoạn giới thiệu đầu trang | `index.html` | `<!-- PHẦN MỞ ĐẦU -->` |
| Thêm lệnh vào bảng | `index.html` | `<tbody>` trong mục B, chép một dòng `<tr>...</tr>` rồi sửa |
| Thêm câu hỏi | `index.html` | mục F, chép một khối `<details>...</details>` |
| Đổi màu toàn trang | `assets/css/style.css` | phần `:root` ở đầu file |
| Màu khi máy dùng giao diện tối | `assets/css/style.css` | khối `@media (prefers-color-scheme: dark)` |
| File cho người dùng tải | thư mục `downloads/` | đặt file cùng tên với link trong mục E |
| Tiêu đề trên tab trình duyệt và Google | `index.html` | thẻ `<title>` và `<meta name="description">` |

Về file tải về: GitHub giới hạn mỗi file 100 MB. Khi có nhiều phiên bản, nên dùng **Releases** của GitHub (trang repository → Releases → Draft a new release → đính kèm file zip), rồi sửa link trong mục E trỏ tới file đó.

## 5. Lộ trình học để tự phát triển

1. **HTML** (1–2 tuần): thẻ tiêu đề, đoạn văn, link, bảng, danh sách. Luyện bằng cách thêm mục mới vào `index.html`. Tài liệu: developer.mozilla.org/vi (MDN), phần "HTML basics".
2. **CSS** (2–3 tuần): selector, biến `--ten-bien`, flexbox, grid, media query. Luyện bằng cách đổi màu trong `:root` và xem trang thay đổi. MDN có phần "CSS layout".
3. **Công cụ trình duyệt**: bấm F12 trên trang, chọn một phần tử để xem CSS đang áp dụng và sửa thử trực tiếp (chỉ tạm thời, không lưu vào file).
4. **JavaScript** (khi cần tương tác): đọc `main.js`, mỗi phần có chú thích. Thử viết thêm, ví dụ một nút bật/tắt giao diện tối.
5. **Trang thứ hai**: tạo `huong-dan.html` bằng cách chép `index.html`, giữ phần đầu và chân trang, thay nội dung giữa. Thêm link tới nó trong thanh điều hướng.

Có thể nhờ Claude Code: mở thư mục website và gõ yêu cầu, ví dụ "Thêm trang huong-dan.html có cùng đầu trang và chân trang, nội dung là hướng dẫn viết tool mới". Sau đó đọc lại code nó viết để học.

## 6. Tên miền riêng (khi cần)

1. Mua tên miền (ví dụ `acadclaude.vn`) tại nhà cung cấp như Mắt Bão, PA Vietnam, Tenten.
2. Trong GitHub: Settings → Pages → **Custom domain**, nhập tên miền, bấm Save.
3. Tại nhà cung cấp tên miền, thêm bản ghi DNS theo hướng dẫn "Managing a custom domain for your GitHub Pages site" trong tài liệu GitHub.
4. Sau khi DNS có hiệu lực, tích **Enforce HTTPS**.
