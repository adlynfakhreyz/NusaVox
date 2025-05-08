import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">NusaVox</h4>
            <p className="text-sm text-muted-foreground">
              Analyzing Indonesian policies through sentiment and public discourse.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-sm text-muted-foreground hover:text-primary">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/forums" className="text-sm text-muted-foreground hover:text-primary">
                  Forums
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Connect</h4>
            <p className="text-sm text-muted-foreground">
              Follow us for updates and insights about Indonesian policies.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NusaVox. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
