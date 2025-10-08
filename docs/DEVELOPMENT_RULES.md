# Development Rules - Beykent Üniversitesi Web Sitesi

## 🎯 Genel Prensipler

### 1. Code Quality First
- **Her commit** ESLint ve Prettier kontrollerinden geçmeli
- **TypeScript strict mode** kullanılmalı
- **Test coverage** minimum %70 olmalı (planlanan)
- **Code review** olmadan merge yapılmamalı

### 2. Performance & Accessibility
- **Core Web Vitals** standartlarına uygun olmalı
- **WCAG 2.1 AA** accessibility standartlarına uymalı
- **Mobile-first** yaklaşım benimsenmelidir
- **SEO best practices** uygulanmalı

### 3. Security
- **Sensitive data** asla commit edilmemeli
- **Environment variables** kullanılmalı
- **Input validation** her zaman yapılmalı
- **HTTPS** zorunlu

## 📝 Kod Yazım Kuralları

### Naming Conventions

#### Components
```typescript
// ✅ Doğru - PascalCase
const BeykentHeader = () => { ... }
const UserProfileCard = () => { ... }

// ❌ Yanlış
const beykentHeader = () => { ... }
const user_profile_card = () => { ... }
```

#### Files & Folders
```
// ✅ Doğru - kebab-case
components/
  layout/
    beykent-header.tsx
    beykent-footer.tsx
  features/
    user-profile/
      user-profile-card.tsx

// ❌ Yanlış
components/
  Layout/
    BeykentHeader.tsx
    beykent_footer.tsx
```

#### Variables & Functions
```typescript
// ✅ Doğru - camelCase
const userName = 'John Doe';
const getUserData = async () => { ... }

// ❌ Yanlış
const user_name = 'John Doe';
const GetUserData = async () => { ... }
```

#### Constants
```typescript
// ✅ Doğru - UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.beykent.edu.tr';
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// ❌ Yanlış
const apiBaseUrl = 'https://api.beykent.edu.tr';
const maxFileSize = 5 * 1024 * 1024;
```

### Import Organization

```typescript
// 1. React & Next.js
import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

// 2. Third-party libraries
import { clsx } from 'clsx';
import { format } from 'date-fns';

// 3. Internal components
import { BeykentHeader } from '@/components/layout/beykent-header';
import { Button } from '@/components/ui/button';

// 4. Types
import type { User, ApiResponse } from '@/types';

// 5. Utilities & Constants
import { cn } from '@/lib/utils';
import { API_ENDPOINTS } from '@/constants/api';
```

### Component Structure

```typescript
// 1. Imports
import React from 'react';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from '@/types';

// 2. Types (if component-specific)
interface BeykentCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

// 3. Component
const BeykentCard: React.FC<BeykentCardProps> = ({ 
  title, 
  description, 
  children 
}) => {
  // 4. Hooks
  const [isLoading, setIsLoading] = useState(false);
  
  // 5. Event handlers
  const handleClick = () => {
    // Implementation
  };
  
  // 6. Render
  return (
    <div className="card">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

// 7. Export
export default BeykentCard;
```

## 🎨 UI/UX Kuralları

### Beykent Branding
- **Logo:** Her zaman resmi Beykent logosu kullanılmalı
- **Renkler:** Beykent kurumsal renk paletine uygun
- **Typography:** Okunabilir ve profesyonel fontlar
- **Spacing:** Tutarlı margin/padding değerleri

### Responsive Design
```typescript
// ✅ Mobile-first approach
const styles = {
  // Mobile (default)
  padding: '1rem',
  fontSize: '1rem',
  
  // Tablet
  '@media (min-width: 768px)': {
    padding: '1.5rem',
    fontSize: '1.125rem',
  },
  
  // Desktop
  '@media (min-width: 1024px)': {
    padding: '2rem',
    fontSize: '1.25rem',
  },
};
```

### Accessibility
```typescript
// ✅ Proper ARIA labels
<button 
  aria-label="Menüyü aç"
  aria-expanded={isMenuOpen}
  onClick={toggleMenu}
>
  <MenuIcon />
</button>

// ✅ Semantic HTML
<main>
  <section aria-labelledby="news-heading">
    <h2 id="news-heading">Haberler</h2>
    {/* Content */}
  </section>
</main>

// ✅ Focus management
<input
  type="email"
  aria-describedby="email-error"
  aria-invalid={hasError}
/>
{hasError && (
  <div id="email-error" role="alert">
    Geçerli bir e-posta adresi girin
  </div>
)}
```

## 🔧 Development Workflow

### 1. Feature Development
```bash
# 1. Yeni branch oluştur
git checkout develop
git pull origin develop
git checkout -b feature/kullanici-profil-sayfasi

# 2. Geliştirme yap
# - Kod yaz
# - Test yaz
# - Dokümantasyon güncelle

# 3. Quality checks
npm run lint
npm run type-check
npm run test

# 4. Commit
git add .
git commit -m "feat(profile): kullanıcı profil sayfası eklendi"

# 5. Push ve PR
git push origin feature/kullanici-profil-sayfasi
# GitHub'da PR oluştur
```

### 2. Code Review Checklist

#### Reviewer Kontrol Listesi
- [ ] **Functionality:** Kod beklendiği gibi çalışıyor mu?
- [ ] **Performance:** Performans sorunları var mı?
- [ ] **Security:** Güvenlik açıkları var mı?
- [ ] **Accessibility:** Erişilebilirlik standartlarına uygun mu?
- [ ] **Responsive:** Tüm cihazlarda düzgün görünüyor mu?
- [ ] **Code Quality:** Kod temiz ve okunabilir mi?
- [ ] **Tests:** Testler yeterli mi?
- [ ] **Documentation:** Dokümantasyon güncel mi?

#### Author Kontrol Listesi
- [ ] **Self Review:** Kendi kodunu gözden geçirdin mi?
- [ ] **Tests Pass:** Tüm testler geçiyor mu?
- [ ] **No Console Logs:** Console.log'lar temizlendi mi?
- [ ] **No Dead Code:** Kullanılmayan kod var mı?
- [ ] **Proper Naming:** İsimlendirme kurallarına uygun mu?
- [ ] **Comments:** Karmaşık kısımlar açıklandı mı?

## 🧪 Testing Rules

### Unit Tests
```typescript
// ✅ Test dosya adlandırması
// component.test.tsx
// utils.test.ts

// ✅ Test yapısı
describe('BeykentHeader', () => {
  it('should render university name correctly', () => {
    render(<BeykentHeader />);
    expect(screen.getByText('Beykent Üniversitesi')).toBeInTheDocument();
  });
  
  it('should toggle mobile menu on button click', () => {
    render(<BeykentHeader />);
    const menuButton = screen.getByLabelText('Menüyü aç');
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).toBeVisible();
  });
});
```

### E2E Tests
```typescript
// ✅ E2E test yapısı
test('user can navigate to about page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Kurumsal');
  await page.click('text=Hakkımızda');
  await expect(page).toHaveURL('/about');
  await expect(page.locator('h1')).toContainText('Hakkımızda');
});
```

## 📊 Performance Rules

### Bundle Size
- **Page bundles** 250KB'ı geçmemeli
- **Unused code** temizlenmeli
- **Code splitting** kullanılmalı
- **Dynamic imports** uygun yerlerde kullanılmalı

### Images
```typescript
// ✅ Next.js Image component kullan
import Image from 'next/image';

<Image
  src="/beykent-logo.png"
  alt="Beykent Üniversitesi Logo"
  width={200}
  height={100}
  priority // Above the fold images için
/>

// ✅ Responsive images
<Image
  src="/hero-image.jpg"
  alt="Kampüs görünümü"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Loading States
```typescript
// ✅ Loading states ekle
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <ProfileSkeleton />;
  }
  
  return <UserProfileContent user={user} />;
};
```

## 🔒 Security Rules

### Environment Variables
```bash
# ✅ .env.local
NEXT_PUBLIC_API_URL=https://api.beykent.edu.tr
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key

# ❌ Asla commit etme
# .env dosyalarını .gitignore'a ekle
```

### Input Validation
```typescript
// ✅ Zod ile validation
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Geçerli e-posta girin'),
  password: z.string().min(8, 'Şifre en az 8 karakter olmalı'),
});

const validateUser = (data: unknown) => {
  return userSchema.parse(data);
};
```

## 📱 Mobile-First Rules

### Breakpoints
```typescript
// ✅ Tailwind breakpoints
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
};
```

### Touch Targets
```css
/* ✅ Minimum 44px touch targets */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}
```

## 🚫 Yasaklı Pratikler

### ❌ Yapılmaması Gerekenler
```typescript
// ❌ Any kullanımı
const data: any = fetchData();

// ❌ Console.log production'da
console.log('Debug info');

// ❌ Inline styles
<div style={{ color: 'red', fontSize: '16px' }}>

// ❌ Non-semantic HTML
<div onClick={handleClick}>Button</div>

// ❌ Hardcoded strings
<h1>Beykent Üniversitesi</h1>

// ❌ Direct DOM manipulation
document.getElementById('menu').style.display = 'none';
```

### ✅ Doğru Alternatifler
```typescript
// ✅ Proper typing
interface ApiResponse {
  data: User[];
  status: number;
}

// ✅ Environment-based logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info');
}

// ✅ CSS classes
<div className="text-red-500 text-base">

// ✅ Semantic HTML
<button onClick={handleClick}>Button</button>

// ✅ Constants
<h1>{UNIVERSITY_INFO.name}</h1>

// ✅ React state management
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

## 📞 Yardım ve Destek

### Sorularınız için:
- **Slack:** #dev-team kanalı
- **Email:** dev-team@beykent.edu.tr
- **Code Review:** GitHub PR comments
- **Documentation:** `/docs` klasörü

### Faydalı Kaynaklar:
- [React Best Practices](https://react.dev/learn)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Bu kurallar takım tarafından sürekli güncellenir. Önerilerinizi #dev-team kanalında paylaşabilirsiniz.**

**Beykent Üniversitesi Web Geliştirme Ekibi** 🎓