# Beykent Üniversitesi Web Sitesi

Modern, responsive ve kullanıcı dostu Beykent Üniversitesi resmi web sitesi.

## 🚀 Teknoloji Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/UI
- **State Management:** Zustand (planlanan)
- **Data Fetching:** TanStack Query (planlanan)
- **Code Quality:** ESLint + Prettier + Husky

## 📋 Özellikler

- ✅ Modern ve responsive tasarım
- ✅ TypeScript ile tip güvenliği
- ✅ Shadcn/UI bileşen kütüphanesi
- ✅ Otomatik kod formatlaması (Prettier)
- ✅ Kod kalitesi kontrolü (ESLint)
- ✅ Pre-commit hooks (Husky)
- ✅ GitHub Actions CI/CD
- 🔄 SEO optimizasyonu (planlanan)
- 🔄 Accessibility standartları (planlanan)
- 🔄 Multi-language desteği (planlanan)

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18.x veya üzeri
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın:**
```bash
git clone <repository-url>
cd beykent-university-website
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Development server'ı başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📝 Geliştirme Komutları

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint          # Otomatik düzeltme ile
npm run lint:check    # Sadece kontrol

# Formatting
npm run format        # Otomatik formatla
npm run format:check  # Sadece kontrol

# Type checking
npm run type-check
```

## 🏗️ Proje Yapısı

```
beykent-university-website/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React bileşenleri
│   │   ├── layout/         # Layout bileşenleri (BeykentHeader, BeykentFooter)
│   │   ├── features/       # Özellik bazlı bileşenler
│   │   └── ui/             # Shadcn/UI bileşenleri
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility fonksiyonları
│   ├── types/              # TypeScript tip tanımları
│   ├── data/               # Mock data ve sabitler
│   ├── constants/          # Uygulama sabitleri
│   └── styles/             # Global stiller
├── public/                 # Statik dosyalar
├── docs/                   # Dokümantasyon
├── .github/                # GitHub templates ve workflows
└── ...config files
```

## 🎨 Bileşen Adlandırma

Beykent Üniversitesi'ne özel bileşenler `Beykent` prefix'i ile adlandırılır:

- `BeykentHeader` - Ana sayfa başlığı
- `BeykentFooter` - Ana sayfa alt bilgisi
- `BeykentNavigation` - Navigasyon menüsü
- `BeykentCard` - Özel kart bileşeni

## 📐 Kod Standartları

### Naming Conventions
- **Components:** PascalCase (`BeykentHeader.tsx`)
- **Files:** kebab-case (`user-profile.tsx`)
- **Variables/Functions:** camelCase (`getUserData`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)

### Import Sıralaması
1. React ve Next.js imports
2. Third-party libraries
3. Internal components
4. Types
5. Utilities

### Commit Message Format
```
<type>(<scope>): <description>

feat(auth): kullanıcı giriş sistemi eklendi
fix(header): mobil menü sorunu düzeltildi
docs(readme): kurulum talimatları güncellendi
```

## 🔄 Git Workflow

Detaylı Git workflow kuralları için: [GIT_WORKFLOW.md](./docs/GIT_WORKFLOW.md)

### Branch Yapısı
- `main` - Production
- `develop` - Development
- `feature/*` - Yeni özellikler
- `bugfix/*` - Bug düzeltmeleri
- `hotfix/*` - Acil düzeltmeler

## 🧪 Testing (Planlanan)

```bash
# Unit testler
npm run test

# E2E testler
npm run test:e2e

# Test coverage
npm run test:coverage
```

## 🚀 Deployment

### Development
- **Platform:** Vercel
- **URL:** `https://beykent-dev.vercel.app`
- **Branch:** `develop`

### Production
- **Platform:** AWS / Vercel
- **URL:** `https://www.beykent.edu.tr`
- **Branch:** `main`

## 📚 Dokümantasyon

- [Git Workflow](./docs/GIT_WORKFLOW.md)
- [Component Guidelines](./docs/COMPONENTS.md) (planlanan)
- [API Documentation](./docs/API.md) (planlanan)
- [Deployment Guide](./docs/DEPLOYMENT.md) (planlanan)

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: amazing feature eklendi'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje Beykent Üniversitesi'ne aittir. Tüm hakları saklıdır.

## 📞 İletişim

- **Email:** dev-team@beykent.edu.tr
- **Slack:** #dev-team
- **Issue Tracker:** GitHub Issues

## 🔗 Faydalı Linkler

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

**Beykent Üniversitesi Web Geliştirme Ekibi** 🎓
# Beykent-University-WebSite
