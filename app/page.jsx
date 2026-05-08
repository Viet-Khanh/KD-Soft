import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Clock3,
  DatabaseBackup,
  FileText,
  HandCoins,
  HardDrive,
  Headphones,
  MessageCircle,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  WalletCards
} from "lucide-react";

const CONTACT_PHONE = "0900 000 000";
const ZALO_PHONE = "0900000000";
const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;

const features = [
  {
    icon: ShoppingCart,
    title: "Bán hàng nhanh",
    text: "Tạo hóa đơn, chọn hàng, ghi nhận thanh toán và lưu lịch sử bán hàng trong một màn hình gọn."
  },
  {
    icon: PackageCheck,
    title: "Kiểm soát tồn kho",
    text: "Theo dõi nhập, bán, tồn hiện tại để chủ shop biết mặt hàng nào đang thiếu hoặc tồn lâu."
  },
  {
    icon: HandCoins,
    title: "Công nợ rõ ràng",
    text: "Quản lý khách nợ, nhà cung cấp, lịch sử trả nợ và phiếu thu chi liên quan."
  },
  {
    icon: BarChart3,
    title: "Báo cáo dễ đọc",
    text: "Xem doanh thu, lợi nhuận, hàng bán, tồn kho và dòng tiền theo ngày hoặc khoảng thời gian."
  },
  {
    icon: FileText,
    title: "Nhập hàng & nhà cung cấp",
    text: "Lưu đơn nhập, giá vốn, nhà cung cấp và dữ liệu mua hàng để tính lời lỗ chính xác hơn."
  },
  {
    icon: DatabaseBackup,
    title: "Backup Google Drive",
    text: "Dữ liệu lưu tại máy và có hướng dẫn sao lưu định kỳ lên Google Drive để giảm rủi ro mất dữ liệu."
  }
];

const pains = [
  "Excel dễ sai công thức, khó truy vết khi nhiều người cùng ghi.",
  "Sổ tay không cho biết tồn kho thật sau mỗi lần bán hoặc nhập.",
  "Chủ shop khó biết hôm nay lời bao nhiêu, ai còn nợ, mặt hàng nào bán tốt.",
  "Phần mềm thuê bao tạo chi phí cố định dù cửa hàng nhỏ chưa dùng hết tính năng."
];

const faqs = [
  {
    question: "Phần mềm có cần internet để bán hàng không?",
    answer:
      "Không. KDSoft chạy desktop offline, phù hợp cửa hàng nhỏ cần bán hàng ổn định ngay cả khi mạng chập chờn. Internet chỉ cần cho các việc như backup lên Google Drive hoặc hỗ trợ từ xa."
  },
  {
    question: "Mua một lần dùng trọn đời gồm những gì?",
    answer:
      "Gói trọn đời gồm license sử dụng, hỗ trợ cài đặt ban đầu và hỗ trợ kỹ thuật theo chính sách tư vấn. Phần chi tiết về cập nhật hoặc nâng cấp lớn nên chốt trong báo giá."
  },
  {
    question: "Có dùng được cho nhiều ngành hàng không?",
    answer:
      "Có. Landing page đang định vị cho mô hình đa ngành: tạp hóa, phụ kiện, vật tư, mỹ phẩm, hàng tiêu dùng, đại lý nhỏ hoặc cửa hàng cần quản lý nhập bán tồn."
  },
  {
    question: "Có hỗ trợ máy quét mã vạch hoặc máy in hóa đơn chưa?",
    answer:
      "Phiên bản hiện tại tập trung vào cửa hàng nhỏ và các nghiệp vụ cốt lõi. Phần thiết bị bán hàng có thể đưa vào lộ trình hoặc tư vấn riêng sau demo."
  }
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="KDSoft">
          <span className="brandMark">
            <Store size={18} strokeWidth={2.4} />
          </span>
          <span>
            <strong>KDSoft</strong>
          </span>
        </a>

        <nav className="navLinks" aria-label="Điều hướng chính">
          <a href="#tinh-nang">Tính năng</a>
          <a href="#tron-doi">Trọn đời</a>
          <a href="#demo">Nhận demo</a>
        </nav>

        <a className="headerCta" href={ZALO_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Zalo demo
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroVisual" aria-hidden="true">
          <ProductScene />
        </div>
        <div className="heroOverlay" />
        <div className="container heroContent">
          <p className="eyebrow">
            <Sparkles size={16} />
            Phần mềm bán lẻ desktop offline cho cửa hàng nhỏ
          </p>
          <h1>KDSoft</h1>
          <p className="heroLead">
            Quản lý bán hàng, tồn kho, công nợ và báo cáo rõ ràng. Mua một lần,
            dùng trọn đời, không áp lực phí thuê bao hàng tháng.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href={ZALO_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              Liên hệ Zalo nhận bản demo
            </a>
            <a className="secondaryButton" href="#tinh-nang">
              Xem tính năng
              <ArrowRight size={19} />
            </a>
          </div>
          <div className="heroFacts" aria-label="Điểm nổi bật">
            <span>
              <HardDrive size={17} />
              Dùng offline
            </span>
            <span>
              <ShieldCheck size={17} />
              Dữ liệu tại máy
            </span>
            <span>
              <Headphones size={17} />
              Hỗ trợ cài đặt
            </span>
          </div>
        </div>
      </section>

      <section className="proofBand">
        <div className="container proofGrid">
          <div>
            <strong>2</strong>
            <span>cửa hàng nhỏ đã triển khai</span>
          </div>
          <div>
            <strong>1 lần</strong>
            <span>thanh toán license</span>
          </div>
          <div>
            <strong>0 mạng</strong>
            <span>vẫn bán hàng được</span>
          </div>
          <div>
            <strong>Google Drive</strong>
            <span>sao lưu dữ liệu định kỳ</span>
          </div>
        </div>
      </section>

      <section className="section painSection">
        <div className="container twoColumn">
          <div className="sectionIntro">
            <p className="sectionKicker">Vấn đề của chủ shop</p>
            <h2>Cửa hàng nhỏ vẫn cần kiểm soát chặt tiền, hàng và công nợ.</h2>
            <p>
              KDSoft được làm cho chủ cửa hàng muốn bỏ sổ sách rời rạc nhưng
              không muốn trả phí thuê bao mỗi tháng cho những tính năng chưa cần.
            </p>
          </div>

          <div className="painList">
            {pains.map((item) => (
              <div className="painItem" key={item}>
                <Check size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="tinh-nang">
        <div className="container">
          <div className="sectionHeading">
            <p className="sectionKicker">Tính năng cốt lõi</p>
            <h2>Đủ nghiệp vụ để chủ shop quản lý mỗi ngày.</h2>
            <p>
              Tập trung vào luồng nhập hàng, bán hàng, tồn kho, công nợ và báo
              cáo. Giao diện ưu tiên thao tác nhanh, dễ nhìn, ít bước.
            </p>
          </div>

          <div className="featureGrid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="featureCard" key={title}>
                <div className="featureIcon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section offlineSection">
        <div className="container offlineGrid">
          <div className="offlinePanel">
            <div className="statusRow">
              <span className="statusDot" />
              Sẵn sàng bán hàng offline
            </div>
            <div className="backupTimeline">
              <div>
                <Clock3 size={18} />
                <span>Cuối ngày</span>
                <strong>Kiểm tra doanh thu</strong>
              </div>
              <div>
                <ReceiptText size={18} />
                <span>Dữ liệu tại máy</span>
                <strong>Hóa đơn, kho, công nợ</strong>
              </div>
              <div>
                <DatabaseBackup size={18} />
                <span>Sao lưu</span>
                <strong>Đưa bản backup lên Drive</strong>
              </div>
            </div>
          </div>

          <div className="sectionIntro">
            <p className="sectionKicker">Offline trước, backup sau</p>
            <h2>Không phụ thuộc internet khi đang bán hàng.</h2>
            <p>
              Với mô hình desktop offline, cửa hàng vẫn xuất hóa đơn và ghi nhận
              dữ liệu khi mạng yếu. Khi có mạng, chủ shop có thể sao lưu file
              backup lên Google Drive theo quy trình được hướng dẫn.
            </p>
            <ul className="cleanList">
              <li>Dữ liệu bán hàng không bị gián đoạn bởi mạng.</li>
              <li>Chủ shop giữ quyền kiểm soát dữ liệu tại máy.</li>
              <li>Phù hợp cửa hàng một điểm bán, ít nhân sự.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section lifetimeSection" id="tron-doi">
        <div className="container lifetimeGrid">
          <div className="sectionIntro">
            <p className="sectionKicker">Mua một lần</p>
            <h2>Giảm chi phí cố định cho cửa hàng nhỏ.</h2>
            <p>
              Thay vì cộng dồn phí thuê bao qua từng tháng, KDSoft định vị là
              license thanh toán một lần, dùng lâu dài và có hỗ trợ kỹ thuật.
            </p>
          </div>

          <div className="compareBox" aria-label="So sánh chi phí">
            <div className="compareColumn muted">
              <h3>Phần mềm thuê bao</h3>
              <p>Trả phí mỗi tháng</p>
              <p>Chi phí tăng theo thời gian</p>
              <p>Dễ dư tính năng với shop nhỏ</p>
            </div>
            <div className="compareColumn active">
              <h3>KDSoft</h3>
              <p>
                <Check size={17} />
                Thanh toán license một lần
              </p>
              <p>
                <Check size={17} />
                Dùng desktop offline
              </p>
              <p>
                <Check size={17} />
                Có hỗ trợ cài đặt và demo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section demoSection" id="demo">
        <div className="container demoGrid">
          <div>
            <p className="sectionKicker">Nhận bản demo</p>
            <h2>Trao đổi nhanh qua Zalo để xem phần mềm có hợp cửa hàng không.</h2>
          </div>

          <div className="demoSteps">
            <article>
              <span>01</span>
              <h3>Nhắn Zalo</h3>
              <p>Gửi ngành hàng, số lượng mặt hàng và cách bạn đang quản lý hiện tại.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Xem demo</h3>
              <p>Đi qua luồng bán hàng, nhập hàng, tồn kho, công nợ và báo cáo.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Tư vấn giá</h3>
              <p>Báo giá theo nhu cầu triển khai, hỗ trợ cài đặt và chính sách bảo hành.</p>
            </article>
          </div>

          <div className="ctaPanel">
            <div>
              <strong>Muốn xem thử trước khi quyết định?</strong>
              <span>Liên hệ Zalo hoặc gọi trực tiếp: {CONTACT_PHONE}</span>
            </div>
            <a className="primaryButton" href={ZALO_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              Nhận demo qua Zalo
            </a>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container faqGrid">
          <div className="sectionIntro">
            <p className="sectionKicker">Câu hỏi thường gặp</p>
            <h2>Thông tin cần biết trước khi demo.</h2>
          </div>

          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronRight size={18} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div>
            <a className="brand footerBrand" href="#top" aria-label="KDSoft">
              <span className="brandMark">
                <Store size={18} strokeWidth={2.4} />
              </span>
              <span>
                <strong>KDSoft</strong>
              </span>
            </a>
            <p>Phần mềm bán hàng desktop offline cho cửa hàng nhỏ.</p>
          </div>
          <div className="footerLinks">
            <a href="#tinh-nang">Tính năng</a>
            <a href="#tron-doi">Mua trọn đời</a>
            <a href={ZALO_URL} target="_blank" rel="noreferrer">
              Zalo demo
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductScene() {
  const products = [
    ["Sữa hộp", "42", "8.400.000đ"],
    ["Dầu gội", "18", "2.160.000đ"],
    ["Bột giặt", "27", "4.320.000đ"],
    ["Mỹ phẩm", "13", "3.900.000đ"]
  ];

  return (
    <div className="productScene">
      <div className="sceneTopbar">
        <span />
        <strong>KDSoft Dashboard</strong>
        <em>Offline</em>
      </div>
      <div className="sceneBody">
        <aside className="sceneSidebar">
          <span className="activeLine" />
          <span />
          <span />
          <span />
        </aside>
        <div className="sceneContent">
          <div className="metricRow">
            <div>
              <span>Doanh thu hôm nay</span>
              <strong>8.420.000đ</strong>
            </div>
            <div>
              <span>Lợi nhuận tạm tính</span>
              <strong>1.840.000đ</strong>
            </div>
            <div>
              <span>Khách còn nợ</span>
              <strong>3.250.000đ</strong>
            </div>
          </div>
          <div className="sceneMain">
            <div className="chartPanel">
              <div className="chartHeader">
                <span>Bán hàng trong tuần</span>
                <strong>+18%</strong>
              </div>
              <div className="bars">
                {[44, 62, 52, 78, 66, 88, 72].map((height, index) => (
                  <span style={{ "--height": `${height}%` }} key={index} />
                ))}
              </div>
            </div>
            <div className="tablePanel">
              <div className="tableTitle">Tồn kho cần chú ý</div>
              {products.map(([name, stock, value]) => (
                <div className="tableLine" key={name}>
                  <span>{name}</span>
                  <strong>{stock}</strong>
                  <em>{value}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="invoiceStrip">
            <WalletCards size={18} />
            <span>Hóa đơn mới</span>
            <strong>HD-2026-0184</strong>
            <em>Đã thanh toán</em>
          </div>
        </div>
      </div>
    </div>
  );
}
