// // src/App.js
// import React, { Suspense } from 'react';
// import { Helmet } from 'react-helmet-async';
// import Header from './components/Header';
// import About from './components/About';
// import Footer from './components/Footer';
// import { SkeletonGrid } from './components/ui/skeleton';
// import './index.css';

// const Experience = React.lazy(() => import('./components/Experience'));
// const Projects = React.lazy(() => import('./components/Projects'));
// const Skills = React.lazy(() => import('./components/Skills'));
// const Education = React.lazy(() => import('./components/Education'));
// const Certifications = React.lazy(() => import('./components/Certifications'));
// const Contact = React.lazy(() => import('./components/Contact'));

// function App() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Helmet>
//         <title>Bahar Khan - Flutter Developer</title>
//         <meta
//           name="description"
//           content="Portfolio website of Bahar Khan, a Flutter Developer. Showcasing projects, skills, and professional experience in mobile app development."
//         />
//         <meta
//           name="keywords"
//           content="Bahar Khan, Flutter Developer, Mobile App Developer, Dart, Flutter, Portfolio, Cross-Platform Apps"
//         />
//         <meta name="author" content="Bahar Khan" />
//         <meta property="og:title" content="Bahar Khan - Flutter Developer Portfolio" />
//         <meta
//           property="og:description"
//           content="Explore Bahar Khan's portfolio website. Projects, skills, and experience in Flutter mobile app development."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://baharkhan.vercel.app/" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Bahar Khan - Flutter Developer Portfolio" />
//         <meta
//           name="twitter:description"
//           content="Explore Bahar Khan's portfolio website. Projects, skills, and experience in Flutter mobile app development."
//         />
//         <link rel="canonical" href="https://baharkhan.vercel.app/" />

//         {/* Structured Data for Google */}

//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "https://schema.org",
//               "@type": "Person",
//               "address": {
//                 "@type": "PostalAddress",
//                 "addressLocality": "Mirpur",
//                 "addressRegion": "Dhaka",
//                 "postalCode": "1216",
//                 "streetAddress": "Mirpur 2, Mirpur 1216"
//               },
//               "email": "mailto:baharkhan.dev@gmail.com",
//               "image": "./Assets/baharkhan.png",
//               "jobTitle": "Flutter Developer",
//               "name": "Bahar Khan",
//               "telephone": "+8801581183499",
//               "url": "https://baharkhan.vercel.app/"
//             }
//           `}
//         </script>



//         {/* Robots meta tag */}
//         <meta name="robots" content="index, follow" />
//       </Helmet>

//       <Header />

//       <div className="main-content">
//         <About />
//         <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
//           <Experience />
//           <Projects />
//           <Skills />
//           <Education />
//           <Certifications />
//           <Contact />
//         </Suspense>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const siteUrl = 'https://baharkhan.vercel.app';
  const siteTitle = 'Bahar Khan | Flutter Developer in Bangladesh';
  const siteDescription =
    'Bahar Khan is a Flutter Developer from Dhaka, Bangladesh, skilled in Dart, Flutter, Firebase, REST API, Riverpod, Provider, BLoC, WebSocket, Stripe, SSLCOMMERZ, Play Store and App Store deployment.';
  const siteImage = `${siteUrl}/Assets/baharkhan.png`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bahar Khan',
    url: siteUrl,
    image: siteImage,
    jobTitle: 'Flutter Developer',
    email: 'mailto:baharkhan.dev@gmail.com',
    telephone: '+8801581183499',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mirpur',
      addressRegion: 'Dhaka',
      postalCode: '1216',
      addressCountry: 'BD',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Moulvibazar Polytechnic Institute',
    },
    knowsAbout: [
      'Flutter',
      'Dart',
      'Firebase',
      'REST API',
      'Riverpod',
      'Provider',
      'BLoC',
      'GetX',
      'Clean Architecture',
      'WebSocket',
      'Stripe Payment Integration',
      'SSLCOMMERZ Payment Integration',
      'Play Store Deployment',
      'App Store Deployment',
      'Push Notifications',
    ],
    sameAs: [
      'https://github.com/baharkhandev',
      'https://baharkhan.vercel.app',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteTitle,
    url: siteUrl,
    description: siteDescription,
    author: {
      '@type': 'Person',
      name: 'Bahar Khan',
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <html lang="en" />

        <title>{siteTitle}</title>

        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="Bahar Khan, Flutter Developer, Flutter Developer Bangladesh, Flutter Developer Dhaka, Mobile App Developer, Dart Developer, Firebase Developer, REST API Integration, Riverpod, Provider, BLoC, GetX, Clean Architecture, WebSocket, Stripe Payment Integration, SSLCOMMERZ Payment Integration, Play Store Deployment, App Store Deployment, Cross Platform App Developer"
        />
        <meta name="author" content="Bahar Khan" />
        <meta name="google-site-verification" content="X0qMTHzMDlPWpCKs-AWmV7b9fDQZTYyxhMk0i6dZ3Ek" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#0F172A" />

        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:site_name" content="Bahar Khan Portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />

        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="main-content">
        <About />

        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }
        >
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;