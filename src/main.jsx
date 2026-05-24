import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const jobLinks = [
  {
    title: 'Remote Angular Developer',
    type: 'Full Time',
    link: 'https://refer.micro1.ai/referral/jobs?referralCode=1ce306d0-dc19-40e4-83be-dc9ad825b08f&utm_source=referral&utm_medium=share&utm_campaign=job_referral'
  },
  {
    title: 'Frontend Freelance Developer',
    type: 'Freelance',
    link: 'https://refer.micro1.ai/referral/jobs?referralCode=1ce306d0-dc19-40e4-83be-dc9ad825b08f&utm_source=referral&utm_medium=share&utm_campaign=job_referral'
  },
  {
    title: '.NET Backend Engineer',
    type: 'Remote',
    link: 'https://refer.micro1.ai/referral/jobs?referralCode=1ce306d0-dc19-40e4-83be-dc9ad825b08f&utm_source=referral&utm_medium=share&utm_campaign=job_referral'
  }
]

const tutorials = [
  'Angular Tutorial',
  'React Tutorial',
  'JavaScript Tutorial',
  'TypeScript Tutorial',
  '.NET Tutorial',
  'SQL Tutorial',
]

function Navbar({ setPage }) {
  return (
    <nav className="bg-black text-white p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-400">
          DevLearnHub
        </h1>

        <div className="flex gap-6 flex-wrap">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('tutorials')}>Tutorials</button>
          <button onClick={() => setPage('jobs')}>Remote Jobs</button>
          <button onClick={() => setPage('courses')}>Courses</button>
          <button onClick={() => setPage('about')}>About</button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-28 px-6 text-center">
      <h1 className="text-7xl font-bold mb-8">
        DevLearnHub
      </h1>

      <p className="text-2xl max-w-4xl mx-auto mb-10 text-blue-100">
        Learn development, prepare for interviews, find remote jobs and grow your tech career.
      </p>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-14">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Angular Interview Questions',
            'React Interview Questions',
            'JavaScript Tutorials',
            '.NET Interview Prep',
            'Remote Frontend Jobs',
            'Freelance Developer Jobs'
          ].map((category) => (
            <div
              key={category}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {category}
              </h3>

              <p className="text-gray-400">
                SEO-friendly developer learning content.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-2 border-dashed border-gray-700 rounded-3xl h-52 flex items-center justify-center text-gray-500 text-2xl bg-gray-900">
          Google AdSense Banner Area
        </div>
      </section>
    </>
  )
}

function TutorialsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-white mb-12">
        Tutorials
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              {tutorial}
            </h2>

            <p className="text-gray-400">
              Beginner to advanced developer tutorials.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function JobsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-white mb-12">
        Remote Developer Jobs
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {jobLinks.map((job) => (
          <div
            key={job.title}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              {job.title}
            </h2>

            <p className="text-gray-400 mb-6">
              {job.type} • Remote Opportunity
            </p>

            <a
              href={job.link}
              target="_blank"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl inline-block"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-white mb-12">
        Recommended Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          'Angular Masterclass',
          'React Complete Guide',
          '.NET Core Bootcamp'
        ].map((course) => (
          <div
            key={course}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              {course}
            </h2>

            <a
              href="https://www.udemy.com/"
              target="_blank"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl inline-block"
            >
              View Course
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-8">
        About DevLearnHub
      </h1>

      <p className="text-xl text-gray-300 leading-relaxed">
        DevLearnHub helps developers learn frontend and full stack development,
        prepare for interviews, and discover remote opportunities.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-center py-10 text-gray-500">
      © 2026 DevLearnHub
    </footer>
  )
}

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar setPage={setPage} />

      {page === 'home' && <HomePage />}
      {page === 'tutorials' && <TutorialsPage />}
      {page === 'jobs' && <JobsPage />}
      {page === 'courses' && <CoursesPage />}
      {page === 'about' && <AboutPage />}

      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
