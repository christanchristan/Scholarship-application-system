export interface Scholarship {
  id: string
  title: string
  university: string
  country: string
  degreeType: "Bachelor" | "Master" | "PhD"
  field: string
  deadline: string
  description?: string
}

export const scholarships: Scholarship[] = [
  {
    id: "1",
    title: "Chevening Scholarship",
    university: "Various UK Universities",
    country: "United Kingdom",
    degreeType: "Master",
    field: "Various Fields",
    deadline: "November 2, 2024",
    description: "UK government's global scholarship programme",
  },
  {
    id: "2",
    title: "Erasmus Mundus Joint Masters",
    university: "European Universities",
    country: "Europe",
    degreeType: "Master",
    field: "Various Fields",
    deadline: "January 15, 2025",
    description: "EU-funded international study programme",
  },
  {
    id: "3",
    title: "DAAD Scholarship",
    university: "German Universities",
    country: "Germany",
    degreeType: "Master",
    field: "Engineering & Sciences",
    deadline: "October 31, 2024",
    description: "German Academic Exchange Service scholarship",
  },
  {
    id: "4",
    title: "Australia Awards",
    university: "Australian Universities",
    country: "Australia",
    degreeType: "Master",
    field: "Development Studies",
    deadline: "April 30, 2025",
    description: "Australian government scholarship for developing countries",
  },
  {
    id: "5",
    title: "Fulbright Foreign Student Program",
    university: "US Universities",
    country: "United States",
    degreeType: "PhD",
    field: "Various Fields",
    deadline: "May 15, 2025",
    description: "US government's flagship international exchange programme",
  },
  {
    id: "6",
    title: "Swedish Institute Scholarships",
    university: "Swedish Universities",
    country: "Sweden",
    degreeType: "Master",
    field: "Sustainability & Innovation",
    deadline: "February 1, 2025",
    description: "Swedish government scholarship for global professionals",
  },
]
