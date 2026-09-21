export interface SubpageContent {
  slug: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  highlights: { title: string; desc: string; stat?: string }[];
  clinicalWorkflow?: string[];
  keyCapabilities: string[];
  complianceNotes?: string;
  quote?: string;
}

export const PLATFORM_SUBPAGES: Record<string, SubpageContent> = {
  overview: {
    slug: 'overview',
    eyebrow: 'DIAGNOVA CORE',
    title: 'One Platform to Manage the Entire Laboratory Workflow',
    subtitle: 'From accessioning to clinical validation, experience total operational visibility.',
    description: 'Diagnova Core is the central nervous system of modern laboratories. It unifies order management, specimen tracking, direct analyzer interfacing, auto-verification, and clinical reporting into one cohesive, cloud-ready architecture.',
    highlights: [
      { title: 'End-to-End Orchestration', desc: 'Eliminates departmental silos by uniting hematology, chemistry, microbiology, and pathology.', stat: '100% Unified' },
      { title: 'Drastic TAT Reduction', desc: 'Automated barcode routing and bidirectional analyzer interfacing cut turnaround time.', stat: 'Up to 70%' },
      { title: 'Zero Sample Confusion', desc: 'Unique barcode serialization and digital chain-of-custody tracking across all bench stations.', stat: '99.99% Accuracy' },
    ],
    clinicalWorkflow: ['Specimen Collection', 'Accessioning & Barcode', 'Direct Analyzer Ingestion', 'Nova AI Delta Check', 'Doctor Validation', 'Multi-channel Reporting'],
    keyCapabilities: [
      'Universal specimen tracking with unique barcode generation',
      'Bidirectional direct analyzer interfacing (HL7 / ASTM)',
      'Configurable auto-verification rules tailored to lab protocols',
      'Real-time turnaround time (TAT) monitoring and bottleneck detection',
      'Comprehensive digital audit trail meeting ISO 15189 standards',
    ],
    quote: 'Diagnova doesn\'t just manage laboratory information. It makes laboratory information intelligent.',
  },
  workflow: {
    slug: 'workflow',
    eyebrow: 'DIAGNOVA FLOW',
    title: 'Streamlined Laboratory Workflow Engine',
    subtitle: 'Specimen Collection → Accessioning → Processing → Analysis → Validation → Reporting',
    description: 'Diagnova Flow eliminates redundant steps and manual paper logs. From the moment a specimen is collected at phlebotomy to final clinical sign-off, every stage is digitally validated and synchronized in real-time.',
    highlights: [
      { title: 'Sequential Verification', desc: 'Strict stage-gate progression ensures no specimen skips essential pre-analytical checks.' },
      { title: 'Smart Specimen Routing', desc: 'Automatically directs sample aliquots to appropriate workstations and analyzers.' },
      { title: 'Pre-Analytical Quality Shield', desc: 'Flags hemolysis, icterus, and lipemia (HIL) flags before analysis starts.' },
    ],
    clinicalWorkflow: ['1. Phlebotomy & Collection', '2. Smart Accessioning', '3. Robotic/Manual Processing', '4. Instrumental Analysis', '5. Pathologist Review', '6. HIS/RME Auto-Delivery'],
    keyCapabilities: [
      'Digital chain-of-custody tracking from bedside to bench',
      'Integrated HIL index screening alerts',
      'Worklist auto-balancing across available analyzers',
      'Real-time specimen location and shelf-life tracking',
    ],
  },
  automation: {
    slug: 'automation',
    eyebrow: 'INTELLIGENT AUTOMATION',
    title: '100% Automation & Direct Analyzer Interfacing',
    subtitle: 'Zero manual transcriptions. Direct machine capture with auto-verification.',
    description: 'Diagnova captures test parameters directly from 500+ diagnostic instruments via HL7/ASTM protocols, eliminating manual data entry mistakes and delivering clinical values instantly to validation queues.',
    highlights: [
      { title: 'Direct Machine Interfacing', desc: 'Direct protocol bridging eliminates re-keying numbers from analyzer printouts.', stat: '500+ Analyzers' },
      { title: 'Auto-Verification Engine', desc: 'Instantly releases normal, routine results that meet customizable multi-tier rules.', stat: 'Instant Release' },
      { title: 'Real-time Panic Alerts', desc: 'Critical abnormal values trigger immediate visual and SMS/WhatsApp notifications to clinicians.', stat: '< 30s Alert' },
    ],
    keyCapabilities: [
      'Bidirectional communication with hematology, biochemistry, and immunoassay analyzers',
      'Delta check algorithms comparing historical patient baselines',
      'Multi-rule auto-validation with configurable hospital standard operating procedures',
      'Automated sample rerun and reflex testing triggers',
    ],
  },
  reporting: {
    slug: 'reporting',
    eyebrow: 'CLINICAL REPORTING',
    title: 'Intelligent, Clear, and Actionable Diagnostic Reports',
    subtitle: 'Bridge the gap between raw numbers and clinical clarity for doctors and patients.',
    description: 'Transform traditional dense numerical spreadsheets into intuitive, structured clinical documents equipped with historical trend graphs, reference range indicators, and Nova AI summaries.',
    highlights: [
      { title: 'Visual Reference Gauges', desc: 'Clear color-coded spectrums highlighting optimal, borderline, and critical levels.' },
      { title: 'Historical Trend Charts', desc: 'Embedded micro-charts illustrating multi-visit patient biomarker progression.' },
      { title: 'Multi-Channel Dispatch', desc: 'Instant automated delivery to SIMRS, Doctor Portals, Patient WhatsApp, and PDF.' },
    ],
    keyCapabilities: [
      'Customizable report templates with hospital branding and digital signatures',
      'Automated QR code verification for anti-tamper authenticity check',
      'Multilingual report output (Bahasa Indonesia & English)',
      'Compliant digital audit trail recording every amendment and addendum',
    ],
  },
  analytics: {
    slug: 'analytics',
    eyebrow: 'DIAGNOVA INSIGHT',
    title: 'Operational Intelligence & Laboratory Analytics',
    subtitle: 'Real-time insights on turnaround times, instrument workload, and quality indicators.',
    description: 'Diagnova Insight equips laboratory directors and hospital management with actionable operational analytics. Track key performance indicators (KPIs), instrument utilization, and quality metrics at a glance.',
    highlights: [
      { title: 'Turnaround Time (TAT) Analytics', desc: 'Granular breakdown of pre-analytical, analytical, and post-analytical durations.', stat: 'Live Metrics' },
      { title: 'Workload & Productivity', desc: 'Workstation load balancing and technician throughput analytics.' },
      { title: 'Quality & QC Levey-Jennings', desc: 'Automated Westgard rules evaluation and reagent lot performance tracking.' },
    ],
    keyCapabilities: [
      'Comprehensive TAT dashboards by department, test profile, and ordering ward',
      'Reagent consumption velocity and spoilage forecasting',
      'Automated statistical QC tracking (Levey-Jennings charts & Westgard multi-rules)',
      'Outlier and rejected specimen root-cause analysis',
    ],
  },
};

export const SOLUTIONS_SUBPAGES: Record<string, SubpageContent> = {
  'hospital-laboratory': {
    slug: 'hospital-laboratory',
    eyebrow: 'FOR HOSPITAL NETWORKS',
    title: 'Hospital Laboratory Intelligence Ecosystem',
    subtitle: 'Seamless native integration with SIMRS, high-volume inpatient/outpatient management.',
    description: 'Engineered for the rigorous demands of general and specialized hospitals. Diagnova bridges emergency departments, ICUs, inpatient wards, and outpatient clinics with instant STAT prioritization and zero-friction EHR bridging.',
    highlights: [
      { title: 'SIMRS / HIS Native Bridging', desc: 'Direct two-way order ingestion and billing synchronization.', stat: '100% Native' },
      { title: 'STAT Emergency Prioritization', desc: 'Emergency room and ICU samples automatically jump to the front of processing queues.' },
      { title: 'Multi-Department Scalability', desc: 'Centralizes laboratory operations across main labs, satellite labs, and POCT devices.' },
    ],
    keyCapabilities: [
      'Automated emergency STAT flagging with critical value broadcast',
      'Deep bridging with Indonesian SIMRS (Khanza, Medifirst, Custom HIS)',
      'SATUSEHAT national health interoperability compliance',
      'Sub-account controls for departmental heads and ward physicians',
    ],
  },
  'clinical-laboratory': {
    slug: 'clinical-laboratory',
    eyebrow: 'FOR CLINICAL & DIAGNOSTIC LABS',
    title: 'Independent Clinical Laboratory Operations',
    subtitle: 'High-throughput commercial lab management with patient portal and B2B client referral networks.',
    description: 'Designed for independent diagnostic centers and commercial lab chains. Maximize sample intake, streamline B2B partner sample reception, and deliver branded digital reports directly to patients.',
    highlights: [
      { title: 'B2B Partner & Clinic Ingestion', desc: 'Dedicated referral portal for clinics and corporate medical check-ups.' },
      { title: 'Patient Self-Service Access', desc: 'Secure WhatsApp/SMS links for direct PDF download and QR verification.' },
      { title: 'Flexible SaaS Model', desc: 'Low CapEx cloud model that scales linearly with sample volume.' },
    ],
    keyCapabilities: [
      'Batch barcode registration for high-volume corporate MCU screenings',
      'Automated pricing tiers by corporate client and referring physician',
      'Real-time online appointment and phlebotomist home-collection dispatch',
      'Multi-branch consolidated reporting and centralized QC monitoring',
    ],
  },
  pathology: {
    slug: 'pathology',
    eyebrow: 'ANATOMIC PATHOLOGY',
    title: 'Digital Pathology & Histopathology Management',
    subtitle: 'Meticulous block and slide tracking, grossing workflows, and microscopic diagnosis.',
    description: 'Precision tracking for histopathology, cytology, and immunohistochemistry. Diagnova Pathology maintains strict specimen integrity from tissue biopsy grossing to microscopic examination.',
    highlights: [
      { title: 'Tissue Block & Slide Tracking', desc: '2D Matrix barcoding on cassettes and glass slides guarantees zero specimen mix-up.' },
      { title: 'Structured Synoptic Reporting', desc: 'Standardized oncology staging protocols (CAP/AJCC compliant).' },
      { title: 'Digital Image Attachment', desc: 'High-resolution microscopic photo attachments alongside pathologist findings.' },
    ],
    keyCapabilities: [
      'Multi-stage grossing, embedding, microtomy, and staining step logging',
      'Integrated digital camera and telepathology image capture',
      'Secondary opinion and peer-review sign-off workflow',
      'Long-term archival indexing for tissue blocks and slide inventory',
    ],
  },
  microbiology: {
    slug: 'microbiology',
    eyebrow: 'CLINICAL MICROBIOLOGY',
    title: 'Microbiology & Antibiotic Stewardship',
    subtitle: 'Bacterial culture tracking, automated colony morphology, and AST sensitivity profiles.',
    description: 'Accelerate the identification of infectious organisms and deliver precise Antibiotic Susceptibility Testing (AST) results to support hospital antimicrobial stewardship programs (PPRA).',
    highlights: [
      { title: 'Culture Incubation Tracking', desc: 'Scheduled reading alerts at 24h, 48h, and 72h incubation intervals.' },
      { title: 'EUCAST / CLSI Standardized AST', desc: 'Automated antibiotic sensitivity interpretation (Susceptible, Intermediate, Resistant).' },
      { title: 'Antibiogram Surveillance', desc: 'Hospital-wide cumulative antibiogram generation to track nosocomial resistance patterns.' },
    ],
    keyCapabilities: [
      'Organism identification database with expert auto-interpretation',
      'Intrinsic resistance and anomalous profile flag warnings',
      'Cumulative antibiogram analytics for infection control committees',
      'Direct interfacing with automated blood culture and identification systems (e.g., VITEK, BD Phoenix)',
    ],
  },
  'blood-bank': {
    slug: 'blood-bank',
    eyebrow: 'BLOOD TRANSFUSION SERVICE',
    title: 'Blood Bank & Transfusion Safety Management',
    subtitle: 'Flawless blood product traceability, donor management, crossmatching, and cold-chain logging.',
    description: 'Safeguard every transfusion with end-to-end blood product tracking. From donor screening and component preparation to crossmatching and ward release, Diagnova eliminates critical transfusion risks.',
    highlights: [
      { title: 'Positive Patient-Donor ID', desc: 'Two-stage barcode cross-verification prevents ABO/Rh incompatibility catastrophes.' },
      { title: 'Live Blood Bag Inventory', desc: 'Real-time blood component shelf-life, blood group inventory, and expiration countdown.' },
      { title: 'Transfusion Reaction Log', desc: 'Full audit trail from donor unit to recipient infusion response.' },
    ],
    keyCapabilities: [
      'Automated major/minor crossmatch recording with gel card integration',
      'Component separation tracking (PRC, FFP, Platelet Concentrates, Cryo)',
      'Cold-chain temperature logging and inventory quarantine triggers',
      'Emergency uncrossmatched O-Negative rapid dispatch protocol',
    ],
  },
  'nova-ai': {
    slug: 'nova-ai',
    eyebrow: 'CLINICAL INTELLIGENCE',
    title: 'Nova AI — The Intelligent Laboratory Copilot',
    subtitle: 'Augmenting clinical decisions with explainable, evidence-oriented intelligence.',
    description: 'Nova AI is embedded directly into the laboratory workflow, assisting medical analysts and pathologists with automatic delta checks, plain-language summaries, and quality anomaly detection.',
    highlights: [
      { title: 'Observe & Understand', desc: 'Analyzes patient historical trends to detect subtle physiological shifts.' },
      { title: 'Explainable Insights', desc: 'Every suggestion is backed by clear clinical reasoning and laboratory references.' },
      { title: 'Strict Guardrail', desc: 'AI assists. Doctors decide. Zero automated clinical decisions without physician sign-off.' },
    ],
    keyCapabilities: [
      'Automated delta check variance flags comparing with previous 3-12 month patient visits',
      'Plain-language clinical narrative drafting for laboratory reports',
      'Quality assurance anomaly detection across reagent batches',
      'Natural language diagnostic querying for laboratory technicians',
    ],
  },
};

export const MODULES_SUBPAGES: Record<string, SubpageContent> = {
  'routine-hematology': {
    slug: 'routine-hematology',
    eyebrow: 'CLINICAL MODULE 01',
    title: 'Routine & Hematology Module',
    subtitle: 'High-speed processing for complete blood counts, coagulation profiles, and clinical chemistry.',
    description: 'Handle the highest volume tests in your laboratory with absolute precision. Designed for rapid turnaround of Complete Blood Counts (CBC), urinalysis, lipid profiles, liver/kidney function tests, and electrolytes.',
    highlights: [
      { title: 'High-Throughput Batch Capture', desc: 'Auto-ingests hundreds of samples per hour from multiple automated analyzers simultaneously.' },
      { title: 'Morphology Flagging', desc: 'Automatically flags atypical lymphocytes, blast cells, and platelet clumps for manual smear review.' },
      { title: 'Instant Delta Checking', desc: 'Flags sudden changes in Hemoglobin, Platelets, or Creatinine relative to baseline.' },
    ],
    keyCapabilities: [
      'Multi-parameter analyzer interfacing with automated flag decoding',
      'Configurable reflex rules for automated blood smear preparation orders',
      'Integrated scattergram and histogram visual archiving',
      'Quality control Levey-Jennings charts with Westgard multirule warnings',
    ],
  },
  'blood-bank': {
    slug: 'blood-bank',
    eyebrow: 'CLINICAL MODULE 02',
    title: 'Blood Bank & Transfusion Safety Module',
    subtitle: 'Complete blood unit lifecycle, compatibility testing, and cold-chain assurance.',
    description: 'Ensure 100% transfusion safety. Track blood donations, fractionation into PRCs, TC, and FFP, perform crossmatching, and manage blood inventory with automated expiry protection.',
    highlights: [
      { title: 'Zero Transfusion Mismatch', desc: 'Double-blind barcode verification at crossmatch and issuance.' },
      { title: 'Component Expiry Sentinel', desc: 'Automated warnings for platelet units approaching 5-day expiration.' },
      { title: 'PMI / Regional Blood Center Sync', desc: 'Inventory synchronization readiness with blood supply networks.' },
    ],
    keyCapabilities: [
      'Donor registry and automated deferral management',
      'Compatibility testing (Major/Minor crossmatch & Coombs test recording)',
      'Component inventory with temperature quarantine status',
      'Traceability back to donor for post-transfusion infectious screening audits',
    ],
  },
  'inventory-reagent': {
    slug: 'inventory-reagent',
    eyebrow: 'CLINICAL MODULE 03',
    title: 'Inventory & Reagent Management Module',
    subtitle: 'Real-time stock monitoring, automated reorder alerts, and reagent lot traceability.',
    description: 'Never suffer laboratory downtime due to unexpected reagent depletion. Diagnova tracks reagent cartridge usage per test run, expiration dates, calibration lots, and buffer stock thresholds in real-time.',
    highlights: [
      { title: 'Per-Test Depletion Tracking', desc: 'Deducts reagent microliters dynamically with every completed diagnostic run.' },
      { title: 'Lot Calibration Traceability', desc: 'Links every patient test result directly to the specific reagent lot and calibration date.' },
      { title: 'Predictive Stock Reordering', desc: 'Forecasts stockout dates based on historical daily test volumes.' },
    ],
    keyCapabilities: [
      'Automated purchase requisition when safety stock levels are breached',
      'Lot number and expiry date barcode scanning at receiving',
      'Cost-per-test financial analytics and supplier performance metrics',
      'Wastage and expiration risk heatmaps',
    ],
  },
  pathology: {
    slug: 'pathology',
    eyebrow: 'CLINICAL MODULE 04',
    title: 'Anatomic Pathology & Cytology Module',
    subtitle: 'End-to-end specimen tracking for biopsies, surgical resections, and FNAB.',
    description: 'Manage complex anatomic pathology workflows with extreme rigor. Track tissue cassettes, microtome cuts, slide staining, and pathologist macroscopic/microscopic diagnosis with digital imaging.',
    highlights: [
      { title: '2D Matrix Cassette Barcoding', desc: 'Laser-etched QR codes on tissue blocks endure all chemical fixation baths.' },
      { title: 'Synoptic Cancer Reporting', desc: 'CAP-compliant standardized structured reporting for oncology cases.' },
      { title: 'High-Res Image Integration', desc: 'Attach and annotate photomicrographs directly in the diagnostic report.' },
    ],
    keyCapabilities: [
      'Multi-step workflow: Grossing, Processing, Embedding, Sectioning, Staining, Review',
      'Integrated ICD-O-3 and SNOMED-CT clinical coding dictionaries',
      'Multi-disciplinary team (MDT) tumor board case presentation export',
      'Tissue block archive management with location rack and shelf coordinate mapping',
    ],
  },
  microbiology: {
    slug: 'microbiology',
    eyebrow: 'CLINICAL MODULE 05',
    title: 'Clinical Microbiology & AST Module',
    subtitle: 'Culture incubation management, organism identification, and antibiotic susceptibility profiles.',
    description: 'Specialized workflow for bacterial, fungal, and mycobacterial cultures. Tracks incubation durations, colony morphology, biochemical testing, and standardized antibiotic sensitivity reporting.',
    highlights: [
      { title: 'Incubation Workbench Alarm', desc: 'Alerts technicians for scheduled 24h/48h plate readings and preliminary reports.' },
      { title: 'Expert AST Rules (CLSI / EUCAST)', desc: 'Automatic interpretation of zone diameters and MIC values into S/I/R categories.' },
      { title: 'PPRA Stewardship Support', desc: 'Real-time tracking of Multi-Drug Resistant Organisms (MDRO / MRSA / ESBL).' },
    ],
    keyCapabilities: [
      'Preliminary Gram stain report dispatch within minutes of receipt',
      'Automated integration with automated blood culture instruments and mass spectrometers',
      'Hospital cumulative antibiogram generator for antimicrobial stewardship committees',
      'Immediate critical infection alert broadcast (positive blood/CSF cultures)',
    ],
  },
};

export const NOVA_AI_SUBPAGES: Record<string, SubpageContent> = {
  'how-it-works': {
    slug: 'how-it-works',
    eyebrow: 'AI ARCHITECTURE',
    title: 'How Nova AI Powers Clinical Intelligence',
    subtitle: 'The 4-stage cognitive engine: Observe → Understand → Explain → Assist.',
    description: 'Nova AI operates as a vigilant laboratory copilot. It continuously monitors streaming instrument data, correlates findings with historical patient records, evaluates quality indicators, and presents clear insights to pathologists.',
    highlights: [
      { title: '1. OBSERVE', desc: 'Real-time telemetry from 500+ diagnostic instruments and patient baseline data.' },
      { title: '2. UNDERSTAND', desc: 'Multi-parameter correlation, delta checks, and physiological trend modeling.' },
      { title: '3. EXPLAIN', desc: 'Plain-language clinical narratives and transparent reasoning behind every flag.' },
      { title: '4. ASSIST', desc: 'Actionable suggestions for reflex testing, smear reviews, or clinical notifications.' },
    ],
    clinicalWorkflow: ['Real-Time Stream Capture', 'Baseline Delta Check Evaluation', 'Multi-variate Pattern Recognition', 'Confidence-Scored Insight Generation', 'Pathologist Verification & Approval'],
    keyCapabilities: [
      'Explainable AI reasoning: every suggestion references clinical guidelines',
      'Multi-temporal baseline comparison across longitudinal patient records',
      'Instrument quality drift detection before clinical errors occur',
      'Non-invasive integration directly into the diagnostic validation interface',
    ],
    quote: 'AI assists. Doctors decide.',
  },
  'ai-doctor': {
    slug: 'ai-doctor',
    eyebrow: 'HUMAN-IN-THE-LOOP',
    title: 'AI + Doctor: The Symbiotic Partnership',
    subtitle: 'Augmenting physician expertise without ever compromising clinical authority.',
    description: 'At Diagnova, we believe technology should empower human caregivers, not replace them. Nova AI handles the cognitive fatigue of screening thousands of normal parameters, freeing pathologists and clinicians to focus on complex cases.',
    highlights: [
      { title: 'Human-in-the-Loop Validation', desc: 'Zero AI suggestions are finalized without explicit physician review and approval.' },
      { title: 'Reduced Diagnostic Fatigue', desc: 'Automates routine screening so specialists can dedicate time to critical abnormalities.' },
      { title: 'Transparent Evidence Trail', desc: 'Clinical references and baseline data points are presented alongside every AI summary.' },
    ],
    keyCapabilities: [
      'Strict clinical guardrails preventing automated diagnostic conclusions',
      'Collaborative annotation interface for pathologists to edit or endorse AI summaries',
      'Continuous learning feedback loop aligned with hospital clinical standards',
      'Full compliance with Indonesian medical ethics and health data privacy principles',
    ],
    quote: 'AI assists. Doctors decide. Patient safety is non-negotiable.',
  },
};

export const INTEGRATION_SUBPAGES: Record<string, SubpageContent> = {
  'simrs-his': {
    slug: 'simrs-his',
    eyebrow: 'HOSPITAL INTEROPERABILITY',
    title: 'SIMRS / Hospital Information System Bridging',
    subtitle: 'Seamless, bidirectional synchronization with all major Indonesian hospital information systems.',
    description: 'Eliminate double data entry. Diagnova integrates natively with SIMRS (Khanza, Medifirst2000, Custom in-house HIS, and vendor ERPs) to receive clinical test orders and send back validated diagnostic results with billing triggers.',
    highlights: [
      { title: 'Real-Time Order Ingestion', desc: 'Doctor orders from outpatient clinics and inpatient wards appear instantly in the lab queue.' },
      { title: 'Automated Billing Sync', desc: 'Test codes and consumables are synchronized with hospital finance systems upon validation.' },
      { title: 'Native REST & HL7 APIs', desc: 'Pre-built connectors ensure deployment in days rather than months.' },
    ],
    keyCapabilities: [
      'Bidirectional order and result synchronization',
      'Compatible with Khanza, Medifirst, SIMETRIS, and custom SQL/REST hospital systems',
      'Automated patient demographic matching via NIK and Hospital Medical Record Number (No. RM)',
      'Guaranteed transactional integrity with zero lost test orders',
    ],
  },
  rme: {
    slug: 'rme',
    eyebrow: 'ELECTRONIC MEDICAL RECORD',
    title: 'RME / EMR Integration & Synchronization',
    subtitle: 'Delivering structured clinical laboratory data directly into patient electronic medical records.',
    description: 'Modern medical records require structured, discrete diagnostic data rather than static scanned PDFs. Diagnova feeds structured laboratory parameters, reference ranges, and trend charts directly into your Electronic Medical Record system.',
    highlights: [
      { title: 'Structured Discrete Data', desc: 'Enables doctors to view longitudinal lab trends within the patient EMR chart.' },
      { title: 'One-Click PDF Embedding', desc: 'Digitally signed official laboratory reports available within the EMR viewer.' },
      { title: 'Permenkes 24/2022 Compliance', desc: 'Full compliance with Indonesian Ministry of Health digital medical record mandates.' },
    ],
    keyCapabilities: [
      'FHIR and HL7 compliant data modeling for diagnostic reports',
      'Real-time status updates (Order Received, In Progress, Validated)',
      'Critical abnormal alarm push notifications to attending physician mobile app',
      'Zero latency direct synchronization upon pathologist digital signature',
    ],
  },
  analyzer: {
    slug: 'analyzer',
    eyebrow: 'DEVICE CONNECTIVITY',
    title: 'Laboratory Analyzer Interfacing (500+ Devices)',
    subtitle: 'Direct hardware interfacing via HL7 / ASTM protocols with legacy instrument support.',
    description: 'Diagnova connects directly with diagnostic hardware across hematology, clinical chemistry, immunology, urinalysis, blood gas, and microbiology. Supporting over 500 analyzer models from Sysmex, Roche, Abbott, Mindray, Siemens, Beckman Coulter, and more.',
    highlights: [
      { title: '500+ Compatible Instruments', desc: 'Broad hardware support including legacy serial RS-232, TCP/IP, and modern ASTM/HL7 devices.' },
      { title: 'Bidirectional Host Query', desc: 'Analyzers scan specimen barcodes and query Diagnova automatically for the test profile.' },
      { title: 'Raw Telemetry Capture', desc: 'Pulls numerical values, flags, histograms, and scattergrams straight from the hardware.' },
    ],
    keyCapabilities: [
      'Universal Serial / TCP-IP / HL7 / ASTM protocol translation gateway',
      'Bidirectional worklist dispatch and auto-result capture',
      'Live analyzer status telemetry and error code monitoring',
      'No expensive proprietary middleware required',
    ],
  },
  satusehat: {
    slug: 'satusehat',
    eyebrow: 'NATIONAL HEALTH DATA',
    title: 'SATUSEHAT Interoperability & Compliance',
    subtitle: 'Ready-to-bridge national health platform integration powered by HL7 FHIR standards.',
    description: 'Ensure your hospital and laboratory fulfill national health digitization mandates. Diagnova includes pre-built data mappings and secure API adapters for the Ministry of Health SATUSEHAT platform.',
    highlights: [
      { title: 'HL7 FHIR Native Mapping', desc: 'Observation, DiagnosticReport, and Specimen resources mapped to SATUSEHAT specifications.' },
      { title: 'LOINC & SNOMED-CT Coded', desc: 'Standardized laboratory terminology matching Indonesian Ministry of Health standards.' },
      { title: 'Automated National Sync', desc: 'Dispatches validated reports securely via authenticated national health APIs.' },
    ],
    keyCapabilities: [
      'Automated NIK validation and SATUSEHAT Patient ID (IHS Number) lookup',
      'LOINC code dictionary alignment across all 5 clinical modules',
      'Secure OAuth 2.0 credential management and encrypted payload transmission',
      'Auditable synchronization log and compliance dashboard',
    ],
  },
  connectivity: {
    slug: 'connectivity',
    eyebrow: 'SMART GATEWAY & RESILIENCE',
    title: 'Resilient Connectivity & Offline-Buffer Mode',
    subtitle: 'Uninterrupted laboratory operations with 99.9% uptime and automatic offline recovery.',
    description: 'Laboratory operations cannot stop when hospital internet experiences hiccups. Diagnova incorporates an edge Smart Gateway with Offline-Buffer Mode that continues communicating with analyzers locally, automatically syncing to the cloud when connections restore.',
    highlights: [
      { title: '99.9% Proven Uptime', desc: 'Enterprise cloud infrastructure backed by localized edge resilience.' },
      { title: 'Offline-Buffer Mode', desc: 'Local cache stores all analyzer data during network disconnects with zero data loss.' },
      { title: 'Automated Auto-Healing', desc: 'Self-reconnecting protocol drivers seamlessly replay queued transactions upon reconnection.' },
    ],
    keyCapabilities: [
      'Edge gateway hardware/virtual appliance with redundant failover',
      'End-to-end TLS 1.3 encryption and zero-trust authentication',
      'Real-time connectivity health ping and proactive latency alerts',
      '24/7 dedicated support team with rapid remote diagnosis',
    ],
  },
};
