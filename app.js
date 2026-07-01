// Sri Venkateswara Rentals - Core Application Logic

// Gallery Images (exactly the 2 provided property photos)
const galleryImages = [
  { src: "images/building_exterior_1.jpg", caption: "Sri Venkateswara Rentals - Building Front View" },
  { src: "images/building_exterior_2.jpg", caption: "Sri Venkateswara Rentals - Building Elevation & Side View" }
];

// App State variables
// App State variables
let currentLightboxIndex = 0;
let tenantReviews = [];
let selectedRating = 0;
let currentLanguage = "te"; // Default website language is Telugu

// Owner contact info
const contactInfo = {
  phone: "+919618769101",
  whatsapp: "919618769101",
  email: "reddysivaacoy541@gmail.com"
};

// Translations Catalog
const translations = {
  te: {
    "logo-title": "శ్రీ వెంకటేశ్వర",
    "logo-subtitle": "రెంటల్స్",
    "seo-title": "శ్రీ వెంకటేశ్వర రెంటల్స్ | కంబంలో సరసమైన ధరలో అద్దెకు లభించు 2BHK ఇళ్ళు",
    "seo-desc": "కంబం, మార్కాపురంలో 2 అటాచ్డ్ బాత్రూమ్‌లు, బాల్కనీ మరియు కవర్డ్ పార్కింగ్‌తో కూడిన నాణ్యమైన, సౌకర్యవంతమైన మరియు సరసమైన 2BHK అద్దె ఇళ్ళు. యజమానిని నేరుగా సంప్రదించండి.",
    "nav-home": "హోమ్",
    "nav-details": "ఆస్తి వివరాలు",
    "nav-amenities": "సదుపాయాలు",
    "nav-gallery": "గ్యాలరీ",
    "nav-about": "మా గురించి",
    "nav-contact": "సంప్రదించండి",
    "btn-rent-now": "ఇప్పుడే అద్దెకు",
    "btn-call-owner": "యజమానితో మాట్లాడండి",
    "btn-whatsapp": "వాట్సాప్ చాట్",
    "mobile-lang-title": "భాషను ఎంచుకోండి / Select Language",
    "hero-badge": "ధృవీకరించబడిన 2BHK ఇల్లు",
    "hero-title": "శ్రీ వెంకటేశ్వర రెంటల్స్",
    "hero-subtitle": "సరసమైన ధరలో అద్దెకు లభించు 2BHK ఇళ్ళు",
    "hero-desc": "అటాచ్డ్ బాత్రూమ్‌లతో కూడిన శుభ్రమైన, సౌకర్యవంతమైన మరియు సరసమైన 2BHK ఇళ్లను కనుగొనండి. మేము యజమానితో నేరుగా సంప్రదించే సదుపాయంతో మరియు ఎటువంటి ఇబ్బంది లేని అద్దె అనుభవాన్ని అందిస్తాము.",
    "hero-btn-details": "ఇంటి వివరాలు చూడండి",
    "hero-btn-contact": "మమ్మల్ని సంప్రదించండి",
    "details-badge": "ఇంటి ప్రత్యేకతలు",
    "details-title": "ఆస్తి వివరాలు & సంప్రదింపులు",
    "details-about-title": "ఈ ఇంటి గురించి",
    "details-about-desc": "ఈ భవనం శుభ్రమైన, విశాలమైన మరియు చక్కటి గాలి వెలుతురు ఉండే 2BHK ఫ్లాట్లను కలిగి ఉంది. ప్రతి ఇల్లు స్వతంత్ర వెంటిలేషన్, ఆధునిక మాడ్యులర్ వంటగది నిర్మాణం, యుటిలిటీ స్పేస్ మరియు విశాలమైన బాల్కనీలతో రూపొందించబడింది. ప్రామాణిక భద్రత, 24/7 నీటి సరఫరా మరియు సులభమైన రవాణా సౌకర్యం కలిగి ఉంది.",
    "pricing-badge": "అద్దె ధర",
    "pricing-value": "ధర కొరకు యజమానిని సంప్రదించండి",
    "pricing-desc": "యజమానితో నేరుగా మాట్లాడి ఉత్తమ ధరలను పొందండి. బ్రోకరేజ్ లేదు, నేరుగా బుకింగ్.",
    "pricing-info": "కస్టమ్ లీజు నిబంధనలు, నెలవారీ అద్దె మరియు సెక్యూరిటీ డిపాజిట్‌ను నేరుగా చర్చించండి. ఎటువంటి బ్రోకరేజ్ ఫీజు లేదు.",
    "specs-title": "ఆస్తి ప్రత్యేకతలు",
    "spec-label-beds": "బెడ్‌రూమ్‌లు",
    "spec-val-beds": "2 BHK లేఅవుట్",
    "spec-label-baths": "బాత్రూమ్‌లు",
    "spec-val-baths": "2 అటాచ్డ్",
    "spec-label-furnishing": "ఫర్నిషింగ్",
    "spec-val-furnishing": "సెమీ-ఫర్నిష్డ్",
    "spec-label-size": "ఫ్లాట్ పరిమాణం",
    "spec-val-size": "1150 చ.అడుగులు",
    "detail-label-floors": "ఫ్లోర్లు లభ్యత",
    "detail-val-floors": "మల్టిపుల్ ఫ్లోర్లు",
    "detail-label-balcony": "బాల్కనీ స్థితి",
    "detail-val-balcony": "గాలి వెలుతురు ఉండే బాల్కనీ",
    "detail-label-parking": "పార్కింగ్ కేటాయింపు",
    "detail-val-parking": "కవర్డ్ కార్ & బైక్",
    "amenities-badge": "ప్రామాణిక సదుపాయాలు",
    "amenities-title": "మేము అందించే సదుపాయాలు",
    "amenities-desc": "అన్ని ఇళ్లు సౌకర్యం మరియు ఉపయోగం ఉండేలా రూపొందించబడ్డాయి, ఇందులో రోజువారీ అవసరాల కోసం అన్నీ అమర్చబడి ఉంటాయి.",
    "amenity-1-title": "అటాచ్డ్ బాత్రూమ్‌లు",
    "amenity-1-desc": "పూర్తి టైలింగ్ & ప్రీమియం కుళాయిలు",
    "amenity-2-title": "24/7 నీటి సరఫరా",
    "amenity-2-desc": "ప్రత్యేక నీటి నిల్వ ట్యాంకులు",
    "amenity-3-title": "రిజర్వ్డ్ పార్కింగ్",
    "amenity-3-desc": "కవర్డ్ కార్ & బైక్ స్లాట్లు",
    "amenity-4-title": "విద్యుత్ బ్యాకప్",
    "amenity-4-desc": "ప్రత్యేక విద్యుత్ మీటర్లు",
    "amenity-5-title": "బాల్కనీ",
    "amenity-5-desc": "విశాలమైనది & గాలి వెలుతురు ఉండేది",
    "amenity-6-title": "ఆధునిక వంటగది",
    "amenity-6-desc": "గ్రెనైట్ ప్లాట్‌ఫారమ్ & చెక్క అల్మారాలు",
    "amenity-7-title": "ప్రజా రవాణా",
    "amenity-7-desc": "ప్రధాన రవాణా కేంద్రాల సమీపంలో ఉంది",
    "amenity-8-title": "కుటుంబానికి అనుకూలమైనది",
    "amenity-8-desc": "ప్రశాంతమైన & సురక్షితమైన కుటుంబ వాతావరణం",
    "gallery-badge": "ఇంటి వాస్తవ చిత్రాలు",
    "gallery-title": "ఫోటో గ్యాలరీ",
    "gallery-desc": "భవనం యొక్క ముందు భాగం మరియు ఎలివేషన్ల ఛాయాచిత్రాలు.",
    "why-badge": "మా నిబద్ధతలు",
    "why-title": "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?",
    "why-desc": "మేము పూర్తి పారదర్శకతతో నేరుగా యజమాని నుండి అద్భుతమైన అద్దె ప్రమాణాలను అందిస్తాము.",
    "commit-1-title": "నేరుగా బుకింగ్",
    "commit-1-desc": "ధర మరియు నిర్ధారణ కోసం నేరుగా యజమానితో మాట్లాడండి. ఎటువంటి దాచిన బ్రోకరేజ్ ఛార్జీలు లేదా మధ్యవర్తులు లేరు.",
    "commit-2-title": "ధృవీకరించబడిన ఆస్తులు",
    "commit-2-desc": "అన్ని జాబితా వివరణలు, లేఅవుట్ కాన్ఫిగరేషన్లు మరియు ఫోటోలు 100% నిజమైనవి మరియు అక్కడికక్కడే ధృవీకరించబడ్డాయి.",
    "commit-3-title": "పరిశుభ్రత & నిర్వహణ",
    "commit-3-desc": "కీలను అందజేయడానికి ముందు ఇళ్లను డీప్ క్లీనింగ్, శానిటైజేషన్ మరియు హార్డ్‌വേర్ తనిఖీ చేస్తాము.",
    "commit-4-title": "త్వరిత మద్దతు",
    "commit-4-desc": "మీ అద్దె కాలంలో సాధారణ ఎలక్ట్రికల్, ప్లంబింగ్ లేదా మెయింటెనెన్స్ అభ్యర్థనల కోసం తక్షణ స్పందన.",
    "review-badge": "కస్టమర్ సమీక్షలు",
    "review-title": "అద్దెదారుల టెస్టిమోనియల్స్",
    "review-list-title": "అద్దెదారుల ఫీడ్‌బ్యాక్",
    "review-list-subtitle": "డైనమిక్ సమీక్షలు",
    "review-form-title": "ఒక సమీక్ష రాయండి",
    "review-form-rating-label": "మీ రేటింగ్ *",
    "review-form-name-label": "పేరు *",
    "review-form-name-placeholder": "మీ పేరు",
    "review-form-status-label": "అద్దెదారు స్థితి *",
    "status-current": "ప్రస్తుత అద్దెదారు",
    "status-past": "గత అద్దెదారు",
    "status-guest": "ధృవీకరించబడిన అతిథి",
    "review-form-text-label": "సమీక్ష *",
    "review-form-text-placeholder": "ఇక్కడ మీ అనుభవాన్ని పంచుకోండి...",
    "btn-submit-review": "సమీక్షను సమర్పించండి",
    "about-badge": "మేము ఎవరు",
    "about-title": "శ్రీ వెంకటేశ్వర రెంటల్స్ గురించి",
    "about-desc-1": "మేము సరసమైన ధరలలో అటాచ్డ్ బాత్రూమ్‌లతో కూడిన నాణ్యమైన 2BHK అద్దె ఇళ్లను అందిస్తాము. కుటుంబాలు యజమానితో ప్రత్యక్ష సంప్రదింపులు, నమ్మకమైన మద్దతు మరియు సున్నితమైన అద్దె అనుభవంతో సౌకర్యవంతమైన ఇళ్లను కనుగొనడంలో సహాయపడటమే మా లక్ష్యం.",
    "about-desc-2": "అధిక-నాణ్యత కలిగిన నివాస స్థలాలను అందించే ఉద్దేశంతో స్థాపించబడిన మేము, మధ్యవర్తులను నివారించి, అద్దెదారులకు యజమానితో ప్రత్యక్ష సంప్రదింపులను కల్పిస్తాము. ఈ ప్రత్యక్ష సమన్వయం తక్షణ సమస్యల పరిష్కారం మరియు సరసమైన సెక్యూరిటీ డిపాజిట్ వాపసులకు హామీ ఇస్తుంది.",
    "about-desc-3": "మా నిర్మాణ రూపకల్పన ఆధునిక కాంతి మరియు వెంటిలేషన్ ప్రమాణాలకు పూర్తిగా కట్టుబడి ఉండేలా చూస్తుంది మరియు అన్ని ఫ్లాట్లు అత్యంత పరిశుభ్రమైన స్థితిలో నిర్వహించబడుతున్నాయి.",
    "about-stat-1": "అద్దెదారుల సంతృప్తి",
    "about-stat-2": "నీటి సరఫరా",
    "about-stat-3": "బ్రోకరేజ్ ఫీజు లేదు",
    "contact-badge": "మమ్మల్ని సంప్రదించండి",
    "contact-title": "సంప్రదించండి",
    "contact-desc": "మా ఇళ్లను చూడటానికి ఆసక్తి ఉందా? మాకు సందేశం పంపండి లేదా నేరుగా యజమానిని సంప్రదించండి.",
    "contact-info-title": "సంప్రదింపు సమాచారం",
    "contact-info-call": "యజమానితో మాట్లాడండి",
    "contact-info-whatsapp": "వాట్సాప్ చాట్",
    "contact-info-email": "మాకు ఈమెయిల్ చేయండి",
    "contact-info-location": "ఆస్తి లొకేషన్",
    "contact-info-address": "శ్రీ వెంకటేశ్వర రెంటల్స్, కందులాపురం రోడ్, కంబమ్, మార్కాపురం జిల్లా, ఆంధ్రప్రదేశ్ 523333",
    "contact-info-coords": "కోఆర్డినేట్లు: 15.591705552455627, 79.1172781637055",
    "contact-form-title": "సందేశం పంపండి",
    "contact-form-name-label": "పేరు *",
    "contact-form-name-placeholder": "మీ పూర్తి పేరు",
    "contact-form-phone-label": "ఫోన్ నంబర్ *",
    "contact-form-phone-placeholder": "10-అంకెల మొబైల్ నంబర్",
    "contact-form-email-label": "ఈమెయిల్ చిరునామా (ఐచ్ఛికం)",
    "contact-form-email-placeholder": "మీ ఈమెయిల్ చిరునామా",
    "contact-form-message-label": "సందేశం *",
    "contact-form-message-placeholder": "మీరు ఇంటిని ఎప్పుడు సందర్శించాలనుకుంటున్నారో లేదా ఇతర ప్రశ్నలను ఇక్కడ రాయండి...",
    "btn-submit-contact": "సందేశం పంపండి",
    "footer-desc": "కంబంలో యజమాని నుండి నేరుగా లభించే ఆధునిక సదుపాయాలతో కూడిన నాణ్యమైన, సౌకర్యవంతమైన మరియు సరసమైన 2BHK అద్దె ఇళ్ళు.",
    "footer-links-title": "త్వరిత లింకులు",
    "footer-legal-title": "సమాచారం",
    "footer-legal-p1": "బ్రోకరేజ్ ఫీజు లేదు",
    "footer-legal-p2": "प्रत्यक्ष యజమాని ఒప్పందం",
    "footer-contact-title": "సంప్రదింపు వివరాలు",
    "footer-copyright": "© 2026 శ్రీ వెంకటేశ్వర రెంటల్స్. సర్వ హక్కులూ ప్రత్యేకించబడినవి.",
    "footer-privacy": "గోప్యతా విధానం",
    "footer-terms": "నిబంధనలు & షరతులు",
    "lightbox-of": "లో",
    "lightbox-default-caption": "చిత్ర వివరణ",
    "toast-fill-fields": "దయచేసి అన్ని అవసరమైన ఫీల్డ్‌లను (*) పూరించండి.",
    "toast-valid-phone": "దయచేసి సరైన ఫోన్ నంబర్‌ను నమోదు చేయండి.",
    "toast-contact-success": "ధన్యవాదాలు! మీ సందేశం విజయవంతంగా పంపబడింది. మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.",
    "toast-fill-review": "దయచేసి సమీక్ష ఫీల్డ్‌లన్నింటినీ పూరించండి.",
    "toast-select-rating": "దయచేసి స్టార్ రేటింగ్ ఎంచుకోండి (1 నుండి 5 నక్షత్రాలు).",
    "toast-review-success": "ధన్యవాదాలు! మీ సమీక్ష విజయవంతంగా పోస్ట్ చేయబడింది.",
    "review-1-text": "ఈ 2BHK ఫ్లాట్లలో గాలి వెలుతురు అద్భుతంగా ఉంటుంది. రెండు అటాచ్డ్ బాత్రూమ్‌లతో కూడిన పరిశుభ్రమైన, విశాలమైన బెడ్‌రూమ్‌లు ఉన్నాయి. యజమాని చాలా త్వరగా స్పందిస్తారు మరియు భవనాన్ని బాగా నిర్వహిస్తారు.",
    "review-2-text": "ఇక్కడ ఒక సంవత్సరం పాటు చాలా హాయిగా గడిపాము. యజమానితో ప్రత్యక్ష సంప్రదింపుల వలన నిర్వహణ అభ్యర్థనలకు ఎప్పుడూ ఆలస్యం కాలేదు. ఇక్కడి సదుపాయాల పట్ల పూర్తి సంతృప్తి చెందాను."
  },
  en: {
    "logo-title": "Sri Venkateswara",
    "logo-subtitle": "Rentals",
    "seo-title": "Sri Venkateswara Rentals | Affordable 2BHK Homes for Rent in Cumbum",
    "seo-desc": "Quality, comfortable, and affordable 2BHK rental homes with 2 attached bathrooms, balcony, and covered parking in Cumbum, Markapuram. Contact owner directly.",
    "nav-home": "Home",
    "nav-details": "Property Details",
    "nav-amenities": "Amenities",
    "nav-gallery": "Gallery",
    "nav-about": "About Us",
    "nav-contact": "Contact",
    "btn-rent-now": "Rent Now",
    "btn-call-owner": "Call Owner",
    "btn-whatsapp": "Chat on WhatsApp",
    "mobile-lang-title": "Select Language",
    "hero-badge": "Verified 2BHK Home",
    "hero-title": "Sri Venkateswara Rentals",
    "hero-subtitle": "Affordable 2BHK Homes for Rent",
    "hero-desc": "Find clean, comfortable, and affordable 2BHK homes with attached bathrooms. We provide quality rental homes with direct owner contact and a hassle-free rental experience.",
    "hero-btn-details": "View Property Details",
    "hero-btn-contact": "Contact Us",
    "details-badge": "Home Specifications",
    "details-title": "Property Details & Contact",
    "details-about-title": "About This Home",
    "details-about-desc": "This building offers clean, spacious, and highly ventilated 2BHK flat layouts. Each home is designed with independent ventilation, a modern modular kitchen structure, utility space, and spacious balconies. Features standard building security, 24/7 dedicated water supply, and easy transport connectivity.",
    "pricing-badge": "Rental Pricing",
    "pricing-value": "Contact Owner for Price",
    "pricing-desc": "Get the best rates by discussing directly with the owner. No brokerage, direct booking.",
    "pricing-info": "Discuss custom lease terms, monthly rent, and security deposit directly. No brokerage fees.",
    "specs-title": "Property Specifications",
    "spec-label-beds": "Bedrooms",
    "spec-val-beds": "2 BHK Layout",
    "spec-label-baths": "Bathrooms",
    "spec-val-baths": "2 Attached",
    "spec-label-furnishing": "Furnishing",
    "spec-val-furnishing": "Semi-Furnished",
    "spec-label-size": "Flat Size",
    "spec-val-size": "1150 sqft",
    "detail-label-floors": "Floors Available",
    "detail-val-floors": "Multiple floors",
    "detail-label-balcony": "Balcony Status",
    "detail-val-balcony": "Ventilated balcony",
    "detail-label-parking": "Parking allotment",
    "detail-val-parking": "Covered Car & Bike",
    "amenities-badge": "Standard Facilities",
    "amenities-title": "Amenities We Provide",
    "amenities-desc": "All homes are designed to ensure comfort and utility, featuring full installations of high-end daily essentials.",
    "amenity-1-title": "Attached Bathrooms",
    "amenity-1-desc": "Full tiling & premium taps",
    "amenity-2-title": "24/7 Water Supply",
    "amenity-2-desc": "Dedicated water storage tanks",
    "amenity-3-title": "Reserved Parking",
    "amenity-3-desc": "Covered Car & Bike slots",
    "amenity-4-title": "Electricity Backup",
    "amenity-4-desc": "Separate electricity meters",
    "amenity-5-title": "Balcony",
    "amenity-5-desc": "Spacious & well-ventilated",
    "amenity-6-title": "Modern Kitchen",
    "amenity-6-desc": "Granite platform & wooden cupboards",
    "amenity-7-title": "Public Transport",
    "amenity-7-desc": "Located near main transit stops",
    "amenity-8-title": "Family Friendly",
    "amenity-8-desc": "Quiet & secure family environment",
    "gallery-badge": "Real Property Views",
    "gallery-title": "Photo Gallery",
    "gallery-desc": "Photographs of the building front facade and structural elevations.",
    "why-badge": "Our Commitments",
    "why-title": "Why Rent From Us?",
    "why-desc": "We provide outstanding tenancy standards directly from the owner with full transparency.",
    "commit-1-title": "Direct Booking",
    "commit-1-desc": "Talk directly to the owner for pricing and confirmation. No hidden brokerage charges or middlemen.",
    "commit-2-title": "Verified Properties",
    "commit-2-desc": "All listing descriptions, layout configurations, and photos are 100% genuine and verified on-site.",
    "commit-3-title": "Clean & Maintained",
    "commit-3-desc": "Homes undergo deep cleaning, complete sanitization, and hardware checking before handing over key access.",
    "commit-4-title": "Quick Support",
    "commit-4-desc": "Prompt response for general electrical, plumbing, or maintenance requests throughout your tenancy.",
    "review-badge": "Customer Reviews",
    "review-title": "Tenant Testimonials",
    "review-list-title": "Tenant Feedback",
    "review-list-subtitle": "Dynamic Reviews",
    "review-form-title": "Write a Review",
    "review-form-rating-label": "Your Rating *",
    "review-form-name-label": "Name *",
    "review-form-name-placeholder": "Your Name",
    "review-form-status-label": "Tenant Status *",
    "status-current": "Current Tenant",
    "status-past": "Past Tenant",
    "status-guest": "Verified Guest",
    "review-form-text-label": "Review *",
    "review-form-text-placeholder": "Share your experience staying here...",
    "btn-submit-review": "Submit Review",
    "about-badge": "Who We Are",
    "about-title": "About Sri Venkateswara Rentals",
    "about-desc-1": "We provide quality 2BHK rental homes with attached bathrooms at affordable rates. Our mission is to help families find comfortable homes with direct owner contact, reliable support, and a smooth rental experience.",
    "about-desc-2": "Established with a vision of offering high-standard residential spaces, we eliminate middle-men, giving tenants direct owner contact. This direct coordination guarantees immediate issue resolution and fair security deposit refunds.",
    "about-desc-3": "Our structural design ensures full compliance with modern light and ventilation standards, and all flats are maintained in pristine condition.",
    "about-stat-1": "Tenant Satisfaction",
    "about-stat-2": "Water Supply",
    "about-stat-3": "Brokerage Fees",
    "contact-badge": "Get In Touch",
    "contact-title": "Contact Us",
    "contact-desc": "Interested in viewing our properties? Send us a message or contact the property owner directly.",
    "contact-info-title": "Contact Information",
    "contact-info-call": "Call Owner",
    "contact-info-whatsapp": "WhatsApp Chat",
    "contact-info-email": "Email Us",
    "contact-info-location": "Property Location",
    "contact-info-address": "Sri Venkateswara Rentals, Kandulapuram Road, Cumbum, Markapuram District, Andhra Pradesh 523333",
    "contact-info-coords": "Coordinates: 15.591705552455627, 79.1172781637055",
    "contact-form-title": "Send a Message",
    "contact-form-name-label": "Name *",
    "contact-form-name-placeholder": "Your Full Name",
    "contact-form-phone-label": "Phone Number *",
    "contact-form-phone-placeholder": "10-digit Mobile Number",
    "contact-form-email-label": "Email Address (Optional)",
    "contact-form-email-placeholder": "Your Email Address",
    "contact-form-message-label": "Message *",
    "contact-form-message-placeholder": "Mention when you plan to visit the property or any other inquiries...",
    "btn-submit-contact": "Submit Inquiry",
    "footer-desc": "Providing premium-quality residential 2BHK rentals directly from the owner with transparent pricing, zero brokerage, and dedicated support.",
    "footer-links-title": "Quick Links",
    "footer-legal-title": "Information",
    "footer-legal-p1": "No Brokerage Fees",
    "footer-legal-p2": "Direct Owner Contract",
    "footer-contact-title": "Contact Details",
    "footer-copyright": "© 2026 Sri Venkateswara Rentals. All rights reserved.",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms & Conditions",
    "lightbox-of": "of",
    "lightbox-default-caption": "Image Caption",
    "toast-fill-fields": "Please fill in all required fields (*).",
    "toast-valid-phone": "Please enter a valid phone number.",
    "toast-contact-success": "Thank you! Your message has been sent successfully. We will contact you shortly.",
    "toast-fill-review": "Please fill in all review fields.",
    "toast-select-rating": "Please select a star rating (1 to 5 stars).",
    "toast-review-success": "Thank you! Your review has been posted successfully.",
    "review-1-text": "The ventilation in these 2BHK flats is amazing. Clean, spacious bedrooms with two attached bathrooms. The owner is highly responsive and maintains the building very well.",
    "review-2-text": "Spent a wonderful year here. Direct contact with the owner meant there was never any delay with maintenance requests. Fully satisfied with the amenities.",
    "review-no-posted-title": "No Reviews Posted Yet",
    "review-no-posted-desc": "Be the first to share your rental experience! Submit a review using the form."
  },
  hi: {
    "logo-title": "श्री वेंकटेश्वर",
    "logo-subtitle": "रेंटल्स",
    "seo-title": "श्री वेंकटेश्वर रेंटल्स | कंबम में किराए के लिए किफायती 2BHK घर",
    "seo-desc": "कंबम, मार्कापुरम में 2 अटैच्ड बाथरूम, बालकनी और कवर्ड पार्किंग के साथ गुणवत्तापूर्ण, आरामदायक और किफायती 2BHK किराए के घर। मालिक से सीधे संपर्क करें।",
    "nav-home": "होम",
    "nav-details": "संपत्ति का विवरण",
    "nav-amenities": "सुविधाएं",
    "nav-gallery": "गैलरी",
    "nav-about": "हमारे बारे में",
    "nav-contact": "संपर्क करें",
    "btn-rent-now": "अभी किराए पर लें",
    "btn-call-owner": "मालिक को कॉल करें",
    "btn-whatsapp": "व्हाट्सएप चैट",
    "mobile-lang-title": "भाषा चुनें / Select Language",
    "hero-badge": "सत्यापित 2BHK घर",
    "hero-title": "श्री वेंकटेश्वर रेंटल्स",
    "hero-subtitle": "किफायती 2BHK घर किराए के लिए",
    "hero-desc": "अटैच्ड बाथरूम के साथ साफ, आरामदायक और किफायती 2BHK घर खोजें। हम सीधे मालिक से संपर्क और परेशानी मुक्त किराये का अनुभव प्रदान करते हैं।",
    "hero-btn-details": "विवरण देखें",
    "hero-btn-contact": "संपर्क करें",
    "details-badge": "घर की विशेषताएं",
    "details-title": "संपत्ति का विवरण और संपर्क",
    "details-about-title": "इस घर के बारे में",
    "details-about-desc": "यह इमारत साफ, विशाल और हवादार 2BHK फ्लैट लेआउट प्रदान करती है। प्रत्येक घर स्वतंत्र वेंटिलेशन, आधुनिक मॉड्यूलर रसोई, उपयोगिता स्थान और विशाल बालकनी के साथ डिज़ाइन किया गया है। मानक सुरक्षा, 24/7 पानी की आपूर्ति और आसान परिवहन संपर्क की सुविधा है।",
    "pricing-badge": "किराया दर",
    "pricing-value": "कीमत के लिए मालिक से संपर्क करें",
    "pricing-desc": "मालिक से सीधे बात करके सर्वोत्तम दरें प्राप्त करें। कोई ब्रोकरेज नहीं, सीधी बुकिंग।",
    "pricing-info": "कस्टम लीज शर्तों, मासिक किराए और सुरक्षा जमा पर सीधे चर्चा करें। कोई ब्रोकरेज शुल्क नहीं।",
    "specs-title": "संपत्ति विनिर्देशों",
    "spec-label-beds": "शयनकक्ष",
    "spec-val-beds": "2 BHK लेआउट",
    "spec-label-baths": "बाथरूम",
    "spec-val-baths": "2 अटैच्ड",
    "spec-label-furnishing": "फर्नीचर",
    "spec-val-furnishing": "सेमी-फर्निश्ड",
    "spec-label-size": "फ्लैट का आकार",
    "spec-val-size": "1150 वर्ग फीट",
    "detail-label-floors": "उपलब्ध मंजलें",
    "detail-val-floors": "कई मंजिलें",
    "detail-label-balcony": "बालकनी की स्थिति",
    "detail-val-balcony": "हवादार बालकनी",
    "detail-label-parking": "पार्किंग आवंटन",
    "detail-val-parking": "कवर्ड कार और बाइक",
    "amenities-badge": "मानक सुविधाएं",
    "amenities-title": "सुविधाएं जो हम प्रदान करते हैं",
    "amenities-desc": "सभी घरों को आराम और उपयोगिता सुनिश्चित करने के लिए डिज़ाइन किया गया है, जिसमें उच्च-स्तरीय दैनिक आवश्यक वस्तुएं शामिल हैं।",
    "amenity-1-title": "अटैच्ड बाथरूम",
    "amenity-1-desc": "पूरी टाइलिंग और प्रीमियम नल",
    "amenity-2-title": "24/7 पानी की आपूर्ति",
    "amenity-2-desc": "समर्पित पानी के टैंक",
    "amenity-3-title": "आरक्षित पार्किंग",
    "amenity-3-desc": "कवर्ड कार और बाइक स्लॉट",
    "amenity-4-title": "बिजली का बैकअप",
    "amenity-4-desc": "अलग बिजली के मीटर",
    "amenity-5-title": "बालकनी",
    "amenity-5-desc": "विशाल और हवादार",
    "amenity-6-title": "आधुनिक रसोई",
    "amenity-6-desc": "ग्रेनाइट प्लेटफॉर्म और लकड़ी की अलमारी",
    "amenity-7-title": "सार्वजनिक परिवहन",
    "amenity-7-desc": "मुख्य पारगमन स्टॉप के पास स्थित",
    "amenity-8-title": "परिवार के अनुकूल",
    "amenity-8-desc": "शांत और सुरक्षित पारिवारिक वातावरण",
    "gallery-badge": "संपत्ति के वास्तविक दृश्य",
    "gallery-title": "फोटो गैलरी",
    "gallery-desc": "इमारत के सामने के मुखौटे और संरचनात्मक ऊंचाई के चित्र।",
    "why-badge": "हमारी प्रतिबद्धताएं",
    "why-title": "हमसे ही क्यों किराए पर लें?",
    "why-desc": "हम पूर्ण पारदर्शिता के साथ सीधे मालिक से उत्कृष्ट किराये के मानक प्रदान करते हैं।",
    "commit-1-title": "सीधी बुकिंग",
    "commit-1-desc": "कीमत और पुष्टि के लिए सीधे मालिक से बात करें। कोई छिपा हुआ ब्रोकरेज शुल्क या बिचौलिया नहीं।",
    "commit-2-title": "सत्यापित संपत्तियां",
    "commit-2-desc": "सभी लिस्टिंग विवरण, लेआउट कॉन्फ़िगरेशन और तस्वीरें 100% वास्तविक हैं और साइट पर सत्यापित हैं।",
    "commit-3-title": "साफ और रखरखाव",
    "commit-3-desc": "चाबी सौंपने से पहले घरों की गहरी सफाई, पूर्ण स्वच्छता और हार्डवेयर की जाँच की जाती है।",
    "commit-4-title": "त्वरित सहायता",
    "commit-4-desc": "आपके किराये की अवधि के दौरान सामान्य बिजली, नलसाजी या रखरखाव के अनुरोधों के लिए त्वरित प्रतिक्रिया।",
    "review-badge": "ग्राहक समीक्षाएं",
    "review-title": "किरायेदार प्रशंसापत्र",
    "review-list-title": "किरायेदार प्रतिक्रिया",
    "review-list-subtitle": "समीक्षाएं",
    "review-form-title": "समीक्षा लिखें",
    "review-form-rating-label": "आपकी रेटिंग *",
    "review-form-name-label": "नाम *",
    "review-form-name-placeholder": "आपका नाम",
    "review-form-status-label": "किरायेदार की स्थिति *",
    "status-current": "वर्तमान किरायेदार",
    "status-past": "पूर्व किरायेदार",
    "status-guest": "सत्यापित अतिथि",
    "review-form-text-label": "समीक्षा *",
    "review-form-text-placeholder": "यहाँ रहने के अपने अनुभव को साझा करें...",
    "btn-submit-review": "समीक्षा भेजें",
    "about-badge": "हम कौन हैं",
    "about-title": "श्री वेंकटेश्वर रेंटल्स के बारे में",
    "about-desc-1": "हम किफायती दरों पर अटैच्ड बाथरूम के साथ गुणवत्तापूर्ण 2BHK किराये के घर प्रदान करते हैं। हमारा मिशन परिवारों को सीधे मालिक से संपर्क, विश्वसनीय सहायता और सुचारू किराये के अनुभव के साथ आरामदायक घर खोजने में मदद करना है।",
    "about-desc-2": "उच्च मानक वाले आवासीय स्थान प्रदान करने के दृष्टिकोण के साथ स्थापित, हम बिचौलियों को खत्म करते हैं, जिससे किरायेदारों को सीधे मालिक से संपर्क मिलता है। यह सीधा समन्वय तत्काल समस्या समाधान और उचित सुरक्षा जमा धनवापसी की गारंटी देता है।",
    "about-desc-3": "हमारा संरचनात्मक डिज़ाइन आधुनिक प्रकाश और वेंटिलेशन मानकों का पूर्ण अनुपालन सुनिश्चित करता है, और सभी फ्लैटों को प्राचीन स्थिति में बनाए रखा जाता है।",
    "about-stat-1": "किरायेदार संतुष्टि",
    "about-stat-2": "पानी की आपूर्ति",
    "about-stat-3": "कोई दलाली शुल्क नहीं",
    "contact-badge": "संपर्क में रहें",
    "contact-title": "संपर्क करें",
    "contact-desc": "हमारे घरों को देखने में रुचि रखते हैं? हमें एक संदेश भेजें या सीधे संपत्ति के मालिक से संपर्क करें।",
    "contact-info-title": "संपर्क जानकारी",
    "contact-info-call": "मालिक को कॉल करें",
    "contact-info-whatsapp": "व्हाट्सएप चैट",
    "contact-info-email": "हमें ईमेल करें",
    "contact-info-location": "संपत्ति का स्थान",
    "contact-info-address": "श्री वेंकटेश्वर रेंटल्स, कंदुलापुरम रोड, कंबम, मार्कापुरम जिला, आंध्र प्रदेश 523333",
    "contact-info-coords": "निर्देशांक: 15.591705552455627, 79.1172781637055",
    "contact-form-title": "संदेश भेजें",
    "contact-form-name-label": "नाम *",
    "contact-form-name-placeholder": "आपका पूरा नाम",
    "contact-form-phone-label": "फ़ोन नंबर *",
    "contact-form-phone-placeholder": "10-अंकीय मोबाइल नंबर",
    "contact-form-email-label": "ईमेल पता (वैकल्पिक)",
    "contact-form-email-placeholder": "आपका ईमेल पता",
    "contact-form-message-label": "संदेश *",
    "contact-form-message-placeholder": "लिखें कि आप संपत्ति पर जाने की योजना कब बना रहे हैं या कोई अन्य पूछताछ...",
    "btn-submit-contact": "संदेश भेजें",
    "footer-desc": "कंबम में सीधे मालिक से आधुनिक सुविधाओं के साथ गुणवत्तापूर्ण, आरामदायक और किफायती 2BHK किराये के घर।",
    "footer-links-title": "त्वरित लिंक",
    "footer-legal-title": "जानकारी",
    "footer-legal-p1": "कोई दलाली शुल्क नहीं",
    "footer-legal-p2": "सीधा मालिक अनुबंध",
    "footer-contact-title": "संपर्क विवरण",
    "footer-copyright": "© 2026 श्री वेंकटेश्वर रेंटल्स। सर्वाधिकार सुरक्षित।",
    "footer-privacy": "गोपनीयता नीति",
    "footer-terms": "नियम एवं शर्तें",
    "lightbox-of": "का",
    "lightbox-default-caption": "छवि विवरण",
    "toast-fill-fields": "कृपया सभी आवश्यक फ़ील्ड (*) भरें।",
    "toast-valid-phone": "कृपया एक मान्य फ़ोन नंबर दर्ज करें।",
    "toast-contact-success": "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।",
    "toast-fill-review": "कृपया सभी समीक्षा फ़ील्ड भरें।",
    "toast-select-rating": "कृपया स्टार रेटिंग चुनें (1 से 5 स्टार)।",
    "toast-review-success": "धन्यवाद! आपकी समीक्षा सफलतापूर्वक पोस्ट कर दी गई है।",
    "review-1-text": "इन 2BHK फ्लैटों में वेंटिलेशन अद्भुत है। दो अटैच्ड बाथरूम के साथ साफ, विशाल शयनकक्ष। मालिक अत्यधिक प्रतिक्रियाशील हैं और इमारत का बहुत अच्छी तरह से रखरखाव करते हैं।",
    "review-2-text": "यहाँ एक शानदार वर्ष बिताया। मालिक से सीधे संपर्क का मतलब था कि रखरखाव के अनुरोधों में कभी देरी नहीं हुई। सुविधाओं से पूरी तरह संतुष्ट हूँ।",
    "review-no-posted-title": "अभी तक कोई समीक्षा पोस्ट नहीं की गई है",
    "review-no-posted-desc": "अपने किराये के अनुभव को साझा करने वाले पहले व्यक्ति बनें! फॉर्म का उपयोग करके एक समीक्षा सबमिट करें।"
  }
};

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
  // Load persisted language or default to Telugu ('te')
  const savedLang = localStorage.getItem("srivenkateswara_lang");
  currentLanguage = savedLang === "en" || savedLang === "hi" || savedLang === "te" ? savedLang : "te";

  initApp();
  setLanguage(currentLanguage);
});

// Initialization function
function initApp() {
  // 1. Setup header scroll effect
  setupScrollEffects();

  // 2. Setup dark mode toggle
  setupDarkMode();

  // 3. Setup mobile hamburger menu
  setupMobileMenu();

  // 4. Setup lightbox clicks
  setupLightboxPopups();

  // 5. Setup contact form handling
  setupContactForm();

  // 6. Setup reviews system
  setupReviewsSystem();

  // 7. Setup language switcher events
  setupLanguageSwitcher();
}

// Scroll effects
function setupScrollEffects() {
  const header = document.getElementById("header");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    // Nav changes style on scroll
    if (window.scrollY > 40) {
      header.classList.remove("bg-transparent", "border-transparent");
      header.classList.add("glass-nav", "shadow-md");
    } else {
      header.classList.remove("glass-nav", "shadow-md");
      header.classList.add("bg-transparent", "border-transparent");
    }

    // Back to top button appear/disappear
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-5");
      backToTopBtn.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-5");
      backToTopBtn.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
    }
  });

  // Back to top click behavior
  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Dark Mode Toggle
function setupDarkMode() {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const toggleBtnMobile = document.getElementById("dark-mode-toggle-mobile");
  
  // Set theme from localStorage or system preference
  if (localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    updateThemeUI(true);
  } else {
    document.documentElement.classList.remove("dark");
    updateThemeUI(false);
  }

  // Add click listeners
  toggleBtn?.addEventListener("click", toggleTheme);
  toggleBtnMobile?.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    updateThemeUI(false);
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateThemeUI(true);
  }
}

function updateThemeUI(isDark) {
  const icons = document.querySelectorAll(".dark-mode-icon");
  const texts = document.querySelectorAll(".dark-mode-text");

  icons.forEach(icon => {
    if (isDark) {
      icon.className = "fa-solid fa-sun dark-mode-icon text-amber-400";
    } else {
      icon.className = "fa-solid fa-moon dark-mode-icon text-slate-600 dark:text-slate-300";
    }
  });

  texts.forEach(text => {
    text.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

// Mobile Hamburger Menu
function setupMobileMenu() {
  const burger = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    
    // Toggle hamburger icon between bars and times
    const icon = burger.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });

  // Close menu on link click
  links.forEach(l => {
    l.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      const icon = burger.querySelector("i");
      if (icon) {
        icon.className = "fa-solid fa-bars text-xl";
      }
    });
  });
}

// Setup Gallery Lightbox Trigger
function setupLightboxPopups() {
  const galleryItems = document.querySelectorAll(".gallery-trigger");
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  // Lightbox controllers
  document.getElementById("lightbox-close-btn")?.addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev-btn")?.addEventListener("click", () => shiftLightbox(-1));
  document.getElementById("lightbox-next-btn")?.addEventListener("click", () => shiftLightbox(1));
  document.getElementById("lightbox-popup")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("lightbox-popup")) closeLightbox();
  });

  // Keypress handler (Escape to close lightbox, arrows to cycle photos)
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox-popup");
    if (lightbox && lightbox.classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") shiftLightbox(-1);
      if (e.key === "ArrowRight") shiftLightbox(1);
    }
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();

  const lightbox = document.getElementById("lightbox-popup");
  lightbox.classList.add("active");
  document.body.classList.add("lightbox-active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox-popup");
  lightbox.classList.remove("active");
  document.body.classList.remove("lightbox-active");
}

function shiftLightbox(direction) {
  const total = galleryImages.length;
  currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
  updateLightbox();
}

function updateLightbox() {
  const item = galleryImages[currentLightboxIndex];
  if (!item) return;

  document.getElementById("lightbox-img").src = item.src;
  document.getElementById("lightbox-caption").textContent = item.caption;
  document.getElementById("lightbox-counter").textContent = `${currentLightboxIndex + 1} of ${galleryImages.length}`;
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform validation
    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const message = document.getElementById("form-message").value.trim();

    if (!name || !phone || !message) {
      showFormToast(translations[currentLanguage]["toast-fill-fields"], "error");
      return;
    }

    if (phone.length < 10) {
      showFormToast(translations[currentLanguage]["toast-valid-phone"], "error");
      return;
    }

    // Show success modal
    showFormToast(translations[currentLanguage]["toast-contact-success"], "success");
    form.reset();
  });
}

// Reviews System Logic
function setupReviewsSystem() {
  // Load reviews from localStorage
  const savedReviews = localStorage.getItem("srivenkateswara_reviews");
  if (savedReviews) {
    tenantReviews = JSON.parse(savedReviews);
  } else {
    // Seed default reviews
    tenantReviews = [
      {
        id: 1,
        name: "Ravi Kumar",
        status: "Current Tenant",
        rating: 5,
        text: "The ventilation in these 2BHK flats is amazing. Clean, spacious bedrooms with two attached bathrooms. The owner is highly responsive and maintains the building very well.",
        date: "15 Jun 2026",
        translationKey: "review-1"
      },
      {
        id: 2,
        name: "Prasad Rao",
        status: "Past Tenant",
        rating: 5,
        text: "Spent a wonderful year here. Direct contact with the owner meant there was never any delay with maintenance requests. Fully satisfied with the amenities.",
        date: "10 Apr 2026",
        translationKey: "review-2"
      }
    ];
    localStorage.setItem("srivenkateswara_reviews", JSON.stringify(tenantReviews));
  }

  // Render initial reviews list
  renderReviews();

  // Setup Star Selection highlights
  const stars = document.querySelectorAll(".review-star-select");
  stars.forEach(star => {
    star.addEventListener("click", (e) => {
      selectedRating = parseInt(e.currentTarget.getAttribute("data-rating"));
      updateStarRatingUI();
    });

    star.addEventListener("mouseenter", (e) => {
      const hoverRating = parseInt(e.currentTarget.getAttribute("data-rating"));
      highlightStars(hoverRating);
    });

    star.addEventListener("mouseleave", () => {
      highlightStars(selectedRating);
    });
  });

  // Setup Review Form submission
  const reviewForm = document.getElementById("review-form");
  reviewForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("review-name").value.trim();
    const status = document.getElementById("review-status").value;
    const text = document.getElementById("review-text").value.trim();

    if (!name || !text) {
      showFormToast(translations[currentLanguage]["toast-fill-review"], "error");
      return;
    }

    if (selectedRating === 0) {
      showFormToast(translations[currentLanguage]["toast-select-rating"], "error");
      return;
    }

    // Create review object
    const newReview = {
      id: Date.now(),
      name: name,
      status: status,
      rating: selectedRating,
      text: text,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    // Add to list and save
    tenantReviews.unshift(newReview); // Newest reviews on top
    localStorage.setItem("srivenkateswara_reviews", JSON.stringify(tenantReviews));

    // Reset state & form
    selectedRating = 0;
    updateStarRatingUI();
    reviewForm.reset();

    // Render list and show alert
    renderReviews();
    showFormToast(translations[currentLanguage]["toast-review-success"], "success");
  });
}

function highlightStars(rating) {
  const stars = document.querySelectorAll(".review-star-select");
  stars.forEach(star => {
    const starRating = parseInt(star.getAttribute("data-rating"));
    const icon = star.querySelector("i");
    if (icon) {
      if (starRating <= rating) {
        icon.className = "fa-solid fa-star text-amber-400 text-xl sm:text-2xl cursor-pointer transition-colors";
      } else {
        icon.className = "fa-regular fa-star text-slate-300 dark:text-slate-600 text-xl sm:text-2xl cursor-pointer transition-colors";
      }
    }
  });
}

function updateStarRatingUI() {
  highlightStars(selectedRating);
}

function renderReviews() {
  const reviewsContainer = document.getElementById("reviews-list-container");
  if (!reviewsContainer) return;

  if (tenantReviews.length === 0) {
    const noReviewsTitle = translations[currentLanguage]["review-no-posted-title"] || "No Reviews Posted Yet";
    const noReviewsDesc = translations[currentLanguage]["review-no-posted-desc"] || "Be the first to share your rental experience! Submit a review using the form.";
    reviewsContainer.innerHTML = `
      <div class="text-center py-10 px-4 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/40">
        <div class="w-14 h-14 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 text-xl mb-4">
          <i class="fa-solid fa-comments"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">${noReviewsTitle}</h4>
        <p class="text-slate-400 dark:text-slate-500 text-xs font-body max-w-xs mx-auto">
          ${noReviewsDesc}
        </p>
      </div>
    `;
    return;
  }

  reviewsContainer.innerHTML = tenantReviews.map(r => {
    // Generate star icons
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= r.rating) {
        starsHtml += `<i class="fa-solid fa-star text-amber-400 text-xs"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star text-slate-300 dark:text-slate-600 text-xs"></i>`;
      }
    }

    // Initials for avatar
    const initials = r.name.substring(0, 2).toUpperCase();

    // Translate status and text if translation mapping exists
    const textToShow = r.translationKey && translations[currentLanguage] && translations[currentLanguage][r.translationKey + "-text"]
                       ? translations[currentLanguage][r.translationKey + "-text"]
                       : r.text;

    let statusToShow = r.status;
    if (r.status === "Current Tenant") {
      statusToShow = translations[currentLanguage]["status-current"] || r.status;
    } else if (r.status === "Past Tenant") {
      statusToShow = translations[currentLanguage]["status-past"] || r.status;
    } else if (r.status === "Verified Guest") {
      statusToShow = translations[currentLanguage]["status-guest"] || r.status;
    }

    return `
      <div class="bg-slate-50/80 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 p-5 rounded-2xl animate-fade-in-up">
        <div class="flex items-center justify-between mb-3.5">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-blue-light flex items-center justify-center font-bold text-xs shadow-inner">
              ${initials}
            </div>
            <div>
              <span class="font-bold text-sm text-slate-900 dark:text-white block leading-tight">${r.name}</span>
              <span class="text-[10px] text-slate-400 block mt-0.5">${statusToShow}</span>
            </div>
          </div>
          <span class="text-[10px] text-slate-400 font-body">${r.date}</span>
        </div>
        
        <div class="flex space-x-1 mb-2.5">
          ${starsHtml}
        </div>
        
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body">
          "${textToShow}"
        </p>
      </div>
    `;
  }).join('');
}

function showFormToast(msg, type) {
  const toast = document.getElementById("form-toast");
  const toastMsg = document.getElementById("form-toast-message");
  const toastIcon = document.getElementById("form-toast-icon");

  if (!toast || !toastMsg || !toastIcon) return;

  toastMsg.textContent = msg;

  if (type === "success") {
    toast.className = "fixed bottom-24 right-4 md:right-8 glass-card border-l-4 border-emerald-500 rounded-xl shadow-2xl p-4 flex items-start max-w-sm z-50 animate-fade-in-up dark:bg-slate-800/95 bg-white/95 text-slate-800 dark:text-slate-100";
    toastIcon.className = "fa-solid fa-circle-check text-emerald-500 text-xl mr-3 mt-0.5";
  } else {
    toast.className = "fixed bottom-24 right-4 md:right-8 glass-card border-l-4 border-red-500 rounded-xl shadow-2xl p-4 flex items-start max-w-sm z-50 animate-fade-in-up dark:bg-slate-800/95 bg-white/95 text-slate-800 dark:text-slate-100";
    toastIcon.className = "fa-solid fa-circle-exclamation text-red-500 text-xl mr-3 mt-0.5";
  }

  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}

// Setup Language Switcher Dropdown & Grids
function setupLanguageSwitcher() {
  const dropdownBtn = document.getElementById("language-dropdown-btn");
  const dropdownMenu = document.getElementById("language-dropdown-menu");
  const desktopOptions = document.querySelectorAll(".lang-option-btn");
  const mobileOptions = document.querySelectorAll(".lang-option-btn-mobile");

  // Toggle desktop dropdown
  dropdownBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = dropdownMenu.classList.contains("hidden");
    if (isHidden) {
      dropdownMenu.classList.remove("hidden");
      setTimeout(() => {
        dropdownMenu.classList.remove("scale-95", "opacity-0");
        dropdownMenu.classList.add("scale-100", "opacity-100");
      }, 10);
    } else {
      closeLanguageDropdown();
    }
  });

  // Close dropdown on click outside
  document.addEventListener("click", () => {
    closeLanguageDropdown();
  });

  function closeLanguageDropdown() {
    if (!dropdownMenu || dropdownMenu.classList.contains("hidden")) return;
    dropdownMenu.classList.remove("scale-100", "opacity-100");
    dropdownMenu.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 200);
  }

  // Desktop options click
  desktopOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      const lang = opt.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Mobile options click
  mobileOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      const lang = opt.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
}

// Set Active Language State
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("srivenkateswara_lang", lang);
  updateLanguageUI(lang);
}

// Update DOM elements on language switch
function updateLanguageUI(lang) {
  // Set html element lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Update SEO Page Title
  if (translations[lang]["seo-title"]) {
    document.title = translations[lang]["seo-title"];
  }

  // Update SEO Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang]["seo-desc"]) {
    metaDesc.setAttribute("content", translations[lang]["seo-desc"]);
  }

  // Translate all text elements with data-i18n
  const translatables = document.querySelectorAll("[data-i18n]");
  translatables.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate placeholders
  const placeholdables = document.querySelectorAll("[data-i18n-placeholder]");
  placeholdables.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update Lightbox caption/counter references if active
  const lightboxCounter = document.getElementById("lightbox-counter");
  if (lightboxCounter) {
    const splitText = lightboxCounter.textContent.split(" ");
    if (splitText.length === 3) {
      lightboxCounter.textContent = `${splitText[0]} ${translations[lang]["lightbox-of"] || "of"} ${splitText[2]}`;
    }
  }

  // Update desktop dropdown UI selection
  const langNames = { te: "తెలుగు", en: "English", hi: "हिन्दी" };
  const currentLangText = document.getElementById("current-language-text");
  if (currentLangText) {
    currentLangText.textContent = langNames[lang] || "English";
  }

  // Checkmark in desktop dropdown options
  const checkmarks = ["te", "en", "hi"];
  checkmarks.forEach(c => {
    const checkEl = document.getElementById(`check-${c}`);
    if (checkEl) {
      if (c === lang) {
        checkEl.classList.remove("hidden");
      } else {
        checkEl.classList.add("hidden");
      }
    }
  });

  // Active state styling in mobile grid buttons
  const mobileOptions = document.querySelectorAll(".lang-option-btn-mobile");
  mobileOptions.forEach(opt => {
    const optLang = opt.getAttribute("data-lang");
    if (optLang === lang) {
      opt.className = "lang-option-btn-mobile px-3 py-2 rounded-xl text-xs font-bold border-2 border-brand-blue dark:border-brand-blue-light text-center transition-all bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue dark:text-brand-blue-light focus:outline-none";
    } else {
      opt.className = "lang-option-btn-mobile px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-center transition-all bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none";
    }
  });

  // Re-render dynamic reviews list with translated status & description values
  renderReviews();
}

