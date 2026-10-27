# Yapay Zekâ Kullanımı ve Test Notları

## 1. Kullanılan Prompt'lar ve Amaçları
1. **Prompt 1:** "etkinlikler.html ve style.css dosyalarını incele, arama özelliği için plan öner." (Amacı: Mimariyi planlamak)
2. **Prompt 2:** "etkinlikler.html dosyasına 5 özgün etkinlik ekle." (Amacı: İçeriği kişiselleştirmek)
3. **Prompt 3:** "etkinlikler.html için başlığa göre arama, sayaç ve Temizle düğmesi ekle." (Amacı: script.js filtreleme kodunu yazmak)

## 2. AI Önerisi ve Kod Açıklamaları
- **Öneri Değerlendirmesi:** Türkçe karakter uyumu için `.toLocaleLowerCase('tr-TR')` ve boşluk silmek için `.trim()` kullanıldı.
- **Event Listener:** `searchInput.addEventListener('input', filterEvents)` arama kutusuna her harf yazıldığında filtreleme fonksiyonunu anında çalıştırır.
- **Filtreleme Koşulu:** `title.includes(query)` başlığın aranan kelimeyi içerip içermediğini kontrol eder; eşleşmeyen kartları `hidden` ile gizler.
