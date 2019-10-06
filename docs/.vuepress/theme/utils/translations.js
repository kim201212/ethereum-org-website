// the lang (e.g. 'en-US') is globally accessible in components via `this.$lang`
// it should be specified in the front matter of every markdown page:
// https://vuepress.vuejs.org/guide/markdown.html#front-matter
const translations = {
  'en-US': {
    path: '/',
    name: 'English',
    'english-name': 'English',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Read about the new artwork!',
    'link-text-more': '→  More',
    'page-home': 'Ethereum',
    'page-home-title': 'Ethereum is a global, open-source platform for decentralized applications.',
    'page-home-subtitle': 'On Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world.',
    'page-home-section-beginners-title': 'Beginners',
    'page-home-section-beginners-item-one': 'Completely new to Ethereum?',
    'page-home-section-beginners-item-two': 'What is Ethereum?',
    'page-home-section-beginners-item-three': 'Why should I care?',
    'page-home-section-use-title': 'Use',
    'page-home-section-use-item-one': 'What can I do with Ethereum today?',
    'page-home-section-use-item-one-link': '/use/#_1-use-an-application-built-on-ethereum',
    'page-home-section-use-item-two': 'How do I get Ether?',
    'page-home-section-use-item-two-link': '/use/#_2-what-is-eth-and-how-do-i-get-it',
    'page-home-section-use-item-three': 'What\'s a wallet?',
    'page-home-section-use-item-three-link': '/use/#_3-what-is-a-wallet-and-which-one-should-i-use',
    'page-home-section-learn-title': 'Learn',
    'page-home-section-learn-item-one': 'Beginner resources',
    'page-home-section-learn-item-one-link': '/learn/#ethereum-basics',
    'page-home-section-learn-item-two': 'How Ethereum works',
    'page-home-section-learn-item-two-link': '/learn/#how-ethereum-works',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/learn/#eth-2-0',
    'page-home-section-developers-title': 'Developers',
    'page-home-section-developers-item-one': 'Getting started guides',
    'page-home-section-developers-item-one-link': '/developers/#getting-started',
    'page-home-section-developers-item-two': 'Learn to program smart contracts',
    'page-home-section-developers-item-two-link': '/developers/#smart-contract-languages',
    'page-home-section-developers-item-three': 'Find the latest developer tools',
    'page-home-section-developers-item-three-link': '/developers/#developer-tools',
    'page-home-section-enterprise-title': 'Enterprise',
    'page-home-section-enterprise-item-one': 'Why Enterprise Ethereum?',
    'page-home-section-enterprise-item-one-link': '/enterprise/#why-enterprise-ethereum',
    'page-home-section-enterprise-item-two': 'Enterprise Features',
    'page-home-section-enterprise-item-two-link': '/enterprise/#enterprise-features',
    'page-home-section-enterprise-item-three': 'Enterprise Developer Community',
    'page-home-section-enterprise-item-three-link': '/enterprise/#enterprise-developer-community',
    'page-beginners': 'Beginners',
    'page-use': 'Use',
    'page-learn': 'Learn',
    'page-developers': 'Developers'
  },
  'de-DE': {
    path: '/de/',
    name: 'Deutsch',
    'english-name': 'German',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Lesen Sie mehr über das neue Kunstwerk!',
    'link-text-more': '→  Mehr',
    'page-home': "Startseite",
    'page-home-title': "Ethereum ist eine globale Open-Source-Plattform für dezentralisierte Anwendungen.",
    'page-home-subtitle': "Auf Ethereum kannst du Code schreiben, der digitale Werte verwaltet, der exakt wie programmiert ausgeführt wird und der von überall auf der Welt zugänglich ist.",
    'page-home-section-beginners-title': "Anfänger",
    'page-home-section-beginners-item-one': "Neu bei Ethereum?",
    'page-home-section-beginners-item-two': "Was ist Ethereum?",
    'page-home-section-beginners-item-three': "Welchen Nutzen bringt es mir?",
    'page-home-section-use-title': "Anwendung",
    'page-home-section-use-item-one': "Was kann ich schon heute mit Ethereum tun?",
    'page-home-section-use-item-one-link': "/de/use/#_1-eine-auf-ethereum-basierende-anwendung-verwenden",
    'page-home-section-use-item-two': "Wie komme ich an Ether?",
    'page-home-section-use-item-two-link': "/de/use/#_2-was-ist-eth-und-wie-bekomme-ich-es",
    'page-home-section-use-item-three': "Was ist eine Wallet?",
    'page-home-section-use-item-three-link': "/de/use/#_3-was-ist-eine-wallet-und-welche-sollte-ich-verwenden",
    'page-home-section-learn-title': "Lernen",
    'page-home-section-learn-item-one': "Die Ethereum-Grundlagen",
    'page-home-section-learn-item-one-link': "/de/learn/#ethereum-grundlagen",
    'page-home-section-learn-item-two': "Wie Ethereum funktioniert",
    'page-home-section-learn-item-two-link': "/de/learn/#wie-ethereum-funktioniert",
    'page-home-section-learn-item-three': "ETH 2.0",
    'page-home-section-learn-item-three-link': "/de/learn/#eth-2-0",
    'page-home-section-developers-title': "Entwickler",
    'page-home-section-developers-item-one': "Erste Schritte",
    'page-home-section-developers-item-one-link': "/de/developers/#erste-schritte",
    'page-home-section-developers-item-two': "Lerne Smart Contracts zu programmieren",
    'page-home-section-developers-item-two-link': "/de/developers/#smart-contract-sprachen",
    'page-home-section-developers-item-three': "Finde die neuesten Entwickler-Tools",
    'page-home-section-developers-item-three-link': "/de/developers/#entwicklertools",
    'page-home-section-enterprise-title': "",
    'page-home-section-enterprise-item-one': "",
    'page-home-section-enterprise-item-one-link': "",
    'page-home-section-enterprise-item-two': "",
    'page-home-section-enterprise-item-two-link': "",
    'page-home-section-enterprise-item-three': "",
    'page-home-section-enterprise-item-three-link': "",
    'page-beginners': "Anfänger",
    'page-use': "Anwendung",
    'page-learn': "Lernen",
    'page-developers': "Entwickler",
  },
  'el-GR': {
    path: '/el/',
    name: 'Ελληνικά',
    'english-name': 'Greek',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Διαβάστε για το νέο έργο τέχνης!',
    'link-text-more': '→  Περισσότερο',
    'page-home': 'Αρχική',
    'page-home-title': 'Το Ethereum είναι μια παγκόσμια πλατφόρμα ανοικτού κώδικα για αποκεντρωμένες εφαρμογές.’',
    'page-home-subtitle': 'Στο Ethereum, μπορείτε να γράψετε κώδικα ο οποίος ελέγχει ψηφιακές αξίες, τρέχει ακριβώς όπως έχει προγραμματιστεί και είναι προσβάσιμος οπουδήποτε στον κόσμο.',
    'page-home-section-beginners-title': 'Αρχάριοι',
    'page-home-section-beginners-item-one': 'Εντελώς καινούργιοι στο Ethereum;',
    'page-home-section-beginners-item-two': 'Τι είναι το Ethereum;',
    'page-home-section-beginners-item-three': 'Γιατί να ενδιαφερθώ;',
    'page-home-section-use-title': 'Χρήση',
    'page-home-section-use-item-one': 'Τι μπορώ να κάνω σήμερα με το Ethereum;',
    'page-home-section-use-item-one-link': '/el/use/#_1-χpησιμοποιήστε-μια-εφαpμογή-που-βασίζεται-στο-ethereum',
    'page-home-section-use-item-two': 'Πώς μπορώ να αποκτήσω Ether;',
    'page-home-section-use-item-two-link': '/el/use/#_2-τι-είναι-το-eth-και-πώς-μποpώ-να-το-αποκτήσω',
    'page-home-section-use-item-three': 'Τι είναι το πορτοφόλι;',
    'page-home-section-use-item-three-link': '/el/use/#_3-τι-είναι-το-ποpτοφόλι-και-ποιο-πpέπει-να-χpησιμοποιήσω',
    'page-home-section-learn-title': 'Μάθηση',
    'page-home-section-learn-item-one': 'Βοηθήματα για αρχάριους',
    'page-home-section-learn-item-one-link': '/el/learn/#τα-βασικά-του-ethereum',
    'page-home-section-learn-item-two': 'Πώς λειτουργεί το Ethereum',
    'page-home-section-learn-item-two-link': '/el/learn/#πώς-λειτουpγεί-το-ethereum',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/el/learn/#eth-2-0',
    'page-home-section-developers-title': 'Προγραμματιστές',
    'page-home-section-developers-item-one': 'Οδηγός έναρξης',
    'page-home-section-developers-item-one-link': '/el/developers/#ξεκινώντας',
    'page-home-section-developers-item-two': 'Μάθετε να προγραμματίζετε τα Smart Contracts',
    'page-home-section-developers-item-two-link': '/el/developers/#γλώσσες-πpογpαμματισμού-smart-contract',
    'page-home-section-developers-item-three': 'Βρείτε τα τελευταία εργαλεία προγραμματισμού',
    'page-home-section-developers-item-three-link': '/el/developers/#εpγαλεία-πpογpαμματιστών',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': 'Αρχάριοι',
    'page-use': 'Χρήση',
    'page-learn': 'Μάθηση',
    'page-developers': 'Προγραμματιστές',
  },
  'es-ES': {
    path: '/es/',
    name: 'Español',
    'english-name': 'Spanish',
    ethereum: 'Ethereum',
    'link-text-artwork': '¡Lea sobre la nueva obra de arte!',
    'link-text-more': '→  Más',
    'page-home': 'Inicio',
    'page-home-title': 'Ethereum es una plataforma global de código abierto para aplicaciones descentralizadas.',
    'page-home-subtitle': 'En Ethereum, puedes escribir código que controle valor digital, que se ejecute exactamente como fue programado y que sea accesible desde cualquier parte del mundo.',
    'page-home-section-beginners-title': 'Principiantes',
    'page-home-section-beginners-item-one': '¿Completamente nuevo en Ethereum?',
    'page-home-section-beginners-item-two': '¿Qué es Ethereum?',
    'page-home-section-beginners-item-three': '¿Por qué me debería interesar?',
    'page-home-section-use-title': 'Uso',
    'page-home-section-use-item-one': '¿Qué puedo hacer con Ethereum hoy en día?',
    'page-home-section-use-item-one-link': '/es/use/#_1-usa-una-aplicacion-construida-en-ethereum',
    'page-home-section-use-item-two': '¿Cómo puedo obtener Ether?',
    'page-home-section-use-item-two-link': '/es/use/#_2-¿que-es-eth-y-como-lo-obtengo',
    'page-home-section-use-item-three': '¿Qué es una billetera?',
    'page-home-section-use-item-three-link': '/es/use/#_3-¿que-es-una-billetera-y-cual-debo-utilizar',
    'page-home-section-learn-title': 'Aprender',
    'page-home-section-learn-item-one': 'Recursos para principiantes',
    'page-home-section-learn-item-one-link': '/es/learn/#conceptos-basicos-de-ethereum',
    'page-home-section-learn-item-two': 'Cómo funciona Ethereum',
    'page-home-section-learn-item-two-link': '/es/learn/#como-funciona-ethereum',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/es/learn/#eth-2-0',
    'page-home-section-developers-title': 'Desarrolladores',
    'page-home-section-developers-item-one': 'Guías de inicio',
    'page-home-section-developers-item-one-link': '/es/developers/#introduccion',
    'page-home-section-developers-item-two': 'Aprende a programar contratos inteligentes',
    'page-home-section-developers-item-two-link': '/es/developers/#lenguajes-para-contratos-inteligentes',
    'page-home-section-developers-item-three': 'Encuentra las últimas herramientas para desarrolladores',
    'page-home-section-developers-item-three-link': '/es/developers/#herramientas-de-desarrollo',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': 'Principiantes',
    'page-use': 'Uso',
    'page-learn': 'Aprender',
    'page-developers': 'Desarrolladores',
  },
  'fr-FR': {
    path: '/fr/',
    name: 'Français',
    'english-name': 'French',
    ethereum: 'Ethereum',
    'link-text-artwork': "Lisez à propos de la nouvelle œuvre d'art !",
    'link-text-more': '→  Plus',
    'page-home': 'Accueil',
    'page-home-title': 'Ethereum est une plate-forme globale et open-source pour des applications décentralisées.',
    'page-home-subtitle': "Sur Ethereum, vous pouvez écrire du code qui contrôle un actif numérique, qui s'exécute exactement comme il a été programmé et qui est accessible partout dans le monde.",
    'page-home-section-beginners-title': 'Débutants',
    'page-home-section-beginners-item-one': "Vous ne connaissez rien à Ethereum ?",
    'page-home-section-beginners-item-two': "Qu'est-ce qu'Ethereum ?",
    'page-home-section-beginners-item-three': "En quoi est-ce que ça me concerne ?",
    'page-home-section-use-title': "Utilisation",
    'page-home-section-use-item-one': "Que puis-je faire avec Ethereum aujourd'hui ?",
    'page-home-section-use-item-one-link': "/fr/use/#_1-utiliser-une-application-fondee-sur-ethereum",
    'page-home-section-use-item-two': "Comment obtenir de l'Ether ?",
    'page-home-section-use-item-two-link': "/fr/use/#_2-qu-est-ce-que-l-eth-et-comment-puis-je-en-obtenir",
    'page-home-section-use-item-three': "Qu'est-ce qu'un portefeuille (wallet) ?",
    'page-home-section-use-item-three-link': "/fr/use/#_3-qu-est-ce-qu-un-portefeuille-et-lequel-dois-je-utiliser",
    'page-home-section-learn-title': "Apprendre",
    'page-home-section-learn-item-one': "Ressources pour débutants",
    'page-home-section-learn-item-one-link': "/fr/learn/#les-bases-d-ethereum",
    'page-home-section-learn-item-two': "Comment fonctionne Ethereum",
    'page-home-section-learn-item-two-link': "/fr/learn/#le-fonctionnement-d-ethereum",
    'page-home-section-learn-item-three': "ETH 2.0",
    'page-home-section-learn-item-three-link': "/fr/learn/#eth-2-0",
    'page-home-section-developers-title': "Développeurs",
    'page-home-section-developers-item-one': "Guides de démarrage",
    'page-home-section-developers-item-one-link': "/fr/developers/#premiers-pas",
    'page-home-section-developers-item-two': "Apprendre à programmer des smart contracts",
    'page-home-section-developers-item-two-link': "/fr/developers/#langages-des-smart-contracts",
    'page-home-section-developers-item-three': "Trouver les derniers outils de développement",
    'page-home-section-developers-item-three-link': "/fr/developers/#outils-de-developpement",
    'page-home-section-enterprise-title': "",
    'page-home-section-enterprise-item-one': "",
    'page-home-section-enterprise-item-one-link': "",
    'page-home-section-enterprise-item-two': "",
    'page-home-section-enterprise-item-two-link': "",
    'page-home-section-enterprise-item-three': "",
    'page-home-section-enterprise-item-three-link': "",
    'page-beginners': "Débutants",
    'page-use': "Utiliser",
    'page-learn': "Apprendre",
    'page-developers': "Développeurs"
  },
  'it-IT': {
    path: '/it/',
    name: 'Italiano',
    'english-name': 'Italian',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Approfondisci sull\'elaborato artistico!',
    'link-text-more': '→  Di Più',
    'page-home': 'Home',
    'page-home-title': 'Ethereum è una piattaforma open source globale per applicazioni decentralizzate.',
    'page-home-subtitle': 'Su Ethereum, è possibile scrivere codice che controlla il valore digitale, opera esattamente come programmato ed è accessibile ovunque nel mondo.',
    'page-home-section-beginners-title': 'Principianti',
    'page-home-section-beginners-item-one': 'Non hai mai usato Ethereum?',
    'page-home-section-beginners-item-two': 'Cos\'è Ethereum?',
    'page-home-section-beginners-item-three': 'Perché dovrebbe interessarmi?',
    'page-home-section-use-title': 'Uso',
    'page-home-section-use-item-one': 'Cosa posso fare con Ethereum oggi?',
    'page-home-section-use-item-one-link': '/it/use/#_1-uso-di-un-applicazione-creata-con-ethereum',
    'page-home-section-use-item-two': 'Come faccio a ottenere Ether?',
    'page-home-section-use-item-two-link': '/it/use/#_2-cosa-sono-gli-eth-e-come-si-ottengono',
    'page-home-section-use-item-three': 'Cos\'è un portafoglio?',
    'page-home-section-use-item-three-link': '/it/use/#_3-cos-e-un-portafoglio-e-quale-devo-usare',
    'page-home-section-learn-title': 'Formazione',
    'page-home-section-learn-item-one': 'Risorse per principianti',
    'page-home-section-learn-item-one-link': '/it/learn/#principi-fondamentali-di-ethereum',
    'page-home-section-learn-item-two': 'Come funziona Ethereum',
    'page-home-section-learn-item-two-link': '/it/learn/#come-funziona-ethereum',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/it/learn/#eth-2-0',
    'page-home-section-developers-title': 'Sviluppatori',
    'page-home-section-developers-item-one': 'Guide introduttive',
    'page-home-section-developers-item-one-link': '/it/developers/#per-iniziare',
    'page-home-section-developers-item-two': 'Impara a programmare gli Smart Contract',
    'page-home-section-developers-item-two-link': '/it/developers/#linguaggi-per-gli-smart-contract',
    'page-home-section-developers-item-three': 'Scopri gli ultimi strumenti per sviluppatori',
    'page-home-section-developers-item-three-link': '/it/developers/#strumenti-di-sviluppo',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': 'Principianti',
    'page-use': 'Uso',
    'page-learn': 'Formazione',
    'page-developers': 'Sviluppatori',
  },
  'ja-JP': {
    path: '/ja/',
    name: '日本語',
    'english-name': 'Japanese',
    ethereum: 'イーサリアム',
    'link-text-artwork': '新しいアートワークについて読む',
    'link-text-more': '→  もっと',
    'page-home': 'ホーム',
    'page-home-title': 'イーサリアムは、分散型アプリケーションのためのグローバルでオープンソースなプラットフォームです。',
    'page-home-subtitle': 'イーサリアム上で、書かれたコードは、世界中のどこからでもアクセスが可能であり、プログラムした通りに正確に動作し、デジタルな価値をコントロールすることを可能にします。',
    'page-home-section-beginners-title': '初心者',
    'page-home-section-beginners-item-one': 'イーサリアムは初めてですか？',
    'page-home-section-beginners-item-two': 'イーサリアムとは？',
    'page-home-section-beginners-item-three': 'なぜ重要なのですか？',
    'page-home-section-use-title': '使う',
    'page-home-section-use-item-one': 'イーサリアムで何ができるか？',
    'page-home-section-use-item-one-link': '/ja/use/#_1-イーサリアム上のアプリケーションを使う',
    'page-home-section-use-item-two': 'Etherを手に入れるには？',
    'page-home-section-use-item-two-link': '/ja/use/#_2-ethとは？どうやって手に入れるの？',
    'page-home-section-use-item-three': 'ウォレットとは？',
    'page-home-section-use-item-three-link': '/ja/use/#_3-ウォレットとは？どれを使えばいいの？',
    'page-home-section-learn-title': '学ぶ',
    'page-home-section-learn-item-one': '初心者向け資料',
    'page-home-section-learn-item-one-link': '/ja/learn/#イーサリアムの基礎',
    'page-home-section-learn-item-two': 'イーサリアムの仕組み',
    'page-home-section-learn-item-two-link': '/ja/learn/#イーサリアムの仕組み',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/ja/learn/#eth-2-0',
    'page-home-section-developers-title': 'ディベロッパー',
    'page-home-section-developers-item-one': '入門ガイド',
    'page-home-section-developers-item-one-link': '/ja/developers/#はじめに',
    'page-home-section-developers-item-two': 'スマートコントラクトのプログラミングを学ぶ',
    'page-home-section-developers-item-two-link': '/ja/developers/#スマートコントラクト言語',
    'page-home-section-developers-item-three': '最新の開発者ツールを見つける',
    'page-home-section-developers-item-three-link': '/ja/developers/#開発者ツール',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': '初心者',
    'page-use': 'イーサリアムを使う',
    'page-learn': 'イーサリアムについて学ぶ',
    'page-developers': 'デベロッパー',
  },
  'ko-KR': {
    path: '/ko/',
    name: '한국어',
    'english-name': 'Korean',
    ethereum: '이더리움',
    'link-text-artwork': '새로운 미디어 아트에 대해 읽어보세요!',
    'link-text-more': '→  더 알아보기',
    'page-home': '이더리움이란',
    'page-home-title': '이더리움은 탈중앙화된 애플리케이션을 위한 글로벌 오픈 소스 플랫폼입니다.',
    'page-home-subtitle': '여러분은 이더리움을 통해 디지털화된 가치를 제어하고, 프로그래밍한 대로 작동되며, 전 세계 어디에서든 동일하게 이용할 수 있는 코드를 작성할 수 있습니다.',
    'page-home-section-beginners-title': '입문자',
    'page-home-section-beginners-item-one': '이더리움을 처음 접하시나요?',
    'page-home-section-beginners-item-two': '이더리움이란?',
    'page-home-section-beginners-item-three': '왜 중요한가요?',
    'page-home-section-use-title': '사용하기',
    'page-home-section-use-item-one': '오늘날 이더리움으로 어떤 것을 할 수 있을까요?',
    'page-home-section-use-item-one-link': '/ko/use/#_1-이더리움-디앱-사용하기',
    'page-home-section-use-item-two': '어떻게 이더를 얻을 수 있나요?',
    'page-home-section-use-item-two-link': '/ko/use/#_2-이더-eth-는-무엇이며-어떻게-획득할-수-있을까요',
    'page-home-section-use-item-three': '지갑이란 무엇인가요?',
    'page-home-section-use-item-three-link': '/ko/use/#_3-지갑은-무엇이며-어떠한-지갑을-사용해야-할까요',
    'page-home-section-learn-title': '배우기',
    'page-home-section-learn-item-one': '입문자를 위한 참고자료',
    'page-home-section-learn-item-one-link': '/ko/learn/#이더리움-기초',
    'page-home-section-learn-item-two': '이더리움은 어떻게 작동하나요?',
    'page-home-section-learn-item-two-link': '/ko/learn/#이더리움-작동방식',
    'page-home-section-learn-item-three': '이더리움 2.0',
    'page-home-section-learn-item-three-link': '/ko/learn/#이더리움-2-0',
    'page-home-section-developers-title': '개발자',
    'page-home-section-developers-item-one': '시작하기',
    'page-home-section-developers-item-one-link': '/ko/developers/#시작하면서',
    'page-home-section-developers-item-two': '스마트 컨트랙트 프로그래밍 배우기',
    'page-home-section-developers-item-two-link': '/ko/developers/#스마트-컨트랙트-언어들',
    'page-home-section-developers-item-three': '최신 개발자 도구 알아보기',
    'page-home-section-developers-item-three-link': '/ko/developers/#개발자-도구',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': '입문자',
    'page-use': '사용법',
    'page-learn': '배우기',
    'page-developers': '개발자 가이드'
  },
  'sk-SK': {
    path: '/sk/',
    name: 'Slovenský',
    'english-name': 'Slovak',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Prečítajte si o novej kresbe!',
    'link-text-more': '→  Viac',
    'page-home': 'Domov',
    'page-home-title': 'Ethereum je celosvetová open-source platforma pre decentralizované aplikácie.',
    'page-home-subtitle': 'Na Ethereu môžete napísať kód, ktorý bude riadiť digitálne hodnoty, bežať presne tak, ako bol naprogramovaný a bude prístupný odkiaľkoľvek na svete.',
    'page-home-section-beginners-title': 'Pre začiatočníkov',
    'page-home-section-beginners-item-one': 'Úplný nováčik v Ethereu?',
    'page-home-section-beginners-item-two': 'Čo je to Ethereum?',
    'page-home-section-beginners-item-three': 'Čím je zaujímavý?',
    'page-home-section-use-title': 'Používanie',
    'page-home-section-use-item-one': 'Čo môžem v Ethereu robiť?',
    'page-home-section-use-item-one-link': '/sk/use/#_1-pouzivanie-aplikacii-vytvorenych-na-ethereu',
    'page-home-section-use-item-two': 'Ako získam Ethereá?',
    'page-home-section-use-item-two-link': '/sk/use/#_2-co-je-eth-a-ako-ho-viem-ziskat',
    'page-home-section-use-item-three': 'Čo je to peňaženka?',
    'page-home-section-use-item-three-link': '/sk/use/#_3-co-je-penazenka-a-ktoru-mam-pouzit',
    'page-home-section-learn-title': 'Základné informácie',
    'page-home-section-learn-item-one': 'Návody pre začiatočníkov',
    'page-home-section-learn-item-one-link': '/sk/learn/#zakladne-informacie-ethereu',
    'page-home-section-learn-item-two': 'Ako funguje Ethereum',
    'page-home-section-learn-item-two-link': '/sk/learn/#ako-funguje-ethereum',
    'page-home-section-learn-item-three': 'Ethereum 2.0',
    'page-home-section-learn-item-three-link': '/sk/learn/#ethereum-2-0',
    'page-home-section-developers-title': 'Pre vývojárov',
    'page-home-section-developers-item-one': 'Ako začať',
    'page-home-section-developers-item-one-link': '/sk/developers/#zaciname',
    'page-home-section-developers-item-two': 'Ako vytvárať smart kontrakty',
    'page-home-section-developers-item-two-link': '/sk/developers/#programovacie-jazyky-pre-vyvoj-smart-kontraktov',
    'page-home-section-developers-item-three': 'Najnovšie nástroje pre vývojárov',
    'page-home-section-developers-item-three-link': '/sk/developers/#nastroje-pre-vyvojarov',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': 'Pre začiatočníkov',
    'page-use': 'Používanie',
    'page-learn': 'Základné informácie',
    'page-developers': 'Pre vývojárov',
  },
  'ru-RU': {
    path: '/ru/',
    name: 'Pусский',
    'english-name': 'Russian',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Читайте о новых работах!',
    'link-text-more': '→  Больше',
    'page-home': 'Заглавная',
    'page-home-title': 'Ethereum – глобальная платформа с открытым исходным кодом для децентрализованных приложений.',
    'page-home-subtitle': 'С помощью Ethereum вы сможете писать доступные всему миру программы для управления цифровыми данными, работающие именно так, как задумано.',
    'page-home-section-beginners-title': 'Начинающим',
    'page-home-section-beginners-item-one': 'С чего начать изучение Ethereum?',
    'page-home-section-beginners-item-two': 'Что такое Ethereum?',
    'page-home-section-beginners-item-three': 'Чем он может быть полезен?',
    'page-home-section-use-title': 'Применение',
    'page-home-section-use-item-one': 'Что можно сделать с помощью Ethereum уже сегодня?',
    'page-home-section-use-item-one-link': '/ru/use/#_1-испоnьзование-приnожения-построенного-на-ethereum',
    'page-home-section-use-item-two': 'Как можно получить Ether?',
    'page-home-section-use-item-two-link': '/ru/use/#_2-что-такое-eth-и-как-я-могу-его-поnучить',
    'page-home-section-use-item-three': 'Что такое кошелек?',
    'page-home-section-use-item-three-link': '/ru/use/#_3-что-такое-кошеnек-и-какой-кошеnек-я-доnжен-испоnьзовать',
    'page-home-section-learn-title': 'Обучение',
    'page-home-section-learn-item-one': 'Полезная информация для начинающих',
    'page-home-section-learn-item-one-link': '/ru/learn/#основы-ethereum',
    'page-home-section-learn-item-two': 'Как работает Ethereum',
    'page-home-section-learn-item-two-link': '/ru/learn/#как-работает-ethereum',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/ru/learn/#eth-2-0',
    'page-home-section-developers-title': 'Разработчикам',
    'page-home-section-developers-item-one': 'Руководства по началу работы',
    'page-home-section-developers-item-one-link': '/ru/developers/#приступая-к-работе',
    'page-home-section-developers-item-two': 'Обучение программированию умных контрактов',
    'page-home-section-developers-item-two-link': '/ru/developers/#языки-умных-контрактов',
    'page-home-section-developers-item-three': 'Актуальные инструменты для разработчиков',
    'page-home-section-developers-item-three-link': '/ru/developers/#инструменты-дnя-разработчиков',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': 'Начинающим',
    'page-use': 'Применение',
    'page-learn': 'Обучение',
    'page-developers': 'Разработчикам',
  },
  'zh-CN': {
    path: '/zh/',
    name: '简体中文',
    'english-name': 'Simplified Chinese',
    ethereum: '以太坊',
    'link-text-artwork': '阅读有关新艺术品的信息',
    'link-text-more': '→  更多',
    'page-home': '首页',
    'page-home-title': '以太坊是一个为去中心化应用（DApp）而生的全球开源平台。',
    'page-home-subtitle': '在以太坊上，你可以通过编写代码管理数字资产、运行程序，更重要的是，这一切都不受地域限制。',
    'page-home-section-beginners-title': '初学者',
    'page-home-section-beginners-item-one': '初识以太坊',
    'page-home-section-beginners-item-two': '以太坊简介',
    'page-home-section-beginners-item-three': '以太坊的意义',
    'page-home-section-use-title': '使用',
    'page-home-section-use-item-one': '我能用以太坊做什么',
    'page-home-section-use-item-one-link': '/zh/use/#_1-이더리움-디앱-사용하기',
    'page-home-section-use-item-two': '如何获得 ETH',
    'page-home-section-use-item-two-link': '/zh/use/#_2-什么是-eth，以及如何获得？',
    'page-home-section-use-item-three': '什么是钱包？',
    'page-home-section-use-item-three-link': '/zh/use/#_3-什么是钱包，我应该如何选择合适的钱包？',
    'page-home-section-learn-title': '学习',
    'page-home-section-learn-item-one': '初学者资源',
    'page-home-section-learn-item-one-link': '/zh/learn/#以太坊入门',
    'page-home-section-learn-item-two': '以太坊如何工作',
    'page-home-section-learn-item-two-link': '/zh/learn/#以太坊如何运作',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/zh/learn/#eth-2-0',
    'page-home-section-developers-title': '开发者',
    'page-home-section-developers-item-one': '入门指南',
    'page-home-section-developers-item-one-link': '/zh/developers/#入门指南',
    'page-home-section-developers-item-two': '编写智能合约',
    'page-home-section-developers-item-two-link': '/zh/developers/#智能合约语言',
    'page-home-section-developers-item-three': '最新的开发者工具',
    'page-home-section-developers-item-three-link': '/zh/developers/#开发者工具',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': '初学者',
    'page-use': '使用',
    'page-learn': '学习',
    'page-developers': '开发者'
  }
};

const translate = (lookup, lang = 'en-US') => {
  const translation = translations[lang][lookup];
  if (translation === undefined) {
    console.error(`No translation for: ${lookup} on lang: ${lang}`);
  }
  return translation || '';
};

module.exports = {
  translate,
  translations
};
