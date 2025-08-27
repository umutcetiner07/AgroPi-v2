<p align="center">
  <img src="./AgroPi Logo.png" alt="AgroPi Logo" width="180"/>
</p>

# AgroPi SDK Hybrid Demo

Demo uygulaması: **Pi Network SDK**’yı test etmek için hazırlanmış basit bir HTML proje.  
Hem **sandbox** hem de **production** ortamını destekler ve **localhost** geliştirme için otomatik mock SDK içerir.

---

## 🚀 Özellikler

- **SDK Dinamik Yükleme** → `?env=sandbox` veya `?env=prod` parametresiyle test/canlı seçim.  
- **Localhost Mock** → Bilgisayarda çalıştırırken SDK olmadan test imkanı.  
- **Login ve Ödeme Akışları** → Pi SDK ile giriş ve mikro-ödeme senaryoları.  
- **Global Error Handler** → Hatalar otomatik yakalanır ve ekrana loglanır.  
- **Log Paneli** → Tüm işlemler ekranda listelenir.  
- **Modal Örneği** → Basit popup penceresi.  

---

## 📂 Dosya Yapısı


---

## ⚡ Kullanım

1. `index.html` dosyasını açın:  
   - **Normal tarayıcıda** açarsanız → Mock Pi SDK ile test modu çalışır.  
   - **Pi Browser’da** açarsanız → Gerçek Pi SDK yüklenir.  

2. Ortam seçmek için:  
   - Sandbox: `index.html?env=sandbox`  
   - Production: `index.html?env=prod`  

3. Adım adım deneyin:  
   - **SDK Yükle** → **Init** → **Login** → **Ödeme**  

4. Tüm sonuçlar ve hatalar, ekranın altındaki **log panelinde** görülür.  

---

## 📸 Ekran Görüntüsü

<p align="center">
  <img src="https://dummyimage.com/800x400/cccccc/000000&text=AgroPi+SDK+Demo+Screenshot" alt="Demo Screenshot" width="600"/>
</p>

> Örnek: Log paneli ve modal penceresi gösterimi.  

---

## 🔧 Geliştirici Notları

- `APP_ID` alanını kendi **Pi Developer Portal** uygulamanızdan aldığınız kimlikle güncelleyin.  
- Localhost üzerinde çalışırken otomatik olarak mock SDK devreye girer.  
- Hata mesajları global handler sayesinde direkt ekrana kırmızı uyarı olarak düşer.  

---

## 📜 Lisans

MIT (veya tercih ettiğiniz lisans).
