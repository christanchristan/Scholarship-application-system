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
