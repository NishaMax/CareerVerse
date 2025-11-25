import React from 'react';
import { Brain, Target, Zap, Lightbulb, Shield, Users, GraduationCap, Stethoscope, Scale } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          About <span className="text-teal-500">CareerVerse</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're revolutionizing career discovery through AI powered simulations that measure your actual
          skills, not just your answers.
        </p>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our <span className="text-teal-500">Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Traditional career assessments rely on self reported answers to
                hypothetical questions. But knowing what you would do and actually
                doing it are two different things.
              </p>
              <p>
                CareerVerse puts you in realistic, AI powered simulations where your
                natural skills shine through. Our advanced AI analyzes how you
                communicate, problem solve, and handle stress in real time
                scenarios.
              </p>
              <p>
                The result? Career recommendations based on demonstrable
                aptitude, not just preferences.
              </p>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="flex-1 w-full">
            <div className="bg-teal-50 rounded-[3rem] p-16 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
              <div className="mb-8 text-teal-600">
                <Brain size={120} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                AI Powered Career Discovery
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-teal-500">Works</span>
          </h2>
          <p className="text-gray-500 text-lg">
            From simulation to recommendation in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              icon: <Target size={32} color="white" />,
              title: "Choose Your Simulation",
              desc: "Select from three career paths: Teacher, Doctor, or Lawyer"
            },
            {
              step: "02",
              icon: <Brain size={32} color="white" />,
              title: "Immerse in Realistic Scenarios",
              desc: "Interact with AI powered agents in hyper realistic 3D environments"
            },
            {
              step: "03",
              icon: <Zap size={32} color="white" />,
              title: "AI Analyzes Your Performance",
              desc: "Advanced AI evaluates your skills across multiple dimensions"
            },
            {
              step: "04",
              icon: <Lightbulb size={32} color="white" />,
              title: "Get Career Recommendatons",
              desc: "Receive data driven insights about your ideal career path"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/20">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-teal-500 mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Makes Us <span className="text-teal-500">Different</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Brain size={32} color="white" />,
              title: "Agentic AI Technology",
              desc: "Powered by advanced language models, our AI agents respond authentically in character, creating truly immersive experiences."
            },
            {
              icon: <Shield size={32} color="white" />,
              title: "Data Driven Insights",
              desc: "Every decision is analyzed. Get precise skill scores and career matches based on actual performance, not just answers to questions."
            },
            {
              icon: <Users size={32} color="white" />,
              title: "Realistic Simulations",
              desc: "Experience what it really feels like in different careers through interactive scenario based challenges that mirror real professional situations."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Simulations Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-teal-500">Simulations</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Experience three distinct career paths, each designed to evaluate specific skill sets
            through realistic, AI powered scenarios
          </p>
        </div>

        <div className="space-y-8">
          {/* The Educator */}
          <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10 items-start hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center shrink-0">
              <div className="bg-teal-500 p-4 rounded-2xl shadow-lg shadow-teal-500/20">
                <GraduationCap size={32} color="white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Educator</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Step into a classroom and manage fifteen AI powered students. Handle disruptions, inspire learning, and
                demonstrate your teaching abilities.
              </p>
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Skills Measured:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Empathy', 'Clarity', 'Classroom Control', 'Stress Handling'].map((skill, i) => (
                    <span key={i} className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium text-sm shadow-lg shadow-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* The Diagnostician */}
          <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10 items-start hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center shrink-0">
              <div className="bg-teal-500 p-4 rounded-2xl shadow-lg shadow-teal-500/20">
                <Stethoscope size={32} color="white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Diagnostician</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Interview AI patients, identify symptoms, and provide accurate diagnoses. Combine medical logic with
                compassionate care.
              </p>
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Skills Measured:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Diagnostic Logic', 'Empathy', 'Communication', 'Problem Solving'].map((skill, i) => (
                    <span key={i} className="px-6 py-2 rounded-full bg-emerald-400 text-white font-medium text-sm shadow-lg shadow-emerald-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* The Advocate */}
          <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10 items-start hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center shrink-0">
              <div className="bg-teal-500 p-4 rounded-2xl shadow-lg shadow-teal-500/20">
                <Scale size={32} color="white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Advocate</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Navigate complex legal negotiations with an AI opposing counsel. Use persuasion and logic to achieve
                favorable outcomes.
              </p>
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Skills Measured:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Persuasion', 'Logical Acumen', 'Negotiation', 'Reading People'].map((skill, i) => (
                    <span key={i} className="px-6 py-2 rounded-full bg-orange-400 text-white font-medium text-sm shadow-lg shadow-orange-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by AI Section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by <span className="text-teal-500">Advanced AI</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Our platform leverages cutting edge Large Language Models to create AI agents that
            respond naturally and evaluate your performance with precision. Each interaction is analyzed
            to build a comprehensive picture of your skills and aptitudes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-cyan-50 p-12 rounded-[2rem] text-center hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-bold text-teal-600 mb-4">100%</div>
            <div className="text-gray-600 font-medium">AI Powered Analysis</div>
          </div>
          <div className="bg-blue-50 p-12 rounded-[2rem] text-center hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-bold text-blue-600 mb-4">20+</div>
            <div className="text-gray-600 font-medium">Skill Dimensions</div>
          </div>
          <div className="bg-purple-50 p-12 rounded-[2rem] text-center hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-bold text-purple-600 mb-4">3</div>
            <div className="text-gray-600 font-medium">Career Paths</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
