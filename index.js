// =================================================================
// GENİŞLETİLMİŞ KPSS TARİH VERİ TABANI (GÜNCEL)
// =================================================================
const database = {
    // --- 1. İSLAMİYET ÖNCESİ ---
    "islamiyet_oncesi": [
        { word: "İslamiyet öncesi Türklerde 'Devlet'e ne ad verilir?", meaning: "İl (El)" },
        { word: "Gök Tanrı tarafından hükümdara verildiğine inanılan yönetme yetkisi?", meaning: "Kut" },
        { word: "Hükümdarın yetkilerini kısıtlayabilen tek güç?", meaning: "Töre (Hukuk Kuralları)" },
        { word: "Devlet işlerinin görüşüldüğü meclise verilen isimler?", meaning: "Toy / Kurultay / Kengeş" },
        { word: "Hükümet (Bakanlar Kurulu) kavramının karşılığı nedir?", meaning: "Ayuki" },
        { word: "Hükümet başkanı (Başbakan) kavramının karşılığı nedir?", meaning: "Aygucı (Üge)" },
        { word: "Hükümdarın erkek çocuklarına ne ad verilir?", meaning: "Tigin" },
        { word: "Tiginlerin eğitiminden sorumlu hocalara ne ad verilir?", meaning: "Ataman (İnal / İnanç)" },
        { word: "Kurultay'a katılma hakkı olan üyelere ne ad verilir?", meaning: "Toygun" },
        { word: "Saray görevlisi veya yazışmalardan sorumlu katip?", meaning: "Bitikçi (Tamgacı)" },
        { word: "Sosyal yapının en küçük birimi olan 'Aile'ye ne denir?", meaning: "Oguş" },
        { word: "Sülalelerin birleşmesiyle oluşan 'Boy'a ne denir?", meaning: "Bod (Ok)" },
        { word: "Milletin birleşmesiyle oluşan en üst yapı (Devlet)?", meaning: "İl (El)" },
        { word: "Mezarın başına dikilen ve öldürdüğü düşman sayısını simgeleyen taş?", meaning: "Balbal (Bengütaş)" },
        { word: "Cenaze törenlerine ne ad verilir?", meaning: "Yuğ" },
        { word: "Din adamlarına verilen isimler?", meaning: "Kam / Baksı / Şaman" },
        { word: "Türklerde parayı değişim aracı olarak kullanan ilk devlet?", meaning: "Köktürkler" },
        { word: "Kendi adına para bastıran ilk Türk hükümdarı?", meaning: "Baga Tarkan (Türgişler)" },
        { word: "Türk tarihinin ilk yazılı edebi eserleri?", meaning: "Orhun Abideleri" },
        { word: "İslamiyet öncesi sözlü edebiyat ürünü olan 'Atasözü'ne ne denir?", meaning: "Sav" },
        { word: "Kopuz eşliğinde söylenen şiirlere ne denir?", meaning: "Koşuk" },
        { word: "Türk adının anlamı Çin kaynaklarında nasıl geçer?", meaning: "Miğfer" },
        { word: "Türk adının anlamı Ziya Gökalp'e göre nedir?", meaning: "Töreli (Kanun nizam sahibi)" },
        { word: "Museviliği kabul eden ilk ve tek Türk devleti?", meaning: "Hazarlar" },
        { word: "İslamiyet'i kabul eden ilk Türk boyu?", meaning: "Karluklar" }
    ],

    // --- 2. TÜRK-İSLAM TARİHİ ---
    "turk_islam": [
        { word: "Orta Asya'da kurulan ilk Müslüman Türk devleti?", meaning: "Karahanlılar" },
        { word: "Mısır'da kurulan ilk Türk-İslam devleti?", meaning: "Tolunoğulları" },
        { word: "Kutsal topraklara (Hicaz) hakim olan ilk Türk devleti?", meaning: "İhşidiler (Akşitler)" },
        { word: "Dünya tarihinde 'Sultan' unvanını kullanan ilk hükümdar?", meaning: "Gazneli Mahmut" },
        { word: "Anadolu'nun kapılarını Türklere açan savaş?", meaning: "Malazgirt Savaşı (1071)" },
        { word: "Büyük Selçuklu'nun yıkılmasına neden olan savaş?", meaning: "Katvan Savaşı" },
        { word: "Kudüs'ü Haçlılardan geri alan (Hıttin Savaşı) devlet?", meaning: "Eyyubiler" },
        { word: "Moğolları dünya tarihinde ilk kez durduran devlet?", meaning: "Memlükler (Ayn Calut Savaşı)" },
        { word: "Veraset sistemini değiştirip 'Her emirin sultan olma hakkı vardır' diyen devlet?", meaning: "Memlükler" },
        { word: "Hükümdarın halife tarafından onaylanması belgesine ne denir?", meaning: "Menşur" },
        { word: "Sarayda hükümdar ile halk/divan arasındaki görüşmeleri ayarlayan görevli?", meaning: "Hacib (Hacibül Hüccab)" },
        { word: "Selçuklu şehzadelerini eğiten devlet adamlarına ne denir?", meaning: "Atabey" },
        { word: "Savaş esiri çocukların yetiştirilip asker yapıldığı sistem?", meaning: "Gulam Sistemi" },
        { word: "Toprağın geliriyle memur ve asker maaşlarının ödendiği sistem?", meaning: "İkta Sistemi" },
        { word: "İslami dönem Türk edebiyatının İLK eseri?", meaning: "Kutadgu Bilig (Yusuf Has Hacip)" },
        { word: "Türkçenin Arapçadan zengin olduğunu göstermek için yazılan sözlük?", meaning: "Divan-ı Lügati't Türk" },
        { word: "Muallim-i Sani (İkinci Öğretmen) olarak bilinen bilgin?", meaning: "Farabi" },
        { word: "Avrupalıların 'Avicenna' dediği, Tıbbın Hükümdarı?", meaning: "İbn-i Sina" },
        { word: "Cebir ilminin kurucusu ve '0' rakamını kullanan bilgin?", meaning: "Harezmi" }
    ],

    // --- 3. OSMANLI KÜLTÜR & MEDENİYET ---
    "osmanli_kultur": [
        { word: "Osmanlı'da devlet işlerinin görüşüldüğü en yüksek kurul?", meaning: "Divan-ı Hümayun" },
        { word: "Padişahın mutlak vekili ve divan başkanı?", meaning: "Sadrazam (Vezir-i Azam)" },
        { word: "Padişahın tuğrasını çeken ve tapu kayıtlarını tutan görevli?", meaning: "Nişancı" },
        { word: "Adalet ve eğitim işlerinden sorumlu divan üyesi?", meaning: "Kazasker" },
        { word: "Mali işlerden sorumlu, bütçeyi hazırlayan divan üyesi?", meaning: "Defterdar" },
        { word: "Şehzadelerin sancağa çıkma usulünün kaldırılıp sarayda hapis kalması?", meaning: "Kafes Usulü" },
        { word: "Osmanlı'da 'En yaşlı ve en olgun' hanedan üyesinin tahta geçmesi?", meaning: "Ekber ve Erşed Sistemi" },
        { word: "Geliri devlet memurlarına ve askerlere maaş karşılığı verilen toprak?", meaning: "Dirlik (Tımar)" },
        { word: "Devşirme kökenli askerlerin (Kapıkulu) 3 ayda bir aldığı maaş?", meaning: "Ulufe" },
        { word: "Padişah değişikliklerinde askerlere dağıtılan bahşiş?", meaning: "Culus Bahşişi" },
        { word: "Esnaf ve zanaatkarların oluşturduğu meslek örgütü?", meaning: "Lonca Teşkilatı" },
        { word: "Lonca'da dükkan açma ruhsatına ne denir?", meaning: "Gedik" },
        { word: "Devletin mallara fiyat belirlemesi (Eksik rekabet)?", meaning: "Narh Sistemi" },
        { word: "Olağanüstü durumlarda halktan toplanan vergi?", meaning: "Avarız" },
        { word: "Gayrimüslimlerin askerlik yapmamak karşılığında ödediği vergi?", meaning: "Cizye" },
        { word: "Osmanlı hazinesinin iç borçlanma senetlerine ne denir?", meaning: "Esham" },
        { word: "Devletin haksız kazanç sağlayan memurun malına el koyması?", meaning: "Müsadere Sistemi" },
        { word: "Osmanlı'nın ilk müderrisi (İlk atanan profesör)?", meaning: "Davud-u Kayseri" },
        { word: "Roketle ilk uçuş denemesini yapan mucit?", meaning: "Lagari Hasan Çelebi" },
        { word: "Dünya haritasını çizen ünlü denizci?", meaning: "Piri Reis" },
        { word: "Mimar Sinan'ın 'Ustalık' eseri?", meaning: "Selimiye Camii" },
        { word: "Türk müziğinin en büyük bestekarı (Tuti-i Mucize)?", meaning: "Itri" }
    ],

    // --- 4. OSMANLI SİYASİ TARİHİ (GENİŞLETİLMİŞ VERSİYON) ---
    "osmanli_siyasi": [
        // --- KURULUŞ DÖNEMİ (1299-1453) ---
        { word: "Osmanlı ile Bizans arasında yapılan ilk savaş (Osman Bey)?", meaning: "Koyunhisar (Bafeus) Savaşı" },
        { word: "Bursa'nın fethedilip başkent yapıldığı dönem?", meaning: "Orhan Bey" },
        { word: "Osmanlı'nın Rumeli'ye geçtiği ilk toprak parçası?", meaning: "Çimpe Kalesi" },
        { word: "İlk Osmanlı-Haçlı savaşı?", meaning: "Sırpsındığı Savaşı" },
        { word: "I. Murat'ın şehit düştüğü ve ilk kez top kullanılan savaş?", meaning: "I. Kosova Savaşı" },
        { word: "Yıldırım Bayezid'in Haçlıları bozguna uğrattığı ve 'Sultan-ı İklimi Rum' unvanını aldığı savaş?", meaning: "Niğbolu Savaşı" },
        { word: "Timur ile Yıldırım Bayezid arasında yapılan ve Fetret Devri'ni başlatan savaş?", meaning: "Ankara Savaşı (1402)" },
        { word: "Osmanlı'nın ikinci kurucusu sayılan padişah?", meaning: "I. Mehmet (Çelebi)" },
        { word: "Osmanlı'nın Balkanlardaki hakimiyetini kesinleştiren (Haçlıların ümidini kıran) savaş?", meaning: "II. Kosova Savaşı" },

        // --- YÜKSELME DÖNEMİ (1453-1579) ---
        { word: "İstanbul'un Fethi ile sona eren çağ?", meaning: "Orta Çağ" },
        { word: "Fatih Sultan Mehmet'in Akkoyunlu hükümdarı Uzun Hasan'ı yendiği savaş?", meaning: "Otlukbeli Savaşı" },
        { word: "Kırım'ın fethiyle (Fatih Dönemi) ne gerçekleşmiştir?", meaning: "Karadeniz Türk gölü haline geldi." },
        { word: "Yavuz Sultan Selim'in Safevileri (Şah İsmail) yendiği savaş?", meaning: "Çaldıran Savaşı" },
        { word: "Memlüklerin yıkıldığı, Halifeliğin Osmanlı'ya geçtiği ve Baharat Yolu'nun denetim altına alındığı savaşlar?", meaning: "Mercidabık ve Ridaniye" },
        { word: "Dünya tarihinin en kısa süren (2 saat) meydan muharebesi?", meaning: "Mohaç Meydan Muharebesi (Kanuni)" },
        { word: "Akdeniz'in Türk gölü haline gelmesini sağlayan zafer (Barbaros Hayrettin Paşa)?", meaning: "Preveze Deniz Zaferi" },
        { word: "İlk Osmanlı-İran resmi antlaşması?", meaning: "Amasya Antlaşması (Kanuni)" },
        { word: "Haçlıların Osmanlı donanmasını ilk kez yaktığı olay (Kıbrıs'ın fethinden sonra)?", meaning: "İnebahtı Deniz Bozgunu" },
        { word: "Sadrazam Sokullu Mehmet Paşa'nın ölümüyle sona eren dönem?", meaning: "Yükselme Dönemi" },

        // --- DURAKLAMA DÖNEMİ (1579-1699) ---
        { word: "Osmanlı'nın doğuda en geniş sınırlara ulaştığı antlaşma?", meaning: "Ferhat Paşa Antlaşması" },
        { word: "Avusturya arşidükünün Osmanlı padişahına denk sayılacağı (Orta Avrupa siyasi üstünlüğünün kaybedildiği) antlaşma?", meaning: "Zitvatorok Antlaşması" },
        { word: "Günümüz Türkiye-İran sınırını büyük ölçüde çizen antlaşma?", meaning: "Kasr-ı Şirin Antlaşması" },
        { word: "Osmanlı'nın batıda en geniş sınırlara ulaştığı antlaşma?", meaning: "Bucaş Antlaşması" },
        { word: "Osmanlı ordusunun 24 yılda alabildiği ada?", meaning: "Girit Adası" },
        { word: "Osmanlı'nın batıda taarruzdan savunmaya geçtiği (Sakarya Savaşı'na kadar sürecek) büyük bozgun?", meaning: "II. Viyana Kuşatması" },
        { word: "Osmanlı'nın batıda büyük çapta toprak kaybettiği ilk antlaşma (Gerileme Başlangıcı)?", meaning: "Karlofça Antlaşması" },
        { word: "Rusya'nın Karadeniz'e inme fırsatı bulduğu (Azak Kalesi'nin verildiği) antlaşma?", meaning: "İstanbul Antlaşması (1700)" },

        // --- GERİLEME DÖNEMİ (1699-1792) ---
        { word: "Rusya'ya verilen Azak Kalesi'nin geri alındığı ve 'kaybedilen toprakları geri alma ümidinin doğduğu' antlaşma?", meaning: "Prut Antlaşması" },
        { word: "Batının üstünlüğünün kabul edildiği ve Lale Devri'nin başladığı antlaşma?", meaning: "Pasarofça Antlaşması" },
        { word: "Osmanlı'nın 18. yüzyılda imzaladığı son kazançlı antlaşma?", meaning: "Belgrad Antlaşması" },
        { word: "Rus donanmasının Osmanlı donanmasını yaktığı ikinci olay (1770)?", meaning: "Çeşme Baskını" },
        { word: "Kırım'ın bağımsız olduğu ve Halifeliğin ilk kez siyasi araç olarak kullanıldığı antlaşma?", meaning: "Küçük Kaynarca Antlaşması" },
        { word: "Kırım'ın Rusya'ya ait olduğunun resmen kabul edildiği antlaşma (Dağılma Başlangıcı)?", meaning: "Yaş Antlaşması" },

        // --- DAĞILMA DÖNEMİ (1792-1922) ---
        { word: "Milliyetçilik akımıyla Osmanlı'ya karşı ilk isyan eden millet?", meaning: "Sırplar" },
        { word: "Sırpların ilk kez ayrıcalık kazandığı antlaşma?", meaning: "Bükreş Antlaşması" },
        { word: "Osmanlı'dan bağımsızlığını kazanan ilk azınlık?", meaning: "Yunanlılar (Rumlar) / Edirne Antlaşması" },
        { word: "Rusya ve İngiltere/Fransa'nın Osmanlı donanmasını yaktığı olay (Yunan isyanı sırasında)?", meaning: "Navarin Olayı" },
        { word: "Mısır Valisi Kavalalı Mehmet Ali Paşa isyanı sonucu Rusya ile imzalanan antlaşma?", meaning: "Hünkar İskelesi Antlaşması" },
        { word: "Boğazlar sorununun uluslararası statü kazandığı sözleşme?", meaning: "Londra Boğazlar Sözleşmesi (1841)" },
        { word: "Osmanlı ekonomisinin dışa bağımlı hale geldiği (İngiltere ile yapılan) ticaret antlaşması?", meaning: "Balta Limanı Antlaşması" },
        { word: "Osmanlı'nın ilk kez Avrupa devleti sayıldığı antlaşma?", meaning: "Paris Antlaşması (Kırım Savaşı sonu)" },
        { word: "Rus donanmasının Osmanlı donanmasını yaktığı dördüncü ve son olay?", meaning: "Sinop Baskını" },
        { word: "Ermeni sorununun uluslararası alanda ilk kez yer aldığı antlaşma?", meaning: "Berlin Antlaşması" },
        { word: "Kıbrıs'ın İngiltere'ye geçici olarak üs verildiği dönem?", meaning: "93 Harbi (Berlin Antlaşması öncesi)" },
        { word: "Mustafa Kemal'in tarih sahnesine çıktığı ilk olay?", meaning: "31 Mart Olayı (Hareket Ordusu)" },
        { word: "Kuzey Afrika'daki son toprak parçasının (Trablusgarp) kaybedildiği antlaşma?", meaning: "Uşi Antlaşması" },
        { word: "I. Balkan Savaşı'nda en karlı çıkan ve büyüyen devlet?", meaning: "Bulgaristan" },
        { word: "Osmanlı'nın I. Dünya Savaşı'ndan çekildiği ateşkes antlaşması?", meaning: "Mondros Ateşkes Antlaşması" }
    ],

  // --- 5. OSMANLI ISLAHATLARI (TAM DETAYLI VERSİYON) ---
    "osmanli_islahat": [
        // ==========================================
        // 17. YÜZYIL ISLAHATLARI (DURAKLAMA)
        // Şifre: TOKMAK (Tarhuncu, Osman, Kuyucu, Murat, Ahmet, Köprülü)
        // ==========================================
        { word: "Saray dışından evlenerek saray kadınlarının etkisini kırmak isteyen ilk padişah?", meaning: "II. Osman (Genç Osman)" },
        { word: "Yeniçeri Ocağı'nı kaldırmayı düşünen ancak bu yüzden öldürülen padişah?", meaning: "II. Osman (Genç Osman)" },
        { word: "Başkenti İstanbul'dan Anadolu'ya taşımayı düşünen padişah?", meaning: "II. Osman (Genç Osman)" },
        { word: "İçki, tütün ve gece sokağa çıkma yasağı getiren padişah?", meaning: "IV. Murat" },
        { word: "Devletin kötü gidişatı hakkında Koçi Bey ve Katip Çelebi'ye rapor (Risale) hazırlatan padişah?", meaning: "IV. Murat" },
        { word: "İlk kez modern anlamda 'Denk Bütçe' çalışmasını yapan devlet adamı?", meaning: "Tarhuncu Ahmet Paşa" },
        { word: "Sadrazamlık teklifini 'bazı şartlar öne sürerek' kabul eden ilk devlet adamı?", meaning: "Köprülü Mehmet Paşa" },
        { word: "Girit Adası'nı 24 yıllık kuşatmadan sonra alan sadrazam?", meaning: "Köprülü Fazıl Ahmet Paşa" },

        // ==========================================
        // 18. YÜZYIL ISLAHATLARI (GERİLEME)
        // Batı örnek alınmaya başlandı.
        // ==========================================
        // --- III. AHMET (LALE DEVRİ) ---
        { word: "Lale Devri'nin (1718-1730) padişahı ve sadrazamı?", meaning: "III. Ahmet - Nevşehirli Damat İbrahim Paşa" },
        { word: "Avrupa'dan (Paris, Viyana) getirilen ilk teknik yenilik?", meaning: "Matbaa" },
        { word: "İlk Türk matbaasını kuran kişiler?", meaning: "İbrahim Müteferrika ve Sait Efendi" },
        { word: "Matbaada basılan ilk eser?", meaning: "Vankulu Lügati" },
        { word: "İlk kez 'Geçici Elçilikler' (Paris, Viyana, Moskova) hangi dönemde açıldı?", meaning: "Lale Devri (III. Ahmet)" },
        { word: "Avrupa'dan getirilen ilk çiçek aşısı hangi dönemde uygulandı?", meaning: "Lale Devri" },
        { word: "Yeniçerilerden oluşturulan itfaiye bölüğüne ne ad verilir?", meaning: "Tulumbacılar Ocağı" },
        { word: "Lale Devri'ni sona erdiren isyan?", meaning: "Patrona Halil İsyanı" },

        // --- I. MAHMUT & III. MUSTAFA & I. ABDÜLHAMİT ---
        { word: "Avrupa'dan getirilen ilk askeri uzman (Comte de Bonneval)?", meaning: "Humbaracı Ahmet Paşa (I. Mahmut Dönemi)" },
        { word: "Batı tarzında açılan ilk teknik askeri okul?", meaning: "Hendesehane (I. Mahmut)" },
        { word: "Sürat Topçuları Ocağı'nı kuran padişah?", meaning: "III. Mustafa" },
        { word: "İç borçlanma sistemi olan 'Esham'ı hazırlayan padişah?", meaning: "III. Mustafa" },
        { word: "'Esham' sistemini uygulamaya koyan padişah?", meaning: "I. Abdülhamit" },
        { word: "Yeniçeri sayımını yapan ve Ulufe alım-satımını yasaklayan padişah?", meaning: "I. Abdülhamit" },
        { word: "Culus bahşişini kaldıran padişah?", meaning: "I. Abdülhamit" },

        // --- III. SELİM (NİZAM-I CEDİD) ---
        { word: "Nizam-ı Cedid (Yeni Düzen) ordusunu kuran padişah?", meaning: "III. Selim" },
        { word: "Nizam-ı Cedid ordusunun masrafları için kurulan hazine?", meaning: "İrad-ı Cedid" },
        { word: "Nizam-ı Cedid ordusunun Napolyon'a karşı kazandığı ilk zafer?", meaning: "Akka Kalesi Savunması" },
        { word: "İlk 'Daimi (Sürekli) Elçilikler' (Londra) kimin zamanında açıldı?", meaning: "III. Selim" },
        { word: "İlk devlet matbaası (Matbaa-i Amire) kimin döneminde kuruldu?", meaning: "III. Selim" },
        { word: "Fransızcayı askeri okullarda zorunlu dil yapan padişah?", meaning: "III. Selim" },
        { word: "III. Selim dönemini sona erdiren isyan?", meaning: "Kabakçı Mustafa İsyanı" },

        // ==========================================
        // 19. YÜZYIL ISLAHATLARI (DAĞILMA)
        // En yoğun ve en önemli kısım.
        // ==========================================
        
        // --- II. MAHMUT (GAVUR PADİŞAH) ---
        { word: "Sened-i İttifak'ı imzalayarak padişahın yetkilerini ilk kez kısıtlayan padişah?", meaning: "II. Mahmut" },
        { word: "Sekban-ı Cedit ve Eşkinci Ocağı'nı kuran padişah?", meaning: "II. Mahmut" },
        { word: "Vaka-i Hayriye ile Yeniçeri Ocağı'nı kaldıran padişah?", meaning: "II. Mahmut" },
        { word: "Yeniçeri yerine kurulan ordunun adı?", meaning: "Asakir-i Mansure-i Muhammediye" },
        { word: "Divan-ı Hümayun'u kaldırıp Nazırlıkları (Bakanlıklar) kuran?", meaning: "II. Mahmut" },
        { word: "Tımar ve Müsadere sistemini kaldıran padişah?", meaning: "II. Mahmut" },
        { word: "Köy ve mahalle muhtarlıklarını kuran padişah?", meaning: "II. Mahmut" },
        { word: "İlk nüfus sayımını (askeri amaçlı) yapan padişah?", meaning: "II. Mahmut" },
        { word: "Takvim-i Vekayi (İlk Resmi Gazete) kimin döneminde çıkarıldı?", meaning: "II. Mahmut" },
        { word: "Memura fes, ceket, pantolon giyme zorunluluğu getiren?", meaning: "II. Mahmut" },
        { word: "İlköğretimi (İstanbul'da) zorunlu hale getiren padişah?", meaning: "II. Mahmut" },
        { word: "Yurt dışına ilk kez öğrenci gönderen padişah?", meaning: "II. Mahmut" },
        { word: "Mürur Tezkiresi (Pasaport/İç vize) uygulamasını başlatan?", meaning: "II. Mahmut" },
        { word: "Karantina uygulamasını ilk kez başlatan?", meaning: "II. Mahmut" },

        // --- SULTAN ABDÜLMECİD (TANZİMAT DÖNEMİ) ---
        { word: "Tanzimat Fermanı'nı (Hukukun Üstünlüğü) ilan eden padişah?", meaning: "Sultan Abdülmecid" },
        { word: "Islahat Fermanı ile gayrimüslimlere geniş haklar veren padişah?", meaning: "Sultan Abdülmecid" },
        { word: "İlk kağıt para (Kaime) kimin döneminde basıldı?", meaning: "Sultan Abdülmecid" },
        { word: "İlk dış borç (Kırım Savaşı - İngiltere) kimin döneminde alındı?", meaning: "Sultan Abdülmecid" },
        { word: "İlk Osmanlı bankası (Bank-ı Dersaadet) kimin döneminde kuruldu?", meaning: "Sultan Abdülmecid" },
        { word: "İngiliz sermayeli Bank-ı Osmani (Para basma yetkisi olan) ne zaman kuruldu?", meaning: "Sultan Abdülmecid" },
        { word: "Jandarma ve Polis teşkilatının temelleri kimin döneminde atıldı?", meaning: "Sultan Abdülmecid" },
        { word: "İlk telgraf hattı ve ilk demiryolu hattı kimin döneminde?", meaning: "Sultan Abdülmecid" },
        { word: "Erkek Öğretmen Okulu (Darülmuallimin) kimin döneminde açıldı?", meaning: "Sultan Abdülmecid" },
        { word: "Dolmabahçe Sarayı kimin döneminde yapıldı?", meaning: "Sultan Abdülmecid" },

        // --- SULTAN ABDÜLAZİZ ---
        { word: "Yurt dışına seyahate çıkan ilk ve tek Osmanlı padişahı?", meaning: "Sultan Abdülaziz" },
        { word: "Osmanlı Donanmasını dünyanın en büyük 3. filosu haline getiren?", meaning: "Sultan Abdülaziz" },
        { word: "Mecelle (Medeni Kanun) komisyonunu kim kurdurdu?", meaning: "Sultan Abdülaziz" },
        { word: "Vilayet Nizamnamesi (1864) kimin döneminde çıkarıldı?", meaning: "Sultan Abdülaziz" },
        { word: "Darüşşafaka (Öksüzler Yurdu) kimin döneminde açıldı?", meaning: "Sultan Abdülaziz" },
        { word: "Memleket Sandıkları (Ziraat Bankası'nın temeli) kimin döneminde kuruldu?", meaning: "Sultan Abdülaziz" },
        { word: "Hilal-i Ahmer (Kızılay) cemiyeti kimin döneminde kuruldu?", meaning: "Sultan Abdülaziz" },
        { word: "Çırağan ve Beylerbeyi Sarayları kimin döneminde yapıldı?", meaning: "Sultan Abdülaziz" },

        // --- II. ABDÜLHAMİD (İSTİBDAT VE MEŞRUTİYET) ---
        { word: "I. Meşrutiyet'i (Kanun-i Esasi) ilan eden padişah?", meaning: "II. Abdülhamid" },
        { word: "Duyun-u Umumiye (Genel Borçlar İdaresi) kimin döneminde kuruldu?", meaning: "II. Abdülhamid" },
        { word: "Ziraat Bankası resmen kimin döneminde kuruldu?", meaning: "II. Abdülhamid" },
        { word: "Sanayi-i Nefise Mektebi (Güzel Sanatlar) kimin döneminde açıldı?", meaning: "II. Abdülhamid" },
        { word: "Berlin-Bağdat demiryolu projesi (Almanlarla) kimin döneminde?", meaning: "II. Abdülhamid" },
        { word: "Hamidiye Alayları (Doğu Anadolu için) kimin döneminde kuruldu?", meaning: "II. Abdülhamid" },
        { word: "Darülaceze (Düşkünler Yurdu) ve Şişli Etfal Hastanesi'ni kuran?", meaning: "II. Abdülhamid" },
        { word: "Müze-i Hümayun (İstanbul Arkeoloji Müzesi - Osman Hamdi Bey) kimin döneminde?", meaning: "II. Abdülhamid" },
        { word: "Yıldız Sarayı'nı yönetim merkezi olarak kullanan padişah?", meaning: "II. Abdülhamid" },
        { word: "Tarihimizde rejimi değiştirmeye yönelik çıkan ilk isyan?", meaning: "31 Mart Olayı (Meşrutiyet'e karşı)" }
    ],

// --- 6. İNKILAP TARİHİ (TAM KAPSAMLI) ---
    "inkilap_tarihi": [
        // ==========================================
        // KURULUŞ SAVAŞI HAZIRLIK DÖNEMİ
        // ==========================================
        { word: "Mustafa Kemal'in 'Milli Mücadele'yi fiilen başlattığı olay?", meaning: "19 Mayıs 1919 Samsun'a Çıkış" },
        { word: "Milli Mücadelenin amacı, gerekçesi ve yönteminin ilk kez belirtildiği belge?", meaning: "Amasya Genelgesi" },
        { word: "Milli sınırlardan ilk kez bahsedilen kongre?", meaning: "Erzurum Kongresi" },
        { word: "Mandacılık ve himayenin 'kesin olarak' reddedildiği kongre?", meaning: "Sivas Kongresi" },
        { word: "Milli Cemiyetlerin tek çatı altında (Anadolu ve Rumeli Müdafaa-i Hukuk) birleştiği yer?", meaning: "Sivas Kongresi" },
        { word: "İstanbul Hükümeti'nin Temsil Heyeti'ni resmen tanıdığı olay?", meaning: "Amasya Görüşmeleri" },
        { word: "Son Osmanlı Mebusan Meclisi'nde kabul edilen ve 'Milli Sınırları' çizen belge?", meaning: "Misak-ı Milli" },
        { word: "İstanbul'un resmen işgaline sebep olan olay?", meaning: "Misak-ı Milli'nin kabulü" },
        { word: "I. TBMM'nin açılış tarihi?", meaning: "23 Nisan 1920" },

        // ==========================================
        // MUHAREBELER DÖNEMİ (CEPHELER)
        // ==========================================
        { word: "TBMM'nin uluslararası alanda kazandığı ilk askeri ve siyasi başarı?", meaning: "Gümrü Antlaşması (Ermenistan)" },
        { word: "Düzenli Ordunun Batı Cephesi'nde kazandığı ilk zafer?", meaning: "I. İnönü Savaşı" },
        { word: "Yeni Türk Devleti'nin ilk anayasası?", meaning: "Teşkilat-ı Esasiye (1921)" },
        { word: "İstiklal Marşı'nın kabulü ve Londra Konferansı hangi savaşın sonucudur?", meaning: "I. İnönü Savaşı" },
        { word: "Mustafa Kemal'e 'Gazilik' unvanı ve 'Mareşallik' rütbesinin verildiği savaş?", meaning: "Sakarya Meydan Muharebesi" },
        { word: "Hattı müdafaa yoktur, sathı müdafaa vardır sözü hangi savaşta söylendi?", meaning: "Sakarya Meydan Muharebesi" },
        { word: "Fransızların Anadolu'dan çekildiği (Güney Cephesi'ni kapatan) antlaşma?", meaning: "Ankara Antlaşması (1921)" },
        { word: "Doğu sınırımızın kesinlik kazandığı antlaşma?", meaning: "Kars Antlaşması" },
        { word: "Kurtuluş Savaşı'nın askeri safhasını bitiren ateşkes antlaşması?", meaning: "Mudanya Ateşkes Antlaşması" },
        { word: "Yeni Türk Devleti'nin bağımsızlığının tüm dünyaca tanındığı antlaşma?", meaning: "Lozan Barış Antlaşması (1923)" },
        { word: "Lozan'da çözülemeyen ve sonraya bırakılan tek sınır sorunu?", meaning: "Irak Sınırı (Musul Sorunu)" },

        // ==========================================
        // İNKILAPLAR (SİYASİ, HUKUKİ, SOSYAL)
        // ==========================================
        { word: "Laikliğe geçişin ilk aşaması ve Osmanlı saltanatının sonu?", meaning: "Saltanatın Kaldırılması (1922)" },
        { word: "Devletin rejiminin ve adının belli olduğu olay?", meaning: "Cumhuriyetin İlanı (29 Ekim 1923)" },
        { word: "Laikliğin en önemli aşaması (Ümmetten millete geçiş)?", meaning: "Halifeliğin Kaldırılması (3 Mart 1924)" },
        { word: "Eğitim ve öğretimin birleştirildiği kanun?", meaning: "Tevhid-i Tedrisat Kanunu" },
        { word: "Kadınlara sosyal ve ekonomik haklar veren (ancak siyasi hak vermeyen) kanun?", meaning: "Türk Medeni Kanunu (1926)" },
        { word: "Yeni Türk harflerinin kabul edildiği yıl?", meaning: "1928" },
        { word: "Halkevlerinin açılma amacı?", meaning: "İnkılapları halka anlatmak ve okuma-yazmayı artırmak" },
        { word: "Toplumsal sınıf farkını belirten unvanların kaldırıldığı kanun?", meaning: "Soyadı Kanunu" },
        { word: "Kadınlara 'Seçme ve Seçilme' hakkının tam olarak verildiği yıl?", meaning: "1934 (Milletvekili seçme)" },
        { word: "Laiklik ilkesinin anayasaya girdiği yıl?", meaning: "1937" },

        // ==========================================
        // ATATÜRK İLKELERİ (ANAHTAR KELİMELER)
        // ==========================================
        { word: "'Seçim, Milli İrade, Meclis, Siyasi Parti' hangi ilkeyle ilgilidir?", meaning: "Cumhuriyetçilik" },
        { word: "'Akıl, Bilim, Din ve Devlet işlerinin ayrılması' hangi ilkeyle ilgilidir?", meaning: "Laiklik" },
        { word: "'Eşitlik, Adalet, Sosyal Devlet, Ayrıcalıkların reddi' hangi ilkeyle ilgilidir?", meaning: "Halkçılık" },
        { word: "'Türk Tarihi, Türk Dili, Bağımsızlık, Misak-ı Milli' hangi ilkeyle ilgilidir?", meaning: "Milliyetçilik" },
        { word: "'Yenilik, Çağdaşlaşma, Dinamizm, İlerleme' hangi ilkeyle ilgilidir?", meaning: "İnkılapçılık" },
        { word: "'Ekonomi, Kalkınma, Bankalar, Yatırım' hangi ilkeyle ilgilidir?", meaning: "Devletçilik" },

        // ==========================================
        // DIŞ POLİTİKA
        // ==========================================
        { word: "Türkiye'nin Milletler Cemiyeti'ne girdiği yıl?", meaning: "1932" },
        { word: "Yunanistan ile yaşanan 'Nüfus Mübadelesi' sorunu ne zaman çözüldü?", meaning: "1930 (Ahali Antlaşması)" },
        { word: "Boğazlar üzerindeki egemenliğimizin tam olarak sağlandığı sözleşme?", meaning: "Montrö Boğazlar Sözleşmesi (1936)" },
        { word: "Türkiye, İran, Irak ve Afganistan arasında kurulan pakt?", meaning: "Sadabat Paktı" },
        { word: "Türkiye, Yunanistan, Yugoslavya ve Romanya arasında kurulan pakt?", meaning: "Balkan Antantı" },
        { word: "Atatürk'ün 'Şahsi Meselem' dediği ve ölümünden sonra anavatana katılan yer?", meaning: "Hatay (1939)" }
    ],

    // --- 7. ÇAĞDAŞ TÜRK VE DÜNYA TARİHİ (SON BÖLÜM) ---
    "cagdas_turk": [
        // ==========================================
        // XX. YÜZYIL BAŞLARI VE II. DÜNYA SAVAŞI
        // ==========================================
        { word: "SSCB'nin Türkistan'ı işgaline karşı başlatılan direniş hareketi?", meaning: "Basmacı Hareketi" },
        { word: "Basmacı Hareketi'ne katılan ünlü Osmanlı komutanı?", meaning: "Enver Paşa" },
        { word: "Japonya'nın kapılarını dünyaya açtığı ve modernleştiği dönem?", meaning: "Meiji Restorasyonu (Aydınlanma)" },
        { word: "1929 Dünya Ekonomik Krizi'nin (Kara Perşembe) başladığı ülke?", meaning: "ABD" },
        { word: "II. Dünya Savaşı'nda Almanya'nın SSCB'yi işgal planı?", meaning: "Barbarossa Harekatı" },
        { word: "ABD'nin II. Dünya Savaşı'na girmesine neden olan olay?", meaning: "Pearl Harbor Baskını (Japonya)" },
        { word: "II. Dünya Savaşı'nda Müttefiklerin Avrupa'yı kurtarmak için yaptığı çıkarma?", meaning: "Normandiya Çıkarması" },
        { word: "II. Dünya Savaşı'nı bitiren ve Japonya'ya atom bombası atılan şehirler?", meaning: "Hiroşima ve Nagazaki" },
        { word: "II. Dünya Savaşı'ndan sonra dünya barışını korumak için kurulan örgüt?", meaning: "Birleşmiş Milletler (BM)" },

        // --- II. DÜNYA SAVAŞI'NDA TÜRKİYE ---
        { word: "Türkiye'nin II. Dünya Savaşı'ndaki resmi politikası?", meaning: "Aktif Tarafsızlık (Denge Politikası)" },
        { word: "Alman saldırısına karşı Trakya sınırında oluşturulan savunma hattı?", meaning: "Çakmak Hattı" },
        { word: "Savaş zenginlerinden bir defaya mahsus alınan vergi?", meaning: "Varlık Vergisi" },
        { word: "II. Dünya Savaşı yıllarında köylüyü eğitmek için kurulan kurum?", meaning: "Köy Enstitüleri (1940)" },
        { word: "Türkiye'nin BM'ye kurucu üye olabilmek için savaşın sonunda kağıt üzerinde savaş ilan ettiği ülkeler?", meaning: "Almanya ve Japonya" },

        // ==========================================
        // SOĞUK SAVAŞ DÖNEMİ (DOĞU vs BATI BLOKU)
        // ==========================================
        { word: "Doğu Bloku'na (SSCB) karşı Batı Bloku'nun (ABD) kurduğu askeri örgüt?", meaning: "NATO" },
        { word: "NATO'ya karşı SSCB ve Doğu Bloku'nun kurduğu askeri örgüt?", meaning: "Varşova Paktı" },
        { word: "ABD'nin komünizm tehdidi altındaki ülkelere yaptığı askeri yardım?", meaning: "Truman Doktrini" },
        { word: "ABD'nin Avrupa ülkelerini kalkındırmak için yaptığı ekonomik yardım?", meaning: "Marshall Planı" },
        { word: "İsrail Devleti'nin kurulduğu yıl?", meaning: "1948" },
        { word: "Hindistan'ın bağımsızlık lideri (Pasif Direniş)?", meaning: "Mahatma Gandhi" },
        { word: "Kore Savaşı'nda Türk tugayının büyük başarı kazandığı zafer?", meaning: "Kunuri Zaferi" },
        { word: "Türkiye'nin NATO'ya üye olduğu yıl (Kore başarısı sonrası)?", meaning: "1952" },
        { word: "Türkiye'nin NATO'ya girmesiyle üye olduğu ilk bölgesel pakt?", meaning: "Balkan Paktı (1953)" },
        { word: "Adnan Menderes döneminde yaşanan ve azınlıklara yönelik tahrip olayları?", meaning: "6-7 Eylül Olayları" },

        // ==========================================
        // YUMUŞAMA DÖNEMİ VE SONRASI
        // ==========================================
        { word: "Yumuşama dönemini başlatan ABD ve SSCB liderleri?", meaning: "Kennedy ve Kruşçev" },
        { word: "ABD ile Çin arasındaki ilişkileri düzelten diplomasi?", meaning: "Ping-Pong Diplomasisi" },
        { word: "Nükleer silahların sınırlandırılması görüşmeleri?", meaning: "SALT-1 ve SALT-2" },
        { word: "İran-Irak savaşında (1980-88) ABD'nin el altından İran'a silah satması skandalı?", meaning: "İrangate Olayı" },
        { word: "SSCB'nin Afganistan'ı işgali üzerine boykot edilen olimpiyatlar?", meaning: "1980 Moskova Olimpiyatları" },

        // --- KIBRIS MESELESİ VE TÜRKİYE ---
        { word: "Kıbrıs Rumlarının adayı Yunanistan'a bağlama hayali/fikri?", meaning: "Enosis" },
        { word: "Kıbrıs Türklerini korumak için kurulan direniş örgütü?", meaning: "Türk Mukavemet Teşkilatı (TMT)" },
        { word: "ABD Başkanı'nın Türkiye'nin Kıbrıs'a müdahalesini engellemek için yazdığı mektup?", meaning: "Johnson Mektubu (1964)" },
        { word: "1974 Kıbrıs Barış Harekatı'nın parolası?", meaning: "'Ayşe Tatile Çıksın'" },
        { word: "Kıbrıs Barış Harekatı sırasındaki Başbakan ve Başbakan Yardımcısı?", meaning: "Bülent Ecevit - Necmettin Erbakan" },
        { word: "Kuzey Kıbrıs Türk Cumhuriyeti'nin (KKTC) kurucu cumhurbaşkanı?", meaning: "Rauf Denktaş" },
        { word: "Ermeni terör örgütü ASALA'nın Türk diplomatlarını şehit etmesi olayları?", meaning: "Dış Politika Sorunları (1975-1985)" },

        // ==========================================
        // KÜRESELLEŞEN DÜNYA (GÜNÜMÜZ)
        // ==========================================
        { word: "SSCB'nin dağılmasından sonra Türk Cumhuriyetleri ile ilişkileri geliştirmek için kurulan örgüt?", meaning: "TİKA" },
        { word: "Azerbaycan'ın bağımsızlık lideri ve ilk cumhurbaşkanı?", meaning: "Ebulfez Elçibey" },
        { word: "Bosna Hersek'in efsanevi lideri (Bilge Kral)?", meaning: "Aliya İzzetbegoviç" },
        { word: "Bosna savaşını bitiren antlaşma?", meaning: "Dayton Antlaşması" },
        { word: "Orta Asya'daki Türk Cumhuriyetlerinin bağımsızlığını tanıyan ilk ülke?", meaning: "Türkiye" },
        { word: "Küresel ısınmaya karşı imzalanan uluslararası protokol?", meaning: "Kyoto Protokolü" },
        { word: "Arap Baharı'nın başladığı ilk ülke?", meaning: "Tunus (Yasemin Devrimi)" }
    ]
};

// =================================================================
// OYUN MANTIĞI
// =================================================================

let currentList = [];
let currentCategoryName = "";

// Oyunu Başlatma Fonksiyonu
function startGame(categoryKey) {
    currentList = [...database[categoryKey]];
    
    // BAŞLIKLARI GÜNCELLEDİK
    const titles = {
        "islamiyet_oncesi": "İslamiyet Öncesi Türk Tarihi",
        "turk_islam": "İlk Türk-İslam Devletleri",
        "osmanli_kultur": "Osmanlı Kültür & Medeniyet",
        "osmanli_siyasi": "Osmanlı Siyasi Tarihi",   // YENİ
        "osmanli_islahat": "Osmanlı Islahatları",    // YENİ
        "inkilap_tarihi": "İnkılap Tarihi",
        "cagdas_turk": "Çağdaş Türk ve Dünya Tarihi"
    };
    
    document.getElementById('topic-title').innerText = titles[categoryKey];
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex'; // Flex yaptım ortalama için
    document.getElementById('count').innerText = currentList.length;
    document.getElementById('result-card').style.display = 'none';
}

function goBack() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block'; // Block kalsın
}

function drawPaper() {
    const resultCard = document.getElementById('result-card');
    const wordText = document.getElementById('word-text');
    const wordMeaning = document.getElementById('word-meaning');
    const meaningBtn = document.querySelector('.reveal-btn');

    if (currentList.length === 0) {
        alert("Bu konudaki tüm sorular bitti! Menüye dönülüyor.");
        goBack();
        return;
    }

    const randomIndex = Math.floor(Math.random() * currentList.length);
    const selected = currentList[randomIndex];

    wordText.innerHTML = selected.word;
    wordMeaning.innerHTML = selected.meaning;
    
    wordMeaning.style.display = 'none';
    meaningBtn.style.display = 'block';
    
    // Kartı görünür yap (CSS animasyonu çalışacak)
    resultCard.style.display = 'block';

    currentList.splice(randomIndex, 1);
    document.getElementById('count').innerText = currentList.length;
}

function showMeaning() {
    document.getElementById('word-meaning').style.display = 'block';
    document.querySelector('.reveal-btn').style.display = 'none';
}