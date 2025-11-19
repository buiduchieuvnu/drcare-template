OneHealth UI v2

Thư viện giao diện UI cho hệ thống chăm sóc sức khoẻ — phiên bản v2.
Giới thiệu
OneHealth UI v2 là một thư viện component (React/Vue/…) được xây dựng nhằm giúp nhóm phát triển ứng dụng quản lý sức khỏe nhanh chóng thiết lập các giao diện chuẩn, đồng bộ và dễ mở rộng.
Với OneHealth UI bạn sẽ có:

# Yêu cầu
Node.js phiên bản ≥ 20 (khuyến nghị phiên bản 20)
Trình duyệt hỗ trợ ES6 + (Chrome, Firefox, Edge, Safari)
(Nếu dùng React) React phiên bản ≥ 17 hoặc (Nếu dùng Vue) Vue ≥ 3

Cài đặt
# cài đặt qua npm
npm install onehealth-ui-v2

*note khi không có quyền truy cập*: Cài đặt thư viện thông qua giải nén file rar và import vào node_modules nếu ko có quyền truy cập.

Cài đặt các gói và khởi chạy dự án:
# Khởi chạy Switching Layer

$ cd root-html

$ npm install

$ npm start

# Chạy build root-html
$ npm run build

# Khởi chạy các MicroApp cơ sở
$ cd workspace

# tiến hành cài đặt các gói thư viện còn lại
$ npm install

# build tất cả các app
npm run build:all
# build thư viện common
$ npm run build commonLibrary

# khởi chạy tất cả microapp đang có trong workspace
$ npm run start:all

# Chạy trên http-server

*note* Chuyển folder tutorial(hoặc thêm các micro-app khác nếu có) từ build dist của workspace vào dist của root-html

$npm i -g http-server

$ http-server