import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Let’s work on something useful</h3>
            <p className="mt-2 text-gray-600">
              Tell me about the problem. I’ll bring options and a clear plan.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Mail className="h-4 w-4" /> Email Joe
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-lg border border-gray-200 p-4 sm:p-6"
            aria-label="Quick contact form"
          >
            <div className="grid gap-3">
              <label className="text-sm font-medium text-gray-700">
                Your email
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Message
                <textarea
                  required
                  rows={4}
                  placeholder="How can I help?"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Send
              </button>
              <p className="text-xs text-gray-500">This demo form doesn’t send yet.</p>
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Joe. All rights reserved.</p>
          <p>
            Built with React and Tailwind. Optimized for accessibility and speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
