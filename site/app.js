/* ArmanTech — i18n + interactions */
(function () {
  "use strict";

  var translations = {
    en: {
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Start a project",

      "hero.eyebrow": "Software & AI studio — Muscat, Oman",
      "hero.title1": "We build intelligent",
      "hero.title2": "software that ships.",
      "hero.sub": "ArmanTech designs and engineers custom software and AI systems — from strategy and consulting to production-grade products your business runs on.",
      "hero.cta1": "Let’s talk",
      "hero.cta2": "Explore services",
      "hero.stat1": "LLM & ML expertise",
      "hero.stat2": "Idea to production",
      "hero.stat3": "Built in Oman, global reach",

      "services.eyebrow": "What we do",
      "services.title": "Capabilities that cover the full stack",
      "services.sub": "One team, end to end — strategy, design, engineering, and operations.",
      "services.s1.title": "Custom Software Development",
      "services.s1.body": "Web platforms, APIs, and internal tools built to your exact workflow — clean architecture, tested, and ready to scale.",
      "services.s2.title": "AI Development",
      "services.s2.body": "LLM-powered products, intelligent agents, RAG pipelines, and machine-learning systems — engineered for reliability, not demos.",
      "services.s3.title": "AI Consulting & Strategy",
      "services.s3.body": "We map where AI actually pays off in your business, design the roadmap, and de-risk adoption with rapid proofs of value.",
      "services.s4.title": "Web & Mobile Apps",
      "services.s4.body": "Fast, polished products across web, iOS, and Android — designed for humans and built with modern frameworks.",
      "services.s5.title": "Cloud & DevOps",
      "services.s5.body": "Infrastructure as code, CI/CD, and observability — secure, automated deployments that keep your product always on.",
      "services.s6.title": "Data Engineering",
      "services.s6.body": "Pipelines, warehouses, and dashboards that turn scattered data into decisions — and into fuel for your AI systems.",

      "process.eyebrow": "How we work",
      "process.title": "A process built for momentum",
      "process.p1.title": "Discover",
      "process.p1.body": "We dig into your goals, constraints, and data to define what success actually looks like.",
      "process.p2.title": "Design",
      "process.p2.body": "Architecture, UX, and a lean roadmap — the shortest credible path to value.",
      "process.p3.title": "Build",
      "process.p3.body": "Short iterations, working software every week, and total transparency along the way.",
      "process.p4.title": "Scale",
      "process.p4.body": "Launch, monitor, and evolve — we stay with you as the product and the business grow.",

      "about.eyebrow": "Who we are",
      "about.title": "Engineered in Oman. Built for the world.",
      "about.body": "ArmanTech is a software house headquartered in Muscat. We partner with startups, enterprises, and government teams across the Gulf and beyond — combining deep engineering craft with a pragmatic, business-first approach to AI. No buzzwords, no bloat: just software that works and keeps working.",
      "about.c1": "Senior engineers on every project",
      "about.c2": "Bilingual delivery — Arabic and English",
      "about.c3": "Security and privacy by default",
      "about.c4": "Long-term partnership, not one-off gigs",

      "contact.title": "Have an idea? Let’s build it.",
      "contact.sub": "Tell us about your project — we’ll get back to you within one business day.",
      "contact.cta": "team@armantech.om",

      "footer.rights": "© 2026 ArmanTech. All rights reserved.",
      "footer.loc": "Muscat, Sultanate of Oman"
    },

    ar: {
      "nav.services": "خدماتنا",
      "nav.process": "منهجيتنا",
      "nav.about": "من نحن",
      "nav.contact": "تواصل معنا",
      "nav.cta": "ابدأ مشروعك",

      "hero.eyebrow": "استوديو برمجيات وذكاء اصطناعي — مسقط، عُمان",
      "hero.title1": "نبني برمجيات ذكية",
      "hero.title2": "تصل إلى الإنتاج فعلاً.",
      "hero.sub": "أرمان تك تصمّم وتطوّر برمجيات مخصّصة وأنظمة ذكاء اصطناعي — من الاستشارات ورسم الاستراتيجية إلى منتجات احترافية يعتمد عليها عملك يومياً.",
      "hero.cta1": "تحدّث معنا",
      "hero.cta2": "استكشف خدماتنا",
      "hero.stat1": "خبرة في النماذج اللغوية وتعلّم الآلة",
      "hero.stat2": "من الفكرة إلى الإنتاج",
      "hero.stat3": "صُنع في عُمان، بمدى عالمي",

      "services.eyebrow": "ماذا نقدّم",
      "services.title": "قدرات تغطي كامل دورة التطوير",
      "services.sub": "فريق واحد من البداية إلى النهاية — استراتيجية وتصميم وهندسة وتشغيل.",
      "services.s1.title": "تطوير برمجيات مخصّصة",
      "services.s1.body": "منصات ويب وواجهات برمجية وأدوات داخلية مبنية على مقاس عملك — بمعمارية نظيفة ومختبرة وجاهزة للتوسّع.",
      "services.s2.title": "تطوير حلول الذكاء الاصطناعي",
      "services.s2.body": "منتجات مدعومة بالنماذج اللغوية الكبيرة، ووكلاء أذكياء، وأنظمة استرجاع معزّز وتعلّم آلة — مهندَسة للاعتمادية لا للعروض التجريبية.",
      "services.s3.title": "استشارات واستراتيجية الذكاء الاصطناعي",
      "services.s3.body": "نحدّد أين يحقق الذكاء الاصطناعي عائداً حقيقياً في عملك، ونرسم خارطة الطريق، ونقلّل المخاطر عبر تجارب سريعة تثبت القيمة.",
      "services.s4.title": "تطبيقات الويب والجوال",
      "services.s4.body": "منتجات سريعة ومتقنة عبر الويب وiOS وأندرويد — مصمّمة للبشر ومبنية بأحدث التقنيات.",
      "services.s5.title": "السحابة والعمليات التقنية",
      "services.s5.body": "بنية تحتية بالشيفرة، ونشر مؤتمت آمن، ومراقبة مستمرة — ليبقى منتجك متاحاً دائماً.",
      "services.s6.title": "هندسة البيانات",
      "services.s6.body": "خطوط بيانات ومستودعات ولوحات تحكم تحوّل البيانات المتناثرة إلى قرارات — ووقوداً لأنظمة الذكاء الاصطناعي لديك.",

      "process.eyebrow": "كيف نعمل",
      "process.title": "منهجية مصمّمة للإنجاز",
      "process.p1.title": "الاستكشاف",
      "process.p1.body": "نتعمّق في أهدافك وقيودك وبياناتك لنحدّد معنى النجاح بدقة.",
      "process.p2.title": "التصميم",
      "process.p2.body": "معمارية وتجربة مستخدم وخارطة طريق مركّزة — أقصر مسار موثوق نحو القيمة.",
      "process.p3.title": "البناء",
      "process.p3.body": "دورات قصيرة، وبرمجيات تعمل كل أسبوع، وشفافية كاملة طوال الطريق.",
      "process.p4.title": "التوسّع",
      "process.p4.body": "إطلاق ومراقبة وتطوير مستمر — نبقى معك مع نمو المنتج والعمل.",

      "about.eyebrow": "من نحن",
      "about.title": "هندسة عُمانية. بمعايير عالمية.",
      "about.body": "أرمان تك بيت برمجيات مقرّه مسقط. نعمل مع الشركات الناشئة والمؤسسات والجهات الحكومية في الخليج وخارجه — نجمع بين حرفية هندسية عميقة ونهج عملي يضع مصلحة العمل أولاً في تبنّي الذكاء الاصطناعي. بلا شعارات رنّانة وبلا تعقيد: برمجيات تعمل وتستمر في العمل.",
      "about.c1": "مهندسون خبراء في كل مشروع",
      "about.c2": "تنفيذ ثنائي اللغة — بالعربية والإنجليزية",
      "about.c3": "الأمان والخصوصية في صميم كل حل",
      "about.c4": "شراكة طويلة الأمد، لا مشاريع عابرة",

      "contact.title": "لديك فكرة؟ لنبنِها معاً.",
      "contact.sub": "حدّثنا عن مشروعك — وسنعاود التواصل معك خلال يوم عمل واحد.",
      "contact.cta": "team@armantech.om",

      "footer.rights": "© 2026 أرمان تك. جميع الحقوق محفوظة.",
      "footer.loc": "مسقط، سلطنة عُمان"
    }
  };

  var current = localStorage.getItem("lang");
  if (current !== "en" && current !== "ar") {
    current = (navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
  }

  function applyLang(lang) {
    current = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    var dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang-label") === lang);
    });

    document.title = lang === "ar"
      ? "أرمان تك — تطوير البرمجيات والذكاء الاصطناعي | ArmanTech"
      : "ArmanTech — Software & AI Development | أرمان تك";
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    applyLang(current === "en" ? "ar" : "en");
  });

  applyLang(current);

  // Scroll reveal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

  // Card cursor glow
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
})();
