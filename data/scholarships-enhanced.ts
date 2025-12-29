export interface ScholarshipEnhanced {
  id: string
  title: string
  titleAm: string
  university: string
  country: string
  countryAm: string
  degreeType: "Bachelor" | "Master" | "PhD"
  field: string
  fieldAm: string
  deadline: string
  description: string
  descriptionAm: string
  requirements: string[]
  requirementsAm: string[]
  benefits: string[]
  benefitsAm: string[]
  applicationFee: number
  isFullyFunded: boolean
  tags: string[]
}

export const enhancedScholarships: ScholarshipEnhanced[] = [
  {
    id: "1",
    title: "Chevening Scholarship",
    titleAm: "የቼቨኒንግ ስኮላርሺፕ",
    university: "Various UK Universities",
    country: "United Kingdom",
    countryAm: "ዩናይትድ ኪንግደም",
    degreeType: "Master",
    field: "Various Fields",
    fieldAm: "የተለያዩ ዘርፎች",
    deadline: "November 2, 2024",
    description:
      "UK government's global scholarship programme funded by the Foreign, Commonwealth & Development Office",
    descriptionAm: "በውጭ ጉዳይ፣ ኮመንዌልዝ እና ልማት ቢሮ የሚደገፍ የዩኬ መንግስት ዓለም አቀፍ የስኮላርሺፕ ፕሮግራም",
    requirements: [
      "Bachelor's degree with upper second-class honours",
      "At least 2 years work experience",
      "English language proficiency",
      "Leadership potential",
    ],
    requirementsAm: ["የመጀመሪያ ዲግሪ ከሁለተኛ ክፍል በላይ", "ቢያንስ 2 ዓመት የስራ ልምድ", "የእንግሊዝኛ ቋንቋ ብቃት", "የአመራር አቅም"],
    benefits: ["Full tuition fees", "Monthly living allowance", "Return airfare", "Visa costs"],
    benefitsAm: ["ሙሉ የትምህርት ክፍያ", "ወርሃዊ የኑሮ አበል", "የመመለሻ የአየር ትኬት", "የቪዛ ወጪዎች"],
    applicationFee: 0,
    isFullyFunded: true,
    tags: ["Government", "Fully Funded", "Leadership"],
  },
  {
    id: "2",
    title: "Erasmus Mundus Joint Masters",
    titleAm: "የኢራስመስ ሙንዱስ ጋራ ማስተር",
    university: "European Universities",
    country: "Europe",
    countryAm: "አውሮፓ",
    degreeType: "Master",
    field: "Various Fields",
    fieldAm: "የተለያዩ ዘርፎች",
    deadline: "January 15, 2025",
    description: "EU-funded international study programme offering joint degrees from multiple European universities",
    descriptionAm: "ከብዙ የአውሮፓ ዩኒቨርሲቲዎች የጋራ ዲግሪዎችን የሚሰጥ በአውሮፓ ህብረት የሚደገፍ ዓለም አቀፍ የጥናት ፕሮግራም",
    requirements: ["Bachelor's degree", "English proficiency", "Academic excellence", "Motivation letter"],
    requirementsAm: ["የመጀመሪያ ዲግሪ", "የእንግሊዝኛ ብቃት", "የአካዳሚክ ብቃት", "የመነሳሳት ደብዳቤ"],
    benefits: ["Full scholarship", "Monthly allowance €1000", "Travel costs", "Insurance"],
    benefitsAm: ["ሙሉ ስኮላርሺፕ", "ወርሃዊ አበል €1000", "የጉዞ ወጪዎች", "ኢንሹራንስ"],
    applicationFee: 0,
    isFullyFunded: true,
    tags: ["EU", "Joint Degree", "Mobility"],
  },
]
