/* ================================================================
   AVADA JAVASCRIPT BLOCK

   Paste this file's content into the JavaScript Code Block in Avada.
   The accompanying language-page.html goes in the HTML Code Block.
   ================================================================ */

(function() {
    'use strict';

    // CONFIGURATION
    var CERTIFICATION_URL_DISCOVER_HEALING = 'https://discoverhealing.com/certification/';
    var CERTIFICATION_URL_YOUNITY = 'https://younity.com';
    var IMAGE_BASE = 'https://cdn.jsdelivr.net/gh/drbradnelson/discoverhealing-language-page@main/images/';
    var YOUNITY_LOGO_URL = IMAGE_BASE + 'Younity-Logo.png';
    var CHART_ICON_URL = IMAGE_BASE + 'Emotion-Code-Chart-Icon.png';
    var CERT_BADGES = {
        emotion: IMAGE_BASE + 'Emotion-Code-Badge.png',
        body: IMAGE_BASE + 'Body-Code-Badge.png',
        belief: IMAGE_BASE + 'Belief-Code-Badge.png'
    };

    // Book cover configuration. Filenames are relative to IMAGE_BASE.
    var BOOK_COVERS = {
        english: {
            emotion: IMAGE_BASE + 'English-Emotion-Code.png',
            body: IMAGE_BASE + 'English-Body-Code.jpg',
            heart: IMAGE_BASE + 'English-Heart-Code.png'
        },
        arabic: {
            emotion: IMAGE_BASE + 'Arabic-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Arabic-Body-Code.jpg',
            heart: null
        },
        croatian: {
            emotion: IMAGE_BASE + 'Croatian-Emotion-Code.jpg',
            body: null,
            heart: null
        },
        czech: {
            emotion: IMAGE_BASE + 'Czech-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Czech-Body-Code.jpg',
            heart: null
        },
        dutch: { emotion: null, body: null, heart: null },
        french: {
            emotion: IMAGE_BASE + 'French-Emotion-Code.jpg',
            body: null,
            heart: null
        },
        german: {
            emotion: IMAGE_BASE + 'German-Emotion-Code.jpg',
            body: IMAGE_BASE + 'German-Body-Code.jpg',
            heart: IMAGE_BASE + 'German-Heart-Code.jpg'
        },
        hungarian: {
            emotion: IMAGE_BASE + 'Hungarian-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Hungarian-Body-Code.jpg',
            heart: null
        },
        italian: {
            emotion: IMAGE_BASE + 'Italian-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Italian-Body-Code.jpg',
            heart: null
        },
        japanese: {
            emotion: IMAGE_BASE + 'Japanese-Emotion-Code.jpg',
            body: null,
            heart: null
        },
        korean: { emotion: null, body: null, heart: null },
        polish: {
            emotion: IMAGE_BASE + 'Polish-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Polish-Body-Code.jpg',
            heart: IMAGE_BASE + 'Polish-Heart-Code.jpg'
        },
        portuguese: {
            emotion: IMAGE_BASE + 'Portuguese-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Portuguese-Body-Code.jpg',
            heart: null
        },
        romanian: {
            emotion: IMAGE_BASE + 'Romanian-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Romanian-Body-Code.jpg',
            heart: null
        },
        russian: { emotion: null, body: null, heart: null },
        slovak: {
            emotion: IMAGE_BASE + 'Slovak-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Slovak-Body-Code.jpg',
            heart: null
        },
        spanish: {
            emotion: null,
            body: IMAGE_BASE + 'Spanish-Body-Code.jpg',
            heart: null
        },
        swedish: {
            emotion: IMAGE_BASE + 'Swedish-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Swedish-Body-Code.jpg',
            heart: null
        },
        turkish: {
            emotion: IMAGE_BASE + 'Turkish-Emotion-Code.jpg',
            body: IMAGE_BASE + 'Turkish-Body-Code.jpg',
            heart: null
        },
        vietnamese: {
            emotion: IMAGE_BASE + 'Vietnamese-Emotion-Code.jpg',
            body: null,
            heart: null
        },
        'chinese-traditional': { emotion: null, body: null, heart: null },
        'chinese-simplified': { emotion: null, body: null, heart: null }
    };

    var languages = [
        {
            id: "english", name: "English", displayName: "English", native: "English",
            flags: ["🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺"], primaryFlag: "🇺🇸",
            books: {
                emotion: { available: true, url: "https://www.amazon.com/Emotion-Code-Bradley-Nelson/dp/1250194520", coverImage: BOOK_COVERS.english.emotion },
                body: { available: true, url: "https://www.amazon.com/Body-Code-Bradley-Nelson/dp/1250194539", coverImage: BOOK_COVERS.english.body },
                heart: { available: true, url: "#", coverImage: BOOK_COVERS.english.heart }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/the-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                belief: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=english"
        },
        {
            id: "arabic", name: "Arabic", displayName: "Arabic", native: "العربية",
            flags: ["🇸🇦", "🇦🇪", "🇪🇬"], primaryFlag: "🇸🇦",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.arabic.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.arabic.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=arabic"
        },
        {
            id: "croatian", name: "Croatian", displayName: "Croatian", native: "Hrvatski",
            flags: ["🇭🇷"], primaryFlag: "🇭🇷",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.croatian.emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=croatian"
        },
        {
            id: "czech", name: "Czech", displayName: "Czech", native: "Čeština",
            flags: ["🇨🇿"], primaryFlag: "🇨🇿",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.czech.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.czech.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/czech-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_YOUNITY, partner: "Younity" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=czech"
        },
        {
            id: "dutch", name: "Dutch", displayName: "Dutch", native: "Nederlands",
            flags: ["🇳🇱", "🇧🇪"], primaryFlag: "🇳🇱",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.dutch.emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/dutch-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_YOUNITY, partner: "Younity" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=dutch"
        },
        {
            id: "french", name: "French", displayName: "French", native: "Français",
            flags: ["🇫🇷", "🇨🇦"], primaryFlag: "🇫🇷",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.french.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.french.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/french-emotion-code-chart/" },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=french"
        },
        {
            id: "german", name: "German", displayName: "German", native: "Deutsch",
            flags: ["🇩🇪", "🇦🇹", "🇨🇭"], primaryFlag: "🇩🇪",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.german.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.german.body },
                heart: { available: true, url: "#", coverImage: BOOK_COVERS.german.heart }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/german-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                belief: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=german"
        },
        {
            id: "hungarian", name: "Hungarian", displayName: "Hungarian", native: "Magyar",
            flags: ["🇭🇺"], primaryFlag: "🇭🇺",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.hungarian.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.hungarian.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/hungarian-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_YOUNITY, partner: "Younity" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=hungarian"
        },
        {
            id: "italian", name: "Italian", displayName: "Italian", native: "Italiano",
            flags: ["🇮🇹"], primaryFlag: "🇮🇹",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.italian.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.italian.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/italian-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=italian"
        },
        {
            id: "japanese", name: "Japanese", displayName: "Japanese", native: "日本語",
            flags: ["🇯🇵"], primaryFlag: "🇯🇵",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.japanese.emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/japanese-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=japanese"
        },
        {
            id: "korean", name: "Korean", displayName: "Korean", native: "한국어",
            flags: ["🇰🇷"], primaryFlag: "🇰🇷",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.korean.emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/korean-emotion-code-chart/" },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=korean"
        },
        {
            id: "polish", name: "Polish", displayName: "Polish", native: "Polski",
            flags: ["🇵🇱"], primaryFlag: "🇵🇱",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.polish.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.polish.body },
                heart: { available: true, url: "#", coverImage: BOOK_COVERS.polish.heart }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/polish-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=polish"
        },
        {
            id: "portuguese", name: "Portuguese", displayName: "Portuguese", native: "Português",
            flags: ["🇧🇷", "🇵🇹"], primaryFlag: "🇧🇷",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.portuguese.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.portuguese.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/portuguese-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_YOUNITY, partner: "Younity" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=portuguese"
        },
        {
            id: "romanian", name: "Romanian", displayName: "Romanian", native: "Română",
            flags: ["🇷🇴"], primaryFlag: "🇷🇴",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.romanian.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.romanian.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=romanian"
        },
        {
            id: "russian", name: "Russian", displayName: "Russian", native: "Русский",
            flags: ["🇷🇺"], primaryFlag: "🇷🇺",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.russian.emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/russian-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=russian"
        },
        {
            id: "slovak", name: "Slovak", displayName: "Slovak", native: "Slovenčina",
            flags: ["🇸🇰"], primaryFlag: "🇸🇰",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.slovak.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.slovak.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=slovak"
        },
        {
            id: "spanish", name: "Spanish", displayName: "Spanish", native: "Español",
            flags: ["🇪🇸", "🇲🇽", "🇦🇷"], primaryFlag: "🇪🇸",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.spanish.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.spanish.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/spanish-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=spanish"
        },
        {
            id: "swedish", name: "Swedish", displayName: "Swedish", native: "Svenska",
            flags: ["🇸🇪"], primaryFlag: "🇸🇪",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.swedish.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.swedish.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=swedish"
        },
        {
            id: "turkish", name: "Turkish", displayName: "Turkish", native: "Türkçe",
            flags: ["🇹🇷"], primaryFlag: "🇹🇷",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.turkish.emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS.turkish.body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=turkish"
        },
        {
            id: "vietnamese", name: "Vietnamese", displayName: "Vietnamese", native: "Tiếng Việt",
            flags: ["🇻🇳"], primaryFlag: "🇻🇳",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS.vietnamese.emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: false, url: null },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=vietnamese"
        },
        {
            id: "chinese-traditional", name: "Chinese (Traditional)", displayName: "Chinese <span class='subtitle'>(Traditional)</span>", native: "繁體中文",
            flags: ["🇹🇼", "🇭🇰"], primaryFlag: "🇹🇼",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS['chinese-traditional'].emotion },
                body: { available: false, url: null, coverImage: null },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/traditional-chinese-emotion-code-chart/" },
            certifications: {
                emotion: { available: true, url: CERTIFICATION_URL_DISCOVER_HEALING, partner: "Discover Healing" },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=chinese"
        },
        {
            id: "chinese-simplified", name: "Chinese (Simplified)", displayName: "Chinese <span class='subtitle'>(Simplified)</span>", native: "简体中文",
            flags: ["🇨🇳"], primaryFlag: "🇨🇳",
            books: {
                emotion: { available: true, url: "#", coverImage: BOOK_COVERS['chinese-simplified'].emotion },
                body: { available: true, url: "#", coverImage: BOOK_COVERS['chinese-simplified'].body },
                heart: { available: false, url: null, coverImage: null }
            },
            emotionCodeChart: { available: true, url: "https://discoverhealing.com/simplified-chinese-emotion-code-chart/" },
            certifications: {
                emotion: { available: false, url: null, partner: null },
                body: { available: false, url: null, partner: null },
                belief: { available: false, url: null, partner: null }
            },
            practitionerUrl: "https://discoverhealing.com/practitioners?lang=chinese"
        }
    ];

    languages.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    var bookNames = {
        emotion: "Emotion Code",
        body: "Body Code",
        heart: "Heart Code"
    };

    var certNames = {
        emotion: "Emotion",
        body: "Body",
        belief: "Belief"
    };

    function renderSidebar() {
        var list = document.getElementById('languageList');
        if (!list) return;

        var html = '';

        for (var i = 0; i < languages.length; i++) {
            var lang = languages[i];
            html += '<li class="language-list-item">' +
                '<a href="#' + lang.id + '" data-lang="' + lang.id + '">' +
                '<span class="flag">' + lang.primaryFlag + '</span>' +
                '<span>' + lang.name + '</span>' +
                '</a></li>';
        }

        list.innerHTML = html;

        var links = document.querySelectorAll('.language-list-item a');
        for (var k = 0; k < links.length; k++) {
            links[k].addEventListener('click', function(e) {
                e.preventDefault();
                var langId = this.getAttribute('data-lang');
                var card = document.getElementById(langId);
                if (!card) return;

                var allLinks = document.querySelectorAll('.language-list-item a');
                for (var j = 0; j < allLinks.length; j++) {
                    allLinks[j].classList.remove('active');
                }
                this.classList.add('active');

                var allCards = document.querySelectorAll('.language-card');
                for (var m = 0; m < allCards.length; m++) {
                    allCards[m].classList.remove('highlighted');
                }
                card.classList.add('highlighted');

                try {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } catch (err) {
                    card.scrollIntoView(true);
                }

                setTimeout(function() {
                    card.classList.remove('highlighted');
                }, 2000);
            });
        }
    }

    function renderBookCover(type, book) {
        if (book.coverImage) {
            return '<img src="' + book.coverImage + '" alt="' + bookNames[type] + '" class="book-cover-image" />';
        } else {
            return '<div class="book-placeholder">' +
                '<div class="book-icon">📖</div>' +
                '<div class="book-title">' + bookNames[type] + '</div>' +
                '</div>';
        }
    }

    function renderLanguageCard(lang) {
        var anyCertsAvailable = false;
        var isYounity = false;

        var certKeys = Object.keys(lang.certifications);
        for (var i = 0; i < certKeys.length; i++) {
            var cert = lang.certifications[certKeys[i]];
            if (cert.available) {
                anyCertsAvailable = true;
                if (cert.partner === "Younity") {
                    isYounity = true;
                }
            }
        }

        var certUrl = isYounity ? CERTIFICATION_URL_YOUNITY : CERTIFICATION_URL_DISCOVER_HEALING;

        var booksHtml = '';
        var bookKeys = Object.keys(lang.books);
        for (var b = 0; b < bookKeys.length; b++) {
            var type = bookKeys[b];
            var book = lang.books[type];
            var unavailableClass = !book.available ? 'unavailable' : '';
            var onclickAttr = book.available ? 'onclick="window.open(\'' + book.url + '\', \'_blank\')"' : '';
            var badge = book.available ? '<div class="book-badge">Buy</div>' : '';

            booksHtml += '<div class="book-item ' + type + ' ' + unavailableClass + '" ' + onclickAttr + '>' +
                badge + renderBookCover(type, book) + '</div>';
        }

        var chartAvailable = lang.emotionCodeChart && lang.emotionCodeChart.available;
        var chartClass = chartAvailable ? '' : 'unavailable';
        var chartOnclick = chartAvailable ? 'onclick="window.open(\'' + lang.emotionCodeChart.url + '\', \'_blank\')"' : '';
        var chartSubtitle = chartAvailable ? 'Download or view online' : 'Coming soon';
        var chartHtml = '<div class="section"><div class="chart-section">' +
            '<button class="chart-download-btn ' + chartClass + '" ' + chartOnclick + '>' +
            '<img src="' + CHART_ICON_URL + '" alt="Emotion Code Chart" class="chart-icon" />' +
            '<div class="chart-text">' +
            '<div class="chart-title">The Emotion Code Chart</div>' +
            '<div class="chart-subtitle">' + chartSubtitle + '</div>' +
            '</div></button></div></div>';

        var certBadgesHtml = '';
        var certKeys2 = Object.keys(lang.certifications);
        for (var c = 0; c < certKeys2.length; c++) {
            var ctype = certKeys2[c];
            var cert2 = lang.certifications[ctype];
            var unavailableClass2 = !cert2.available ? 'unavailable' : '';
            var onclickAttr2 = cert2.available ? 'onclick="window.open(\'' + cert2.url + '\', \'_blank\')"' : '';
            var title = cert2.available ? certNames[ctype] + ' Code - ' + cert2.partner : 'Not yet available';
            var younityBadge = (cert2.available && cert2.partner === 'Younity') ?
                '<div class="younity-badge"><img src="' + YOUNITY_LOGO_URL + '" alt="Younity" /></div>' : '';

            certBadgesHtml += '<div class="cert-badge ' + ctype + ' ' + unavailableClass2 + '" ' +
                onclickAttr2 + ' title="' + title + '">' + younityBadge +
                '<img src="' + CERT_BADGES[ctype] + '" alt="' + certNames[ctype] + ' Code Badge" class="cert-badge-image" />' +
                '</div>';
        }

        var certBtnClass = !anyCertsAvailable ? 'disabled' : '';
        if (isYounity) certBtnClass += ' younity';
        var certBtnDisabled = !anyCertsAvailable ? 'disabled' : '';
        var certBtnOnclick = anyCertsAvailable ? 'onclick="window.open(\'' + certUrl + '\', \'_blank\')"' : '';
        var certBtnText = anyCertsAvailable ?
            '🎓 Get Certified ' + (isYounity ? 'via Younity' : '') :
            'Certifications Coming Soon';

        return '<div class="language-card" id="' + lang.id + '">' +
            '<div class="language-header">' +
            '<div class="language-info">' +
            '<div class="language-name">' + lang.displayName + '</div>' +
            '<div class="language-native">' + lang.native + '</div>' +
            '</div>' +
            '<div class="flag-group">' + lang.flags.join(' ') + '</div>' +
            '</div>' +
            '<div class="section">' +
            '<div class="section-title">📚 Available Books</div>' +
            '<div class="books-grid">' + booksHtml + '</div>' +
            '</div>' +
            chartHtml +
            '<div class="section">' +
            '<div class="section-title">🎓 Available Certifications</div>' +
            '<div class="certifications-section">' +
            '<div class="cert-badges">' + certBadgesHtml + '</div>' +
            '<button class="cert-purchase-btn ' + certBtnClass + '" ' + certBtnDisabled + ' ' + certBtnOnclick + '>' +
            certBtnText + '</button></div></div>' +
            '<a href="' + lang.practitionerUrl + '" class="practitioner-link">🔍 Find Practitioners</a>' +
            '</div>';
    }

    function renderCards(filteredLanguages) {
        var grid = document.getElementById('languageGrid');
        var emptyState = document.getElementById('emptyState');
        if (!grid || !emptyState) return;

        if (filteredLanguages.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        var html = '';
        for (var i = 0; i < filteredLanguages.length; i++) {
            html += renderLanguageCard(filteredLanguages[i]);
        }
        grid.innerHTML = html;
    }

    function bindSearch() {
        var searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        searchInput.addEventListener('input', function(e) {
            var search = (e.target && e.target.value ? e.target.value : '').toLowerCase();
            var filtered = [];

            for (var i = 0; i < languages.length; i++) {
                var lang = languages[i];
                if (lang.name.toLowerCase().indexOf(search) !== -1 ||
                    lang.native.toLowerCase().indexOf(search) !== -1) {
                    filtered.push(lang);
                }
            }

            renderCards(filtered);
        });
    }

    function init() {
        renderSidebar();
        renderCards(languages);
        bindSearch();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
