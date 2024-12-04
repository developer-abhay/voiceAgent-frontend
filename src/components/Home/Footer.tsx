import { Facebook, GamepadIcon, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        // <footer className="relative mt-20 bg-gradient-to-r from-blue-600 to-violet-600 text-gray-400">
        <footer className="relative bg-[#111827] text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="grid gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-1">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="rounded-lg bg-white p-2">
                                <img src="/icon.svg" alt="" />
                            </div>
                            <span className="text-xl font-bold text-white">HelloGenAI</span>
                        </div>
                        <div className="flex gap-4">
                            <Link to="#" className="hover:text-white">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="hover:text-white">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="hover:text-white">
                                <GamepadIcon className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="hover:text-white">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                            <div>
                                <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
                                <ul className="space-y-3">
                                    <li><Link to="#" className="hover:text-white">Partners</Link></li>
                                    <li><Link to="#" className="hover:text-white">Careers</Link></li>
                                    <li><Link to="#" className="hover:text-white">Our Mission</Link></li>
                                    <li><Link to="#" className="hover:text-white">Company</Link></li>
                                    <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-lg font-semibold text-white">Product</h3>
                                <ul className="space-y-3">
                                    <li><Link to="#" className="hover:text-white">Home</Link></li>
                                    <li><Link to="#" className="hover:text-white">Support Desk</Link></li>
                                    <li><Link to="#" className="hover:text-white">Blog</Link></li>
                                    <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
                                    <li><Link to="#" className="hover:text-white">Sign In</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
                                <ul className="space-y-3">
                                    <li><Link to="#" className="hover:text-white">Getting Started</Link></li>
                                    <li><Link to="#" className="hover:text-white">Roadmap</Link></li>
                                    <li><Link to="#" className="hover:text-white">Press</Link></li>
                                    <li><Link to="#" className="hover:text-white">Guides</Link></li>
                                    <li><Link to="#" className="hover:text-white">Developers</Link></li>
                                    <li><Link to="#" className="hover:text-white">Tech</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-lg font-semibold text-white">Quick links</h3>
                                <ul className="space-y-3">
                                    <li><Link to="#" className="hover:text-white">Features</Link></li>
                                    <li><Link to="#" className="hover:text-white">Use Cases</Link></li>
                                    <li><Link to="#" className="hover:text-white">Languages</Link></li>
                                    <li><Link to="#" className="hover:text-white">Pricing</Link></li>
                                    <li><Link to="#" className="hover:text-white">FAQ</Link></li>
                                    <li><Link to="#" className="hover:text-white">Test It Free</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex gap-4 text-sm">
                            <Link to="#" className="hover:text-white">Legal</Link>
                            <Link to="#" className="hover:text-white">Privacy Policy</Link>
                            <Link to="#" className="hover:text-white">App Privacy Policy</Link>
                            <Link to="#" className="hover:text-white">Terms & Conditions</Link>
                            <Link to="#" className="hover:text-white">Disclaimer</Link>
                        </div>
                        <div className="text-sm">
                            © 2024 HelloGenAI. All rights reserved
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-32 bg-gradient-to-t from-blue-600/20 to-transparent" />
                <div className="h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
            </div>
        </footer>
    )
}