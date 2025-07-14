import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { caseStudies } from '../data';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-blue-600 hover:text-blue-800">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
              {caseStudy.description}
            </p>

            <div className="flex flex-wrap gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span><strong>Client:</strong> {caseStudy.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span><strong>Duration:</strong> {caseStudy.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-12"
              >
                {/* Challenge */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {caseStudy.outcome}
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Key Achievement</h3>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{caseStudy.results}</div>
                    <p className="text-gray-600">Primary success metric achieved</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="sticky top-24 space-y-8"
              >
                {/* Project Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Client</div>
                      <div className="text-gray-900">{caseStudy.client}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Duration</div>
                      <div className="text-gray-900">{caseStudy.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Categories</div>
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Interested in Similar Results?</h3>
                  <p className="text-blue-100 mb-6">
                    Let's discuss how we can help you achieve your goals with our proven expertise.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow duration-300"
                  >
                    Start Your Project
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">More Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore other projects where we've delivered exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(study => study.id !== caseStudy.id)
              .slice(0, 3)
              .map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/case-studies/${study.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {study.description.substring(0, 100)}...
                        </p>
                        <div className="text-blue-600 font-medium">
                          View Details →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;