export type Language = "en" | "am"

export interface Translations {
  // Navigation
  nav: {
    home: string
    scholarships: string
    about: string
    contact: string
    dashboard: string
    applyNow: string
    login: string
    logout: string
  }
  // Home page
  home: {
    heroTitle: string
    heroSubtitle: string
    getStarted: string
    seePackages: string
    featuredScholarships: string
    latestOpportunities: string
    viewAll: string
    ourServices: string
    servicesSubtitle: string
    whyChooseUs: string
    expertGuidance: string
    expertGuidanceDesc: string
    personalizedSupport: string
    personalizedSupportDesc: string
    affordablePackages: string
    affordablePackagesDesc: string
    provenSuccess: string
    provenSuccessDesc: string
    learnMore: string
    successStories: string
    successStoriesSubtitle: string
    readyToStart: string
    readyToStartDesc: string
    contactUs: string
  }
  // Common
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    save: string
    edit: string
    delete: string
    submit: string
    next: string
    previous: string
    close: string
    search: string
    filter: string
    clear: string
    download: string
    upload: string
    required: string
    optional: string
    selectAll: string
    none: string
    all: string
  }
  // Scholarships
  scholarships: {
    title: string
    subtitle: string
    searchPlaceholder: string
    country: string
    degreeLevel: string
    allCountries: string
    allDegrees: string
    bachelor: string
    master: string
    phd: string
    deadline: string
    university: string
    field: string
    details: string
    apply: string
    showing: string
    of: string
    noResults: string
    noResultsDesc: string
    resetFilters: string
  }
  // Application form
  application: {
    title: string
    subtitle: string
    personalInfo: string
    personalInfoDesc: string
    fullName: string
    email: string
    phone: string
    selectScholarships: string
    selectScholarshipsDesc: string
    uploadDocuments: string
    uploadDocumentsDesc: string
    cv: string
    sop: string
    transcript: string
    passport: string
    additionalInfo: string
    additionalInfoPlaceholder: string
    servicePackage: string
    servicePackageDesc: string
    paymentMethod: string
    orderSummary: string
    selectedService: string
    numberOfScholarships: string
    total: string
    submitApplication: string
    acceptedFormats: string
    maxFileSize: string
  }
  // Dashboard
  dashboard: {
    title: string
    subtitle: string
    overview: string
    applications: string
    messages: string
    profile: string
    settings: string
    totalApplications: string
    inProgress: string
    submitted: string
    complete: string
    recentApplications: string
    recentMessages: string
    viewAllApplications: string
    viewAllMessages: string
    newApplication: string
    myApplications: string
    myProfile: string
    notificationPreferences: string
    documents: string
    uploadedOn: string
  }
  // Services
  services: {
    basicEditing: string
    basicEditingDesc: string
    fullApplication: string
    fullApplicationDesc: string
    cvSopCreation: string
    cvSopCreationDesc: string
    selectPackage: string
    features: string
  }
  // Status
  status: {
    inProgress: string
    submitted: string
    complete: string
    pending: string
    approved: string
    rejected: string
  }
  // Messages
  messages: {
    from: string
    subject: string
    date: string
    read: string
    unread: string
    new: string
    sendMessage: string
    messageContent: string
    reply: string
  }
  // Footer
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    location: string
    email: string
    phone: string
    termsOfService: string
    privacyPolicy: string
    allRightsReserved: string
  }
  // Admin
  admin: {
    dashboard: string
    subtitle: string
    studentApplications: string
    studentManagement: string
    documentManagement: string
    sendMessages: string
    totalApplications: string
    pendingReview: string
    activeStudents: string
    successRate: string
    filterByStatus: string
    updateStatus: string
    uploadFinalDocuments: string
    selectApplication: string
    documentType: string
    finalCV: string
    finalSOP: string
    completeApplication: string
    otherDocument: string
    uploadDocument: string
    sendMessageToStudent: string
    selectStudent: string
    messageSubject: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      scholarships: "Scholarships",
      about: "About Us",
      contact: "Contact",
      dashboard: "Dashboard",
      applyNow: "Apply Now",
      login: "Login",
      logout: "Log Out",
    },
    home: {
      heroTitle: "We Apply for You — You Focus on Winning",
      heroSubtitle:
        "Scholar4Ethio helps Ethiopian students apply for international scholarships by offering full application support, document editing, and curated opportunities.",
      getStarted: "Get Started",
      seePackages: "See Packages",
      featuredScholarships: "Featured Scholarships",
      latestOpportunities: "Latest opportunities for Ethiopian students",
      viewAll: "View All",
      ourServices: "Our Services",
      servicesSubtitle: "We offer comprehensive support to help you secure international scholarships",
      whyChooseUs: "Why Choose Scholar4Ethio?",
      expertGuidance: "Expert Guidance",
      expertGuidanceDesc: "Our team has helped hundreds of students secure scholarships worldwide",
      personalizedSupport: "Personalized Support",
      personalizedSupportDesc: "We tailor our services to your specific needs and scholarship requirements",
      affordablePackages: "Affordable Packages",
      affordablePackagesDesc: "Our services are priced with Ethiopian students in mind",
      provenSuccess: "Proven Success Rate",
      provenSuccessDesc: "Over 80% of our clients successfully secure their target scholarships",
      learnMore: "Learn More About Us",
      successStories: "Success Stories",
      successStoriesSubtitle: "Hear from Ethiopian students who achieved their dreams with our help",
      readyToStart: "Ready to Start Your Scholarship Journey?",
      readyToStartDesc: "Let us help you navigate the application process and increase your chances of success",
      contactUs: "Contact Us",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      submit: "Submit",
      next: "Next",
      previous: "Previous",
      close: "Close",
      search: "Search",
      filter: "Filter",
      clear: "Clear",
      download: "Download",
      upload: "Upload",
      required: "Required",
      optional: "Optional",
      selectAll: "Select All",
      none: "None",
      all: "All",
    },
    scholarships: {
      title: "Available Scholarships",
      subtitle: "Browse and filter through our curated list of international scholarships for Ethiopian students",
      searchPlaceholder: "Search scholarships...",
      country: "Country",
      degreeLevel: "Degree Level",
      allCountries: "All Countries",
      allDegrees: "All Degrees",
      bachelor: "Bachelor",
      master: "Master",
      phd: "PhD",
      deadline: "Deadline",
      university: "University",
      field: "Field",
      details: "Details",
      apply: "Apply",
      showing: "Showing",
      of: "of",
      noResults: "No scholarships found",
      noResultsDesc: "Try adjusting your filters or search terms",
      resetFilters: "Reset Filters",
    },
    application: {
      title: "Application Request",
      subtitle: "Fill out the form below to request our scholarship application support services",
      personalInfo: "Personal Information",
      personalInfoDesc: "Please provide your contact details",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      selectScholarships: "Select Scholarships",
      selectScholarshipsDesc: "Choose one or more scholarships you want to apply for",
      uploadDocuments: "Upload Documents",
      uploadDocumentsDesc: "Please upload the required documents for your application",
      cv: "CV/Resume",
      sop: "Statement of Purpose",
      transcript: "Academic Transcript",
      passport: "Passport Copy",
      additionalInfo: "Additional Information (Optional)",
      additionalInfoPlaceholder: "Any additional information you want to share with us",
      servicePackage: "Select Service Package",
      servicePackageDesc: "Choose the service package that best fits your needs",
      paymentMethod: "Payment Method",
      orderSummary: "Order Summary",
      selectedService: "Selected Service:",
      numberOfScholarships: "Number of Scholarships:",
      total: "Total:",
      submitApplication: "Submit Application",
      acceptedFormats: "Accepted formats: PDF, DOC, DOCX",
      maxFileSize: "Max 5MB",
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Manage your applications",
      overview: "Overview",
      applications: "Applications",
      messages: "Messages",
      profile: "Profile",
      settings: "Settings",
      totalApplications: "Total Applications",
      inProgress: "In Progress",
      submitted: "Submitted",
      complete: "Complete",
      recentApplications: "Recent Applications",
      recentMessages: "Recent Messages",
      viewAllApplications: "View All Applications",
      viewAllMessages: "View All Messages",
      newApplication: "New Application",
      myApplications: "My Applications",
      myProfile: "My Profile",
      notificationPreferences: "Notification Preferences",
      documents: "Documents",
      uploadedOn: "Uploaded on",
    },
    services: {
      basicEditing: "Basic Document Editing",
      basicEditingDesc: "Professional editing of your existing documents",
      fullApplication: "Full Application Submission",
      fullApplicationDesc: "Complete application management from start to finish",
      cvSopCreation: "CV/SOP Creation",
      cvSopCreationDesc: "Professional creation of CV and Statement of Purpose from scratch",
      selectPackage: "Select Package",
      features: "Features",
    },
    status: {
      inProgress: "In Progress",
      submitted: "Submitted",
      complete: "Complete",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
    },
    messages: {
      from: "From",
      subject: "Subject",
      date: "Date",
      read: "Read",
      unread: "Unread",
      new: "New",
      sendMessage: "Send Message",
      messageContent: "Message",
      reply: "Reply",
    },
    footer: {
      description: "Helping Ethiopian students achieve their academic dreams through international scholarships.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      location: "Addis Ababa, Ethiopia",
      email: "info@scholar4ethio.com",
      phone: "+251 91 234 5678",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      allRightsReserved: "All rights reserved.",
    },
    admin: {
      dashboard: "Admin Dashboard",
      subtitle: "Manage student applications and provide support",
      studentApplications: "Student Applications",
      studentManagement: "Student Management",
      documentManagement: "Document Management",
      sendMessages: "Send Messages",
      totalApplications: "Total Applications",
      pendingReview: "Pending Review",
      activeStudents: "Active Students",
      successRate: "Success Rate",
      filterByStatus: "Filter by status",
      updateStatus: "Update Status",
      uploadFinalDocuments: "Upload Final Documents",
      selectApplication: "Select Application",
      documentType: "Document Type",
      finalCV: "Final CV",
      finalSOP: "Final Statement of Purpose",
      completeApplication: "Complete Application",
      otherDocument: "Other Document",
      uploadDocument: "Upload Document",
      sendMessageToStudent: "Send Message to Student",
      selectStudent: "Select Student",
      messageSubject: "Subject",
    },
  },
  am: {
    nav: {
      home: "መነሻ",
      scholarships: "ስኮላርሺፖች",
      about: "ስለ እኛ",
      contact: "ያግኙን",
      dashboard: "ዳሽቦርድ",
      applyNow: "አሁን ያመልክቱ",
      login: "ግባ",
      logout: "ውጣ",
    },
    home: {
      heroTitle: "እኛ ለእርስዎ እናመለክታለን — እርስዎ በማሸነፍ ላይ ያተኩሩ",
      heroSubtitle:
        "Scholar4Ethio የኢትዮጵያ ተማሪዎች ለአለም አቀፍ ስኮላርሺፖች እንዲያመለክቱ ሙሉ የማመልከቻ ድጋፍ፣ የሰነድ አርትዖት እና የተመረጡ እድሎችን በማቅረብ ይረዳል።",
      getStarted: "ጀምር",
      seePackages: "ፓኬጆችን ይመልከቱ",
      featuredScholarships: "ተመራጭ ስኮላርሺፖች",
      latestOpportunities: "ለኢትዮጵያ ተማሪዎች የቅርብ ጊዜ እድሎች",
      viewAll: "ሁሉንም ይመልከቱ",
      ourServices: "የእኛ አገልግሎቶች",
      servicesSubtitle: "አለም አቀፍ ስኮላርሺፖችን ለማግኘት ሁሉን አቀፍ ድጋፍ እንሰጣለን",
      whyChooseUs: "ለምን Scholar4Ethio ይምረጡ?",
      expertGuidance: "የባለሙያ መመሪያ",
      expertGuidanceDesc: "የእኛ ቡድን በመቶዎች የሚቆጠሩ ተማሪዎች በዓለም ዙሪያ ስኮላርሺፕ እንዲያገኙ ረድቷል",
      personalizedSupport: "የግል ድጋፍ",
      personalizedSupportDesc: "አገልግሎታችንን ለእርስዎ ልዩ ፍላጎቶች እና የስኮላርሺፕ መስፈርቶች እናስተካክላለን",
      affordablePackages: "ተመጣጣኝ ፓኬጆች",
      affordablePackagesDesc: "አገልግሎታችን የኢትዮጵያ ተማሪዎችን ግምት ውስጥ በማስገባት የተዋጋ ነው",
      provenSuccess: "የተረጋገጠ የስኬት መጠን",
      provenSuccessDesc: "ከ80% በላይ የሚሆኑ ደንበኞቻችን የታለሙትን ስኮላርሺፕ በተሳካ ሁኔታ ያገኛሉ",
      learnMore: "ስለ እኛ የበለጠ ይወቁ",
      successStories: "የስኬት ታሪኮች",
      successStoriesSubtitle: "በእኛ እርዳታ ህልማቸውን ያሳኩ የኢትዮጵያ ተማሪዎችን ይስሙ",
      readyToStart: "የስኮላርሺፕ ጉዞዎን ለመጀመር ዝግጁ ነዎት?",
      readyToStartDesc: "የማመልከቻ ሂደቱን እንድናስተዳድር እና የስኬት እድልዎን እንድንጨምር ፍቀዱልን",
      contactUs: "ያግኙን",
    },
    common: {
      loading: "በመጫን ላይ...",
      error: "ስህተት",
      success: "ተሳክቷል",
      cancel: "ሰርዝ",
      save: "አስቀምጥ",
      edit: "አርትዕ",
      delete: "ሰርዝ",
      submit: "አስገባ",
      next: "ቀጣይ",
      previous: "ቀዳሚ",
      close: "ዝጋ",
      search: "ፈልግ",
      filter: "ማጣሪያ",
      clear: "አጽዳ",
      download: "አውርድ",
      upload: "ስቀል",
      required: "አስፈላጊ",
      optional: "አማራጭ",
      selectAll: "ሁሉንም ምረጥ",
      none: "ምንም",
      all: "ሁሉም",
    },
    scholarships: {
      title: "ያሉ ስኮላርሺፖች",
      subtitle: "ለኢትዮጵያ ተማሪዎች የተመረጡ አለም አቀፍ ስኮላርሺፖችን ይመልከቱ እና ያጣሩ",
      searchPlaceholder: "ስኮላርሺፖችን ፈልግ...",
      country: "ሀገር",
      degreeLevel: "የዲግሪ ደረጃ",
      allCountries: "ሁሉም ሀገሮች",
      allDegrees: "ሁሉም ዲግሪዎች",
      bachelor: "ባችለር",
      master: "ማስተር",
      phd: "ዶክትሬት",
      deadline: "የመጨረሻ ቀን",
      university: "ዩኒቨርሲቲ",
      field: "ዘርፍ",
      details: "ዝርዝሮች",
      apply: "አመልክት",
      showing: "በማሳየት ላይ",
      of: "ከ",
      noResults: "ምንም ስኮላርሺፕ አልተገኘም",
      noResultsDesc: "ማጣሪያዎችዎን ወይም የፍለጋ ቃሎችዎን ማስተካከል ይሞክሩ",
      resetFilters: "ማጣሪያዎችን ዳግም አስጀምር",
    },
    application: {
      title: "የማመልከቻ ጥያቄ",
      subtitle: "የስኮላርሺፕ ማመልከቻ ድጋፍ አገልግሎታችንን ለመጠየቅ ከዚህ በታች ያለውን ቅጽ ይሙሉ",
      personalInfo: "የግል መረጃ",
      personalInfoDesc: "እባክዎ የእርስዎን የመገናኛ ዝርዝሮች ያቅርቡ",
      fullName: "ሙሉ ስም",
      email: "ኢሜይል አድራሻ",
      phone: "ስልክ ቁጥር",
      selectScholarships: "ስኮላርሺፖችን ይምረጡ",
      selectScholarshipsDesc: "ማመልከት የሚፈልጉትን አንድ ወይም ከዚያ በላይ ስኮላርሺፖችን ይምረጡ",
      uploadDocuments: "ሰነዶችን ስቀል",
      uploadDocumentsDesc: "እባክዎ ለማመልከቻዎ የሚያስፈልጉትን ሰነዶች ይስቀሉ",
      cv: "ሲቪ/ሪዝዩሜ",
      sop: "የዓላማ መግለጫ",
      transcript: "የትምህርት ግልባጭ",
      passport: "የፓስፖርት ቅጂ",
      additionalInfo: "ተጨማሪ መረጃ (አማራጭ)",
      additionalInfoPlaceholder: "ከእኛ ጋር ማካፈል የሚፈልጉት ማንኛውም ተጨማሪ መረጃ",
      servicePackage: "የአገልግሎት ፓኬጅ ይምረጡ",
      servicePackageDesc: "ለእርስዎ ፍላጎት በጣም የሚስማማውን የአገልግሎት ፓኬጅ ይምረጡ",
      paymentMethod: "የክፍያ ዘዴ",
      orderSummary: "የትዕዛዝ ማጠቃለያ",
      selectedService: "የተመረጠ አገልግሎት:",
      numberOfScholarships: "የስኮላርሺፖች ቁጥር:",
      total: "ጠቅላላ:",
      submitApplication: "ማመልከቻ አስገባ",
      acceptedFormats: "የተቀበሉ ቅርጸቶች: PDF, DOC, DOCX",
      maxFileSize: "ከ5MB በላይ",
    },
    dashboard: {
      title: "ዳሽቦርድ",
      subtitle: "ማመልከቻዎችዎን ያስተዳድሩ",
      overview: "አጠቃላይ እይታ",
      applications: "ማመልከቻዎች",
      messages: "መልዕክቶች",
      profile: "መገለጫ",
      settings: "ቅንብሮች",
      totalApplications: "ጠቅላላ ማመልከቻዎች",
      inProgress: "በሂደት ላይ",
      submitted: "ተላክ",
      complete: "ተጠናቅቋል",
      recentApplications: "የቅርብ ጊዜ ማመልከቻዎች",
      recentMessages: "የቅርብ ጊዜ መልዕክቶች",
      viewAllApplications: "ሁሉንም ማመልከቻዎች ይመልከቱ",
      viewAllMessages: "ሁሉንም መልዕክቶች ይመልከቱ",
      newApplication: "አዲስ ማመልከቻ",
      myApplications: "የእኔ ማመልከቻዎች",
      myProfile: "የእኔ መገለጫ",
      notificationPreferences: "የማሳወቂያ ምርጫዎች",
      documents: "ሰነዶች",
      uploadedOn: "የተሰቀለበት",
    },
    services: {
      basicEditing: "መሰረታዊ የሰነድ አርትዖት",
      basicEditingDesc: "የእርስዎን ያሉ ሰነዶች ሙያዊ አርትዖት",
      fullApplication: "ሙሉ ማመልከቻ አቅርቦት",
      fullApplicationDesc: "ከመጀመሪያ እስከ መጨረሻ ሙሉ የማመልከቻ አስተዳደር",
      cvSopCreation: "ሲቪ/የዓላማ መግለጫ ፈጠራ",
      cvSopCreationDesc: "ከመጀመሪያ የሲቪ እና የዓላማ መግለጫ ሙያዊ ፈጠራ",
      selectPackage: "ፓኬጅ ይምረጡ",
      features: "ባህሪያት",
    },
    status: {
      inProgress: "በሂደት ላይ",
      submitted: "ተላክ",
      complete: "ተጠናቅቋል",
      pending: "በመጠባበቅ ላይ",
      approved: "ተቀባይነት አግኝቷል",
      rejected: "ውድቅ ሆኗል",
    },
    messages: {
      from: "ከ",
      subject: "ርዕስ",
      date: "ቀን",
      read: "ተነብቧል",
      unread: "አልተነበበም",
      new: "አዲስ",
      sendMessage: "መልዕክት ላክ",
      messageContent: "መልዕክት",
      reply: "መልስ",
    },
    footer: {
      description: "የኢትዮጵያ ተማሪዎች በአለም አቀፍ ስኮላርሺፖች የትምህርት ህልማቸውን እንዲያሳኩ መርዳት።",
      quickLinks: "ፈጣን አገናኞች",
      services: "አገልግሎቶች",
      contact: "ያግኙን",
      location: "አዲስ አበባ፣ ኢትዮጵያ",
      email: "info@scholar4ethio.com",
      phone: "+251 91 234 5678",
      termsOfService: "የአገልግሎት ውሎች",
      privacyPolicy: "የግላዊነት ፖሊሲ",
      allRightsReserved: "ሁሉም መብቶች የተጠበቁ ናቸው።",
    },
    admin: {
      dashboard: "የአስተዳዳሪ ዳሽቦርድ",
      subtitle: "የተማሪ ማመልከቻዎችን ያስተዳድሩ እና ድጋፍ ያቅርቡ",
      studentApplications: "የተማሪ ማመልከቻዎች",
      studentManagement: "የተማሪ አስተዳደር",
      documentManagement: "የሰነድ አስተዳደር",
      sendMessages: "መልዕክቶች ላክ",
      totalApplications: "ጠቅላላ ማመልከቻዎች",
      pendingReview: "በመጠባበቅ ላይ",
      activeStudents: "ንቁ ተማሪዎች",
      successRate: "የስኬት መጠን",
      filterByStatus: "በሁኔታ ማጣሪያ",
      updateStatus: "ሁኔታ አዘምን",
      uploadFinalDocuments: "የመጨረሻ ሰነዶች ስቀል",
      selectApplication: "ማመልከቻ ይምረጡ",
      documentType: "የሰነድ አይነት",
      finalCV: "የመጨረሻ ሲቪ",
      finalSOP: "የመጨረሻ የዓላማ መግለጫ",
      completeApplication: "ሙሉ ማመልከቻ",
      otherDocument: "ሌላ ሰነድ",
      uploadDocument: "ሰነድ ስቀል",
      sendMessageToStudent: "ለተማሪ መልዕክት ላክ",
      selectStudent: "ተማሪ ይምረጡ",
      messageSubject: "ርዕስ",
    },
  },
}

export function getTranslation(language: Language): Translations {
  return translations[language]
}
