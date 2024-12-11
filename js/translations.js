const translations = {
    en: {
        "nav-home": "Home",
        "nav-experience": "Experience",
        "nav-education": "Education",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-certifications": "Certifications",
        "nav-contact": "Contact",

        // Home section
        "title": "Ahmed Fathy Mohammed",
        "subtitle": "BI Analyst and Power BI Developer",
        "location": "Cairo, Egypt",

        // Experience section
        "experience-title": "Professional Experience",
        "experience-1-title": "BI Analyst",
        "experience-1-company": "WE HEALTH iT (ERP System for medical healthcare)",
        "experience-1-location": "Banha, Egypt",
        "experience-1-date": "2024-Present",
        "experience-1-desc": "Dived deep into WE HEALTH IT's medical data using Power BI to identify valuable trends and patterns, translate complex medical data into compelling visualizations and reports, making it easy for users to understand key metrics and trends, and collaborate with healthcare professionals to understand their data needs, then deliver actionable reports that empower data-driven decisions.",

        // Education section
        "education-title": "Education",
        "education-degree": "Bachelor's Degree in Computer Science & Artificial Intelligence",
        "education-university": "Banha University, Egypt",
        "education-date": "2019-2023",
        "education-grade": "Grade: 3.56 GPA with Honor",

        // Projects section
        "projects-title": "Projects",
        "project-1-title": "Airline Analysis Project",
        "project-1-desc": "Developed a comprehensive Power BI dashboard analyzing airline industry metrics including flight performance, revenue trends, and passenger demographics. Implemented interactive visualizations and DAX measures to provide actionable insights for route optimization and business decision-making.",
        "project-2-title": "Sales Analytics Dashboard",
        "project-2-desc": "Initiated data cleansing in Excel before visualization in Power BI. Validated data types, merged Orders and Returns tables, and created essential measures and charts for effective data analysis.",
        "project-3-title": "Customer Promotions and Diversity",
        "project-3-desc": "Designed and implemented targeted promotional campaigns while analyzing customer segmentation data to enhance market diversity. Resulted in improved customer engagement across diverse demographics.",
        "view-dashboard": "Live Dashboard",

        // Skills section
        "skills-title": "Skills",
        "skills-analytics": "Data Analytics",
        "skills-warehouse": "Data Warehouse",
        "skills-programming": "Programming & Databases",

        // Certifications section
        "certifications-title": "Certifications"
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-experience": "الخبرات",
        "nav-education": "التعليم",
        "nav-skills": "المهارات",
        "nav-projects": "المشاريع",
        "nav-certifications": "الشهادات",
        "nav-contact": "التواصل",

        // Home section
        "title": "أحمد فتحي محمد",
        "subtitle": "محلل بيانات ومطور Power BI",
        "location": "القاهرة، مصر",

        // Experience section
        "experience-title": "الخبرات المهنية",
        "experience-1-title": "محلل بيانات",
        "experience-1-company": "وي هيلث آي تي (نظام ERP للرعاية الصحية)",
        "experience-1-location": "بنها، مصر",
        "experience-1-date": "٢٠٢٤-حتى الآن",
        "experience-1-desc": "تعمقت في تحليل البيانات الطبية باستخدام Power BI لتحديد الاتجاهات والأنماط القيمة، وترجمة البيانات الطبية المعقدة إلى تصورات وتقارير مقنعة، مما يسهل على المستخدمين فهم المقاييس والاتجاهات الرئيسية، والتعاون مع المتخصصين في الرعاية الصحية لفهم احتياجاتهم من البيانات، ثم تقديم تقارير قابلة للتنفيذ تمكن من اتخاذ القرارات المستندة إلى البيانات.",

        // Education section
        "education-title": "التعليم",
        "education-degree": "بكالوريوس علوم الحاسب والذكاء الاصطناعي",
        "education-university": "جامعة بنها، مصر",
        "education-date": "٢٠١٩-٢٠٢٣",
        "education-grade": "التقدير: ٣.٥٦ GPA مع مرتبة الشرف",

        // Projects section
        "projects-title": "المشاريع",
        "project-1-title": "مشروع تحليل شركات الطيران",
        "project-1-desc": "تطوير لوحة معلومات شاملة في Power BI لتحليل مقاييس صناعة الطيران بما في ذلك أداء الرحلات واتجاهات الإيرادات والتركيبة السكانية للركاب. تنفيذ التصورات التفاعلية ومقاييس DAX لتوفير رؤى قابلة للتنفيذ لتحسين المسارات واتخاذ القرارات التجارية.",
        "project-2-title": "لوحة تحليلات المبيعات",
        "project-2-desc": "بدأت العملية بتنظيف مجموعة البيانات في Excel قبل البدء في رحلة التصور في Power BI. في البداية، قمت بالتحقق من صحة أنواع البيانات، ودمج جداول الطلبات والمرتجعات، وتابعت إنشاء المقاييس والمخططات الأساسية المؤدية إلى تحليل البيانات الفعال.",
        "project-3-title": "العروض الترويجية وتنوع العملاء",
        "project-3-desc": "تصميم وتنفيذ حملات ترويجية مستهدفة مع تحليل بيانات تقسيم العملاء لتعزيز تنوع السوق. أدى إلى تحسين مشاركة العملاء عبر مختلف الفئات الديموغرافية.",
        "view-dashboard": "عرض اللوحة",

        // Skills section
        "skills-title": "المهارات",
        "skills-analytics": "تحليل البيانات",
        "skills-warehouse": "مستودع البيانات",
        "skills-programming": "البرمجة وقواعد البيانات",

        // Certifications section
        "certifications-title": "الشهادات"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'عربي' : 'English';
    updateContent();
}

function updateContent() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[currentLang][key] || translations.en[key] || key;
        element.textContent = translation;
    });

    // Update attributes (like placeholders) if needed
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        const translation = translations[currentLang][key] || translations.en[key] || key;
        element.setAttribute('placeholder', translation);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Set the initial language and update UI
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'عربي' : 'English';
    updateContent();
});