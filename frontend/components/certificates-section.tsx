import { Award, Calendar } from "lucide-react"
import type { Certificate } from "@/lib/types"

export default function CertificatesSection() {
  const certificates: Certificate[] = [
  {
    id: "1",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Stanford Online (DeepLearning.AI)",
    date: "November 2024",
  },
  {
    id: "2",
    title: "Advanced Learning Algorithms",
    issuer: "Stanford Online (DeepLearning.AI)",
    date: "October 2024",
  },
  {
    id: "3",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "October 2024",
  },
  {
    id: "4",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online (DeepLearning.AI)",
    date: "September 2024",
  },
  {
    id: "5",
    title: "Data Science Bootcamp",
    issuer: "Udemy",
    date: "August 2024",
  },
  {
    id: "6",
    title: "Google Cloud Computing Foundation and Generative AI",
    issuer: "Google Cloud",
    date: "November 2023",
  }
];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
