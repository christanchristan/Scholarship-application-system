import { FileEdit, FileText, PenTool } from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  price: number
  icon: any
  features: string[]
}

export const services: Service[] = [
  {
    id: "basic",
    title: "Basic Document Editing",
    description: "Professional editing of your existing documents",
    price: 2500,
    icon: FileEdit,
    features: [
      "CV/Resume editing and formatting",
      "Statement of Purpose review",
      "Grammar and language correction",
      "Basic formatting improvements",
    ],
  },
  {
    id: "full",
    title: "Full Application Submission",
    description: "Complete application management from start to finish",
    price: 8500,
    icon: FileText,
    features: [
      "Complete application submission",
      "Document preparation and editing",
      "Application tracking and follow-up",
      "Deadline management",
      "Communication with universities",
    ],
  },
  {
    id: "creation",
    title: "CV/SOP Creation",
    description: "Professional creation of CV and Statement of Purpose from scratch",
    price: 5000,
    icon: PenTool,
    features: [
      "Professional CV creation",
      "Compelling Statement of Purpose writing",
      "Tailored to specific scholarships",
      "Multiple revisions included",
      "Industry-standard formatting",
    ],
  },
]
