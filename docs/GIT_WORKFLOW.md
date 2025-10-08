# Git Workflow - Beykent Üniversitesi Web Sitesi

## 🌳 Branch Yapısı

### Ana Branchler
- **`main`** - Production ortamı (canlı site)
- **`develop`** - Development ortamı (test ortamı)

### Geliştirme Branchleri
- **`feature/`** - Yeni özellikler için
- **`bugfix/`** - Bug düzeltmeleri için
- **`hotfix/`** - Acil production düzeltmeleri için
- **`release/`** - Release hazırlıkları için

## 📝 Branch Adlandırma Kuralları

```bash
# Özellik geliştirme
feature/kullanici-kayit-sistemi
feature/haber-detay-sayfasi
feature/akademik-takvim

# Bug düzeltme
bugfix/header-mobil-menu-sorunu
bugfix/form-validasyon-hatasi

# Hotfix
hotfix/kritik-guvenlik-yamasi
hotfix/site-erisim-sorunu

# Release
release/v1.2.0
release/v2.0.0-beta
```

## 🔄 Geliştirme Süreci

### 1. Yeni Özellik Geliştirme

```bash
# Develop branch'inden yeni feature branch oluştur
git checkout develop
git pull origin develop
git checkout -b feature/yeni-ozellik-adi

# Geliştirme yap
git add .
git commit -m "feat: yeni özellik eklendi"

# Remote'a push et
git push origin feature/yeni-ozellik-adi

# Pull Request oluştur (develop <- feature)
```

### 2. Bug Düzeltme

```bash
# Develop branch'inden bugfix branch oluştur
git checkout develop
git pull origin develop
git checkout -b bugfix/sorun-aciklamasi

# Bug'ı düzelt
git add .
git commit -m "fix: sorun açıklaması düzeltildi"

# Remote'a push et
git push origin bugfix/sorun-aciklamasi

# Pull Request oluştur (develop <- bugfix)
```

### 3. Hotfix (Acil Düzeltme)

```bash
# Main branch'inden hotfix branch oluştur
git checkout main
git pull origin main
git checkout -b hotfix/acil-duzeltme

# Acil düzeltmeyi yap
git add .
git commit -m "hotfix: acil sorun düzeltildi"

# Remote'a push et
git push origin hotfix/acil-duzeltme

# Pull Request oluştur (main <- hotfix)
# Aynı zamanda develop'a da merge et
```

## 📋 Commit Mesaj Kuralları

### Format
```
<tip>(<kapsam>): <açıklama>

<detaylı açıklama (opsiyonel)>

<footer (opsiyonel)>
```

### Commit Tipleri
- **feat**: Yeni özellik
- **fix**: Bug düzeltme
- **docs**: Dokümantasyon değişiklikleri
- **style**: Kod formatı (logic değişikliği yok)
- **refactor**: Kod refactoring
- **test**: Test ekleme/düzeltme
- **chore**: Build, CI/CD, dependencies

### Örnekler
```bash
feat(auth): kullanıcı giriş sistemi eklendi
fix(header): mobil menü açılma sorunu düzeltildi
docs(readme): kurulum talimatları güncellendi
style(components): prettier formatlaması uygulandı
refactor(utils): yardımcı fonksiyonlar optimize edildi
test(auth): giriş sistemi testleri eklendi
chore(deps): next.js 14'e güncellendi
```

## 🔍 Pull Request Süreci

### PR Oluşturma Kuralları
1. **Açıklayıcı başlık** kullanın
2. **PR template**'ini doldurun
3. **İlgili issue**'yu bağlayın
4. **Screenshot** ekleyin (UI değişiklikleri için)
5. **Self-review** yapın

### Review Süreci
1. **En az 1 reviewer** gerekli
2. **CI/CD checks** geçmeli
3. **Conflicts** çözülmeli
4. **Approved** durumda olmalı

### Merge Stratejisi
- **Squash and merge** kullanın
- **Commit mesajını** düzenleyin
- **Branch'i silin** merge sonrası

## 🚀 Release Süreci

### 1. Release Branch Oluşturma
```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0
```

### 2. Release Hazırlıkları
- Version numaralarını güncelle
- CHANGELOG.md'yi güncelle
- Son testleri yap

### 3. Release Merge
```bash
# Main'e merge
git checkout main
git merge release/v1.2.0
git tag v1.2.0
git push origin main --tags

# Develop'a da merge
git checkout develop
git merge release/v1.2.0
git push origin develop

# Release branch'ini sil
git branch -d release/v1.2.0
git push origin --delete release/v1.2.0
```

## ⚡ Hızlı Komutlar

```bash
# Güncel develop'a geç
git checkout develop && git pull origin develop

# Yeni feature branch
git checkout -b feature/$(date +%Y%m%d)-ozellik-adi

# Commit ve push
git add . && git commit -m "feat: açıklama" && git push

# Branch temizliği
git branch --merged | grep -v "\*\|main\|develop" | xargs -n 1 git branch -d

# Stash kullanımı
git stash push -m "geçici değişiklikler"
git stash pop
```

## 🛡️ Güvenlik Kuralları

1. **Asla main branch'e direkt push yapmayın**
2. **Sensitive bilgileri commit etmeyin**
3. **Force push kullanmayın** (shared branchlerde)
4. **Pre-commit hooks**'ları atlamamaya çalışın
5. **Code review**'dan geçmeyen kodu merge etmeyin

---
**Beykent Üniversitesi Web Geliştirme Ekibi**