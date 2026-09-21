import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// In-memory resilient storage fallback for development / offline testing
export interface DemoRequestRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  institutionType: string;
  jobTitle?: string | null;
  laboratoryUsers?: string | null;
  message?: string | null;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CLOSED';
  createdAt: Date;
  updatedAt: Date;
}

const memoryStore: DemoRequestRecord[] = [
  {
    id: 'req_01',
    fullName: 'dr. Siti Rahmawati, Sp.PK',
    email: 'siti.rahmawati@rsu-medika.co.id',
    phone: '081289123456',
    institution: 'RSU Medika Sejahtera Jakarta',
    institutionType: 'Hospital',
    jobTitle: 'Kepala Instalasi Laboratorium',
    laboratoryUsers: '25-50',
    message: 'Kami ingin modernisasi LIS untuk bridging dengan SIMRS Khanza dan integrasi 4 analyzer hematologi & kimia klinik.',
    status: 'NEW',
    createdAt: new Date(Date.now() - 3600000 * 2),
    updatedAt: new Date(Date.now() - 3600000 * 2),
  },
  {
    id: 'req_02',
    fullName: 'Bambang Trianto, S.Si',
    email: 'bambang.t@prodia-network.id',
    phone: '081398765432',
    institution: 'Laboratorium Klinik Utama Prima',
    institutionType: 'Clinical Laboratory',
    jobTitle: 'Lab Operations Manager',
    laboratoryUsers: '10-25',
    message: 'Tertarik dengan fitur Nova AI untuk delta check otomatis dan barcode universal antar cabang.',
    status: 'CONTACTED',
    createdAt: new Date(Date.now() - 3600000 * 24),
    updatedAt: new Date(Date.now() - 3600000 * 12),
  },
  {
    id: 'req_03',
    fullName: 'dr. Hendra Wijaya, Sp.PA',
    email: 'hendra.pa@rs-kanker-sentosa.org',
    phone: '081122334455',
    institution: 'Pusat Kanker & Patologi Terpadu',
    institutionType: 'Pathology Laboratory',
    jobTitle: 'Konsultan Patologi Anatomi',
    laboratoryUsers: '50+',
    message: 'Mohon demo untuk modul Patologi Anatomi dan pelacakan kaset 2D matrix barcode.',
    status: 'QUALIFIED',
    createdAt: new Date(Date.now() - 3600000 * 48),
    updatedAt: new Date(Date.now() - 3600000 * 24),
  },
];

export async function getDemoRequests() {
  try {
    return await prisma.demoRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch {
    return memoryStore.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export async function createDemoRequest(data: Omit<DemoRequestRecord, 'id' | 'status' | 'createdAt' | 'updatedAt'>) {
  try {
    return await prisma.demoRequest.create({
      data: {
        ...data,
        status: 'NEW',
      },
    });
  } catch {
    const newRecord: DemoRequestRecord = {
      id: `req_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`,
      ...data,
      status: 'NEW',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryStore.unshift(newRecord);
    return newRecord;
  }
}

export async function updateDemoRequestStatus(id: string, status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CLOSED') {
  try {
    return await prisma.demoRequest.update({
      where: { id },
      data: { status },
    });
  } catch {
    const item = memoryStore.find((r) => r.id === id);
    if (item) {
      item.status = status;
      item.updatedAt = new Date();
      return item;
    }
    return null;
  }
}

export async function deleteDemoRequest(id: string) {
  try {
    return await prisma.demoRequest.delete({
      where: { id },
    });
  } catch {
    const idx = memoryStore.findIndex((r) => r.id === id);
    if (idx !== -1) {
      const deleted = memoryStore.splice(idx, 1)[0];
      return deleted;
    }
    return null;
  }
}
