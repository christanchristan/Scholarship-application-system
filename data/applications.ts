export interface Application {
  id: string
  studentName: string
  email: string
  scholarshipTitle: string
  servicePackage: string
  status: "In Progress" | "Submitted" | "Complete"
  submittedDate: string
  lastUpdated: string
  documents: {
    cv?: string
    sop?: string
    transcript?: string
    passport?: string
  }
}

export const applications: Application[] = [
  {
    id: "app-1",
    studentName: "Abebe Kebede",
    email: "abebe.kebede@example.com",
    scholarshipTitle: "Chevening Scholarship",
    servicePackage: "Full Application Submission",
    status: "In Progress",
    submittedDate: "2024-05-10",
    lastUpdated: "2024-05-15",
    documents: {
      cv: "cv_abebe.pdf",
      sop: "sop_abebe.pdf",
      transcript: "transcript_abebe.pdf",
      passport: "passport_abebe.pdf",
    },
  },
  {
    id: "app-2",
    studentName: "Tigist Haile",
    email: "tigist.haile@example.com",
    scholarshipTitle: "DAAD Scholarship",
    servicePackage: "CV/SOP Creation",
    status: "Submitted",
    submittedDate: "2024-04-20",
    lastUpdated: "2024-05-01",
    documents: {
      cv: "cv_tigist.pdf",
      sop: "sop_tigist.pdf",
    },
  },
  {
    id: "app-3",
    studentName: "Yohannes Desta",
    email: "yohannes.desta@example.com",
    scholarshipTitle: "Erasmus Mundus",
    servicePackage: "Basic Document Editing",
    status: "Complete",
    submittedDate: "2024-03-15",
    lastUpdated: "2024-04-10",
    documents: {
      cv: "cv_yohannes.pdf",
      sop: "sop_yohannes.pdf",
      transcript: "transcript_yohannes.pdf",
    },
  },
]
