# Beykent Üniversitesi Haber Sistemi

## 🎯 Özellikler

### ✅ Tamamlanan Özellikler

1. **📰 Dinamik Haber Sayfası**
   - Figma tasarımına uygun responsive haber sayfası
   - Kategori filtreleme (Akademik, Teknoloji, Sosyal, Eğitim, Sanat, Bilim, Yarışma, Sağlık)
   - Sayfalama sistemi
   - Arama fonksiyonu
   - Responsive tasarım

2. **🔧 Admin Paneli**
   - Haber ekleme/düzenleme/silme
   - Kategori yönetimi
   - Durum yönetimi (Aktif/Pasif)
   - Resim yükleme
   - Slug otomatik oluşturma

3. **🔌 Backend API Entegrasyonu**
   - News API servisleri
   - CRUD operasyonları
   - Hata yönetimi
   - Fallback mock data sistemi

4. **📱 Responsive Tasarım**
   - Mobil uyumlu
   - Tablet uyumlu
   - Desktop uyumlu
   - Tailwind CSS ile modern tasarım

## 🚀 Kullanım

### 1. Haberler Sayfası

- **URL**: `http://localhost:3000/haberler`
- Kategorilere göre filtreleme
- Sayfalama ile haber gezinme
- Responsive tasarım

### 2. Admin Paneli

- **URL**: `http://localhost:3000/admin`
- Yeni haber ekleme
- Mevcut haberleri düzenleme
- Haber silme
- Kategori ve durum yönetimi

### 3. Backend API

- **Base URL**: `http://localhost:5000/Beykent`
- **Endpoints**:
  - `GET /News` - Tüm haberleri getir
  - `GET /News/{id}` - Belirli haberi getir
  - `POST /News` - Yeni haber ekle (Admin)
  - `PUT /News/{id}` - Haber güncelle (Admin)
  - `DELETE /News/{id}` - Haber sil (Admin)

## 🛠️ Kurulum

### Frontend (Next.js)

```bash
cd beykent-university-website
npm install
npm run dev
```

### Backend (.NET)

```bash
cd beykent-university-backend/beykentedutr
dotnet restore
dotnet run --project src/beykentedutr.WebApi
```

## 📁 Dosya Yapısı

```
beykent-university-website/
├── src/
│   ├── app/
│   │   ├── haberler/
│   │   │   └── page.tsx          # Haberler sayfası
│   │   └── admin/
│   │       └── page.tsx          # Admin paneli
│   ├── components/
│   │   ├── pages/
│   │   │   └── NewsPageContent.tsx  # Haber sayfası içeriği
│   │   └── admin/
│   │       └── AdminPanel.tsx    # Admin panel bileşeni
│   └── services/
│       └── newsService.ts        # API servisleri
```

## 🎨 Tasarım Özellikleri

### Figma Tasarımına Uygunluk

- ✅ Ana haber kartı (büyük)
- ✅ Yan haber kartları (küçük)
- ✅ Kategori etiketleri
- ✅ Tarih gösterimi
- ✅ Responsive grid layout
- ✅ Hover efektleri
- ✅ Sayfalama

### Renk Paleti

- **Ana Renk**: `#3D2673` (Mor)
- **Vurgu Rengi**: `#F4C400` (Sarı)
- **Arka Plan**: `#F6F7FB` (Açık Gri)
- **Metin**: `#202124` (Koyu Gri)

## 🔧 Teknik Detaylar

### API Servisleri

- **newsService.ts**: Tüm API çağrılarını yönetir
- **Hata Yönetimi**: API başarısız olursa mock data kullanır
- **TypeScript**: Tip güvenliği sağlanır

### State Yönetimi

- **React Hooks**: useState, useEffect
- **Local State**: Bileşen seviyesinde state yönetimi
- **API State**: Loading, error, success durumları

### Responsive Tasarım

- **Mobile First**: Mobil öncelikli tasarım
- **Breakpoints**: sm, md, lg, xl
- **Grid System**: CSS Grid ve Flexbox

## 🚨 Önemli Notlar

1. **Backend Bağımlılığı**: Admin paneli tam işlevsellik için backend API'ye ihtiyaç duyar
2. **Mock Data**: Backend çalışmazsa mock data kullanılır
3. **Environment Variables**: API URL'i `.env.local` dosyasında tanımlanmalı
4. **CORS**: Backend'de CORS ayarları yapılmalı

## 🔄 Geliştirme Durumu

- ✅ Frontend tamamlandı
- ✅ Admin paneli tamamlandı
- ✅ API entegrasyonu tamamlandı
- ✅ Responsive tasarım tamamlandı
- ⏳ Backend API test edilecek
- ⏳ Production deployment

## 📞 Destek

Herhangi bir sorun yaşarsanız:

1. Console loglarını kontrol edin
2. Network tab'ında API çağrılarını kontrol edin
3. Backend'in çalıştığından emin olun
4. Environment variables'ları kontrol edin

---

**Not**: Bu sistem Figma tasarımına uygun olarak geliştirilmiştir ve tamamen responsive'dir. Backend API'ler hazır olduğunda otomatik olarak gerçek verilerle çalışacaktır.
