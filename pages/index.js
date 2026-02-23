import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Linktree-Better</title>
        <meta name="description" content="A better, free linktree alternative" />
      </Head>

      <main className="max-w-md w-full flex flex-col items-center text-center">
        
        {/* The plain English headline */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All your links in one place, without the monthly fee.
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Create a beautiful page for your social links in seconds. 100% free, forever.
        </p>

        {/* The big core action button */}
        <Link href="/admin" className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl mb-12 shadow-lg hover:bg-blue-700 transition-colors">
          Create Your Free Page
        </Link>

        {/* The three bullet points */}
        <div className="text-left w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Why we beat the original:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span className="text-gray-700"><strong>100% Free Customization:</strong> Change colors and fonts without paying $5/month.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span className="text-gray-700"><strong>Lightning Fast:</strong> No hidden trackers, meaning your page loads instantly on 4G.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span className="text-gray-700"><strong>Mobile Perfect:</strong> Long link names automatically wrap onto a new line, never cutting off your text.</span>
            </li>
          </ul>
        </div>
        
      </main>
    </div>
  )
}
