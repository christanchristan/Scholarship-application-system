export interface Testimonial {
  id: string
  name: string
  scholarship: string
  content: string
  rating: number
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Meron Tadesse",
    scholarship: "Chevening Scholarship - UK",
    content:
      "Scholar4Ethio helped me secure a Chevening scholarship to study at Oxford. Their document editing service was exceptional and their guidance throughout the process was invaluable.",
    rating: 5,
  },
  {
    id: "2",
    name: "Daniel Bekele",
    scholarship: "DAAD Scholarship - Germany",
    content:
      "I couldn't have done it without Scholar4Ethio. They helped me create a compelling SOP and CV that got me accepted to TU Munich with full funding.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sara Mohammed",
    scholarship: "Erasmus Mundus - Europe",
    content:
      "The team at Scholar4Ethio is professional and dedicated. They helped me navigate the complex Erasmus application process and I'm now studying in three different European countries!",
    rating: 5,
  },
]
