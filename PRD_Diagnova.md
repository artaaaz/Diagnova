# Product Requirements Document (PRD)
## Diagnova — AI-Powered Laboratory Information System (LIS)

| Field | Detail |
|---|---|
| Product Name | Diagnova |
| Tagline | Laboratory Information System with AI-Powered Intelligence |
| Document Owner | Product Management |
| Status | Draft v1.0 |
| Sumber | Brand Guideline Diagnova, "Apa Itu Diagnova" (Tiba Tiba Agency, 2026), Diagnova Website Content Structure |
| Target Pasar | Rumah Sakit & Klinik Modern (Indonesia) |

---

## 1. Executive Summary

Diagnova adalah **Laboratory Information System (LIS) end-to-end** yang dilengkapi kecerdasan buatan (Nova AI) untuk menghubungkan pasien, spesimen, instrumen laboratorium, alur kerja (workflow), dan informasi klinis dalam satu ekosistem yang terintegrasi. Diagnova diposisikan bukan sekadar sistem pencatatan hasil lab, melainkan sebagai **"AI-Powered Laboratory Intelligence Platform"** yang mengubah paradigma laboratorium dari *manual, terisolasi, dan reaktif* menjadi *intelligent, connected, dan proactive*.

Filosofi produk: **Data → Intelligence → Insight → Decision**.

---

## 2. Background & Problem Statement

Berdasarkan analisis kompetitif terhadap LIS eksisting di Indonesia, ditemukan 6 kelemahan utama yang menjadi *problem statement* produk:

| # | Masalah LIS Eksisting | Dampak |
|---|---|---|
| 1 | Integrasi Terbatas | Terisolasi dari HMIS/RME → duplikasi input data pasien |
| 2 | Ketergantungan Input Manual | Registrasi & entry manual → risiko human error, TAT (Turn Around Time) lambat |
| 3 | Infrastruktur & Koneksi Rentan | Koneksi analyzer sering terputus, downtime tinggi, tergantung tim IT lokal |
| 4 | Dukungan IT & SDM Lemah | Support teknis lambat, kompetensi bervariasi, resistensi pengguna |
| 5 | Audit Trail & Pelaporan Minim | Riwayat medis tidak lengkap, pelacakan revisi hasil tidak ketat |
| 6 | Biaya High-CapEx & Lock-in | Instalasi awal mahal, kontrak kaku, tidak mendukung alat lama |

**Kebutuhan pasar:** solusi manajemen laboratorium medis yang menjamin **akurasi data**, **efisiensi operasional**, dan **kecepatan penyampaian hasil analisis klinis**.

---

## 3. Goals & Objectives

### 3.1 Vision
Menjadi fondasi cerdas (intelligent foundation) bagi laboratorium medis modern.

### 3.2 Mission
Memberdayakan laboratorium dengan teknologi cerdas yang mengubah data diagnostik kompleks menjadi insight yang jelas dan dapat ditindaklanjuti (actionable).

### 3.3 Product Goals (v1)
1. Menyediakan **satu platform LIS end-to-end** yang mencakup seluruh alur kerja laboratorium: penerimaan spesimen → pemisahan/pemrosesan → analisis → validasi → pelaporan.
2. Mengotomatisasi identifikasi spesimen (barcode) untuk **mencegah tertukarnya sampel pasien**.
3. Melakukan **auto-capture hasil instrumen** (direct analyzer interfacing) sehingga menghilangkan input manual berulang.
4. Menyediakan **deteksi hasil abnormal otomatis** beserta alarm untuk mempercepat tindakan klinis.
5. Menghadirkan **Nova AI** sebagai copilot laboratorium yang merangkum & menjelaskan hasil lab dalam bahasa yang mudah dipahami, tanpa menggantikan keputusan dokter.
6. Menjamin **interoperabilitas native** dengan SIMRS/HIS, RME, dan kesiapan integrasi SATUSEHAT.
7. Meningkatkan **TAT (Turn Around Time)** laboratorium hingga **70%** melalui otomatisasi & barcode.
8. Menjamin **uptime 99.9%** melalui Smart Gateway Resilient dengan Offline-Buffer Mode.
9. Menyediakan **full digital audit trail** untuk setiap perubahan/hasil spesimen (compliance & traceability).
10. Menawarkan **skema harga fleksibel (SaaS)** yang kompatibel dengan 500+ instrumen medis, termasuk instrumen lama.

### 3.4 Non-Goals (Out of Scope v1)
- Nova AI **tidak** memberikan keputusan diagnosis/pengobatan — seluruh insight AI wajib direview & divalidasi dokter/analis sebelum digunakan secara klinis.
- Diagnova tidak menggantikan HIS/EMR rumah sakit; posisinya sebagai sistem laboratorium yang terhubung (bukan pengganti rekam medis).
- Modul pembayaran/billing pasien tidak termasuk dalam scope awal (dapat menjadi fase berikutnya, TBD).

---

## 4. Target Users & Personas

| Persona | Kebutuhan Utama | Interaksi dengan Diagnova |
|---|---|---|
| **Analis Laboratorium** | Kecepatan input, minim error, workflow sederhana | Diagnova Flow, barcode, auto-verifikasi |
| **Dokter Patologi Klinik / Klinisi** | Hasil akurat, cepat, mudah dipahami, ada alarm untuk nilai kritis | Nova AI summary, Diagnova Connect, alert abnormal |
| **Kepala Laboratorium / Manajemen** | Visibilitas produktivitas, kualitas, dan performa operasional | Diagnova Insight (TAT analytics, workload, quality indicators) |
| **Tim IT Rumah Sakit** | Integrasi mudah, stabil, aman | Diagnova Connect (HL7/ASTM), Smart Gateway, SLA 24/7 |
| **Manajemen Rumah Sakit/Klinik (Buyer)** | ROI, kepatuhan regulasi, biaya terjangkau | Skema SaaS, audit trail, kesiapan SATUSEHAT |

---

## 5. Product Architecture (Brand Architecture → Modul Fungsional)

Diagnova terdiri dari **5 pilar produk (One Ecosystem. One Intelligence.)**:

### 5.1 Diagnova Core — Laboratory Information System
Jantung operasional laboratorium: manajemen order, spesimen, hasil, dan pelaporan.

### 5.2 Diagnova AI (Nova AI) — AI-Powered Laboratory Intelligence
- Result summarization (ringkasan hasil lab dalam bahasa sederhana)
- Trend analysis (analisis tren hasil pasien dari waktu ke waktu)
- Abnormal result detection (deteksi hasil di luar rentang normal)
- Delta checks (perbandingan hasil terhadap hasil sebelumnya)
- Quality intelligence (deteksi anomali kualitas hasil)
- Workflow assistance
- Natural-language queries (tanya-jawab berbasis bahasa alami)
- Operational recommendations

### 5.3 Diagnova Flow — Workflow Engine
Satu alur kerja tanpa kompleksitas berlebih:
`Specimen Collection → Accessioning → Processing → Analysis → Validation → Reporting`

### 5.4 Diagnova Insight — Analytics & Reporting
- TAT analytics
- Productivity & workload
- Quality indicators
- Specimen trends
- Department performance
- Operational intelligence

### 5.5 Diagnova Connect — Interoperability Layer
Menghubungkan seluruh ekosistem:
- Instrumen laboratorium (analyzer)
- HIS (Hospital Information System)
- EMR (Electronic Medical Record) / RME
- Sistem rumah sakit lainnya
- Klinisi
- Laboratorium eksternal (rujukan)

---

## 6. Functional Requirements — 5 Modul Klinis Utama

| Modul | Deskripsi Fungsional |
|---|---|
| **1. Rutin & Hematologi** | Pemeriksaan darah harian, urin, dan kimia klinik bervolume tinggi dengan workflow berkecepatan tinggi. |
| **2. Manajemen Bank Darah** | Pengelolaan ketersediaan stok, masa kadaluarsa, crossmatching, dan distribusi kantong darah secara aman. |
| **3. Inventaris & Reagen** | Pemantauan stok reagen medis laboratorium secara real-time untuk mencegah kehabisan bahan habis pakai. |
| **4. Patologi** | Pencatatan pemeriksaan jaringan tubuh & sitologi berbasis mikroskopis dengan tracking spesimen ketat. |
| **5. Mikrobiologi** | Identifikasi kuman, kultur bakteri, dan uji sensitivitas antibiotik untuk terapi medis yang tepat sasaran. |

### 6.1 Alur Fungsional Detil: Perjalanan Spesimen (End-to-End)

| Tahap | Fungsi Sistem |
|---|---|
| 1. Penerimaan & Label | Sistem menerbitkan barcode unik per spesimen untuk mencegah tertukar antar pasien. |
| 2. Pemisahan/Pemrosesan | Integrasi dengan mesin pemroses (centrifuge/analyzer) untuk mempersiapkan sampel. |
| 3. Cek Otomatis (Analysis) | Direct analyzer interfacing menangkap hasil pemeriksaan otomatis (mis. hitung sel darah, kadar gula) tanpa entry manual. |
| 4. Catat & Cek Ulang (Validation) | Sistem melakukan auto-verification; nilai di luar rentang normal ditandai untuk review analis/dokter. |
| 5. Hasil Siap Dikirim | Hasil final dikirim ke dokter/klinisi melalui integrasi HIS/RME. |

### 6.2 Fitur Nova AI — Requirement Detail

| Fitur | Fungsi | Guardrail |
|---|---|---|
| Ringkasan hasil (plain-language explanation) | Mengubah angka hasil lab (mis. Hb 10.2 g/dL) menjadi penjelasan sederhana bagi pengguna | Wajib menampilkan disclaimer "keputusan pengobatan ditentukan oleh dokter" |
| Deteksi pola (pattern recognition) | Belajar dari data historis hasil lab untuk mengenali pola serupa | Model tidak melakukan otomatisasi keputusan klinis |
| Alarm dini (early notification) | Memberi notifikasi ke dokter/analis lebih awal saat ada nilai kritis | Notifikasi, bukan keputusan final |
| Human-in-the-loop validation | Seluruh output Nova AI diperiksa ulang oleh analis/dokter sebelum digunakan | Wajib — non-negotiable |

**Nova AI Interaction Model:** `Observe → Understand → Explain → Assist`

**Nova AI Personality (untuk desain konten/UX writing):** Professional, Concise, Evidence-Oriented, Transparent, Supportive, Cautious.

---

## 7. Integration Requirements

| Sistem Eksternal | Kebutuhan Integrasi |
|---|---|
| SIMRS / HIS | Bridging otomatis (seamless native integration) |
| RME (Rekam Medis Elektronik) | Sinkronisasi data pasien & hasil lab |
| SATUSEHAT | Kesiapan/kompatibilitas untuk interoperabilitas nasional |
| Analyzer / Instrumen Lab | Direct interfacing via protokol **HL7 / ASTM**, mendukung 500+ instrumen (termasuk instrumen lama) |
| External Laboratories | Rujukan/pertukaran hasil antar laboratorium |

### 7.1 Konektivitas & Resiliensi
- **Smart Gateway Resilient**: menggunakan protokol HL7/ASTM.
- **Offline-Buffer Mode**: data tetap tersimpan lokal saat koneksi terputus dan tersinkron otomatis saat koneksi pulih.
- **Target uptime: 99.9%**.

---

## 8. Non-Functional Requirements

| Kategori | Requirement |
|---|---|
| **Performance** | Pengurangan TAT hingga 70% melalui otomatisasi & barcode |
| **Reliability** | Uptime 99.9%, Offline-Buffer Mode saat koneksi instrumen/jaringan terputus |
| **Security & Compliance** | Full digital audit trail untuk setiap perubahan hasil spesimen; sistem harus transparan, aman (secure), dan akuntabel |
| **Usability** | UX intuitif, mudah dipelajari analis laboratorium (reduce cognitive overload — prinsip "Clinical Calm") |
| **Support** | SLA Dedicated 24/7 dengan pendampingan teknis responsif |
| **Scalability/Interoperability** | Kompatibel dengan 500+ instrumen medis dan model SaaS agar mudah diadopsi berbagai skala lab |
| **Data Integrity** | Sistem identifikasi barcode unik untuk mencegah duplikasi/tertukarnya sampel |
| **Explainability (AI)** | Insight dari Nova AI harus memiliki reasoning yang dapat dipahami pengguna (explainable AI) |

---

## 9. UI/UX Design Principles (dari Brand Guideline)

| Prinsip | Deskripsi |
|---|---|
| Information Hierarchy | Prioritaskan informasi kritis di tampilan utama |
| Progressive Disclosure | Tampilkan kompleksitas hanya saat dibutuhkan |
| Intelligent Defaults | Kurangi input manual yang tidak perlu |
| Contextual Intelligence | AI muncul tepat di titik ia bisa membantu (contextual AI assistance) |
| Explainability | Insight AI harus memiliki alasan yang mudah dipahami |
| Iconography | Minimal, rounded, geometric |
| Photography Style | Clinical + Human + Technological — fokus pada profesional lab, analyzer modern, workflow digital & kolaborasi |

### 9.1 Visual Identity (ringkasan untuk referensi tim desain produk)
- **Warna Primer:** Diagnova Blue `#345dab` (Trust, Science, Intelligence, Stability), Nova Blue `#56ade2` (Technology, Connectivity, Progress, Innovation)
- **Warna Sekunder:** `#cae2f1`, `#ffffff`, `#000000`
- **Gradient:** Diagnova Blue → Nova Blue, merepresentasikan alur Data → Intelligence → Insight
- **Tipografi:** Display — Mokoto; Body — Inter
- **Brand Personality:** Intelligent, Precise, Human, Progressive, Calm, Confident ("Intelligent by Nature. Human by Design")

---

## 10. Information Architecture (Website / Product Marketing Site)

Struktur ini merepresentasikan bagaimana product story & modul dikomunikasikan ke calon pengguna — relevan sebagai referensi *content requirement* untuk tim marketing/produk:

```
DIAGNOVA
├── HOME — Landing page utama, penjelasan cepat + CTA ke solusi/demo
├── PLATFORM — Diagnova sebagai LIS end-to-end
│   ├── Overview
│   ├── Workflow
│   ├── Automation
│   ├── Reporting
│   └── Analytics
│   (Core message: One platform to manage the entire laboratory workflow)
├── SOLUTIONS — Berdasarkan jenis institusi/kebutuhan
│   ├── Hospital Laboratory
│   ├── Clinical Laboratory
│   ├── Pathology
│   ├── Microbiology
│   ├── Blood Bank
│   └── Nova AI
│   (Core message: Different laboratory needs, one connected Diagnova platform)
├── MODULES — Detail produk/modul
│   ├── Routine & Hematology
│   ├── Blood Bank
│   ├── Inventory & Reagent
│   ├── Pathology
│   └── Microbiology
│   (Core message: Modular system that can adapt to different laboratory operations)
├── NOVA AI
│   ├── Overview
│   ├── How It Works
│   └── AI + Doctor
│   (Core message: AI assists. Doctors decide.)
├── INTEGRATION
│   ├── SIMRS / HIS
│   ├── RME
│   ├── Analyzer
│   ├── SATUSEHAT
│   └── Connectivity
│   (Core message: Connect Diagnova with the systems and instruments your laboratory already uses)
└── REQUEST DEMO
    (Core message: See how Diagnova can work for your laboratory)
```

---

## 11. Competitive Positioning — LIS Eksisting vs Diagnova

| Kelemahan LIS Eksisting | Solusi/Keunggulan Diagnova |
|---|---|
| Integrasi Terbatas | Seamless Native Integration — bridging otomatis dengan SIMRS, RME & siap terhubung SATUSEHAT |
| Ketergantungan Input Manual | 100% Otomatisasi & Barcode — direct analyzer interfacing & auto-verification, TAT turun 70% |
| Infrastruktur & Koneksi Rentan | Smart Gateway Resilient — protokol HL7/ASTM dengan Offline-Buffer Mode, uptime 99.9% |
| Dukungan IT & SDM Lemah | SLA Dedicated 24/7 & UX Intuitif |
| Audit Trail & Pelaporan Minim | Full Digital Audit Trail |
| Biaya High-CapEx & Lock-in | Skema Fleksibel & Universal — model SaaS terjangkau, kompatibel dengan 500+ instrumen |

---

## 12. Success Metrics / KPI (Usulan)

| KPI | Target |
|---|---|
| Pengurangan TAT (Turn Around Time) | ≥ 70% dibanding proses manual |
| Uptime sistem | ≥ 99.9% |
| Tingkat kesalahan input manual (human error) | Mendekati 0% pada spesimen yang melalui barcode & direct interfacing |
| Jumlah instrumen kompatibel | ≥ 500 jenis instrumen medis |
| Waktu respons SLA support | 24/7, response time sesuai kontrak SLA |
| Adopsi Nova AI oleh analis/dokter (usage rate) | TBD — perlu baseline pasca-rilis |
| Kepatuhan audit trail | 100% perubahan hasil tercatat dan dapat ditelusuri |

---

## 13. Risks & Assumptions

| Risiko | Mitigasi |
|---|---|
| Ketergantungan pada koneksi jaringan rumah sakit | Offline-Buffer Mode pada Smart Gateway |
| Resistensi pengguna terhadap sistem baru | UX intuitif, SLA pendampingan 24/7, desain "Clinical Calm" untuk mengurangi cognitive overload |
| Kesalahan interpretasi output AI oleh pengguna | Wajib human-in-the-loop validation & disclaimer eksplisit pada setiap output Nova AI |
| Variasi instrumen lab lama (legacy) di lapangan | Dukungan protokol HL7/ASTM yang kompatibel dengan 500+ instrumen |
| Kepatuhan terhadap regulasi kesehatan data (mis. SATUSEHAT) | Modul integrasi SATUSEHAT direncanakan sejak fase integrasi awal |

**Asumsi:** Dokumen ini disusun berdasarkan materi brand & konsep produk yang tersedia (brand guideline, deck "Apa Itu Diagnova", dan struktur konten website). Spesifikasi teknis mendetail (skema database, API contract, SLA numerik kontraktual, arsitektur infrastruktur cloud, dsb.) **belum tersedia** di sumber dan perlu didefinisikan lebih lanjut bersama tim engineering sebelum development dimulai.

---

## 14. Open Questions (Untuk Diklarifikasi dengan Stakeholder)

1. Apakah Diagnova akan dikembangkan sebagai multi-tenant SaaS atau on-premise/hybrid per rumah sakit?
2. Bagaimana arsitektur teknis detail integrasi HL7/ASTM (versi protokol, middleware yang digunakan)?
3. Model AI apa yang mendasari Nova AI (LLM pihak ketiga, model in-house, atau hybrid)? Bagaimana penanganan data pasien sensitif (PII/PHI) terhadap model AI ini?
4. Apa target sertifikasi/regulasi yang wajib dipenuhi (mis. ISO 15189, standar Kemenkes, keamanan data SATUSEHAT)?
5. Bagaimana skema harga SaaS ditetapkan (per modul, per instrumen, per volume pemeriksaan)?
6. Apakah ada roadmap modul lanjutan di luar 5 modul utama (mis. billing, LIS mobile app, portal pasien)?

---

## 15. Appendix — Brand Reference untuk Tim Produk

- **Brand Essence:** Diagnova = Diagnosis + Nova → "A New Era of Diagnosis"
- **Brand Promise:** "From Results to Intelligence" (Manual→Intelligent, Disconnected→Connected, Reactive→Proactive, Data→Insight, Information→Intelligence)
- **Core Values:** Precision, Intelligence, Connection, Trust, Progress
- **Positioning Statement:** "Diagnova doesn't just manage laboratory information. It makes laboratory information intelligent."

---

*Dokumen ini disusun berdasarkan Diagnova Brand Guideline, materi "Apa Itu Diagnova" (Tiba Tiba Agency, 2026), dan Diagnova Website Content Structure. Bagian teknis (API, data model, non-functional spec numerik) perlu divalidasi lebih lanjut bersama tim engineering sebelum masuk ke fase development.*
