import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const strengths = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every solution we build, ensuring your data and systems are protected with industry-leading practices.',
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'Our team stays at the forefront of blockchain and AI technologies, delivering cutting-edge solutions that give you a competitive edge.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'With over 10 years of combined experience, our certified professionals bring deep expertise to every project.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Leading the Digital Revolution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At SpreadChain, we are passionate about leveraging emerging technologies to solve 
            complex business challenges. Our mission is to make blockchain and AI accessible 
            and practical for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-6">
                <strength.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;