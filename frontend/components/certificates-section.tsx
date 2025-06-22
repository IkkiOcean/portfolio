import { Award, Calendar } from "lucide-react"
import type { Certificate } from "@/lib/types"

export default function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      id: "1",
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "Stanford Online (DeepLearning.AI)",
      date: "November 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/MW1SUVQQWPSH"
    },
    {
      id: "2",
      title: "Advanced Learning Algorithms",
      issuer: "Stanford Online (DeepLearning.AI)",
      date: "October 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/WPBGX60GEQ75"
    },
    {
      id: "3",
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "October 2024",
      link: "https://badgr.com/public/assertions/Ga00-9_hT6-InElWrSp5vw?identity__email=vivekprakash.st@gmail.com"
    },
    {
      id: "4",
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford Online (DeepLearning.AI)",
      date: "September 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/WHR1JF77Z607"
    },
    {
      id: "5",
      title: "Data Science Bootcamp",
      issuer: "Udemy",
      date: "August 2024",
      link: "https://www.udemy.com/certificate/UC-9e0a2398-2ba0-4a27-8f28-f9c86a8a3bb5/"
    },
    {
      id: "6",
      title: "Google Cloud Computing Foundation and Generative AI",
      issuer: "Google Cloud",
      date: "November 2023",
      link: "https://www.cloudskillsboost.google/public_profiles/d2f5f5b6-70ba-4297-98db-2086e334ba0d"
    }
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white border-l-4 border-blue-600 dark:bg-gray-700 p-6 dark:border-l-4 dark:border-blue-600 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                      {cert.title}
                    </a>
                  </h3>
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
