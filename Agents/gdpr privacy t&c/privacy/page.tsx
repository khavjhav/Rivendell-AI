import Link from "next/link";

export default function Privacy() {
    return (
        <main className="pt-24 pb-12">
            <section className="max-w-4xl mx-auto px-6 md:px-12 mb-20">
                <div className="animate-fade-in">
                    <h1 className="heading-1 mb-8">Privacy <span className="text-primary-600">Policy</span></h1>

                    <div className="prose prose-neutral max-w-none space-y-8">
                        <p className="text-body-lg text-neutral-600">
                            The guardians of Rivendell honor your trust. <strong>RIVENDELL AI LIMITED</strong> (Company No. 16948146), registered at 20 Central Drive, Hornchurch, England, RM12 6AR, acts as the Data Controller for the information provided to our sanctuary. This policy describes how we handle the word you send us and the tokens of your identity.
                        </p>

                        <section>
                            <h2 className="heading-3 mb-4">1. Data We Collect</h2>
                            <p className="text-neutral-600 mb-4">
                                When you convene with our council through our contact forms, we collect the following information:
                            </p>
                            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                                <li>Full Name (to know our allies)</li>
                                <li>Email Address (to send word back)</li>
                                <li>Phone Number (for swift communication)</li>
                                <li>Company Name (to understand your realm)</li>
                                <li>Service Interest & Message details (to prepare our counsel)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">2. How We Use Your Data</h2>
                            <p className="text-neutral-600 mb-4">
                                Your data is used solely to provide our crafts and counsel. Specifically:
                            </p>
                            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                                <li>To respond to your inquiries regarding our quests.</li>
                                <li>To provide the services agreed upon in our covenants.</li>
                                <li>To send occasional updates about the council&apos;s wisdom (only if you opt-in).</li>
                            </ul>
                            <p className="text-neutral-600 mt-4 font-semibold italic">
                                We never sell your data to other kingdoms or shadows.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">3. Data Guardianship (Security)</h2>
                            <p className="text-neutral-600 mb-4">
                                We employ modern technical defenses to protect your information from unauthorized access, loss, or theft. Like the gates of the sanctuary, our systems are monitored and secured.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">4. Your Rights Under the Law</h2>
                            <p className="text-neutral-600 mb-4">
                                Under UK GDPR and related laws, you have the right to:
                            </p>
                            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                                <li>Request access to the data we hold about you.</li>
                                <li>Request correction of any errors in your records.</li>
                                <li>Request the deletion of your data when our partnership ends.</li>
                                <li>Withdraw consent for data processing at any time.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">5. Contact Our Sentinel</h2>
                            <p className="text-neutral-600 mb-4">
                                For any questions regarding your privacy, please send word to:
                                <br />
                                <a href="mailto:privacy@rivendellai.com" className="text-primary-600 hover:underline">privacy@rivendellai.com</a>
                            </p>
                        </section>

                        <div className="pt-8 border-t border-neutral-200">
                            <p className="text-sm text-neutral-500 italic">
                                Last Updated: January 23, 2026. This policy may be updated as our sanctuary grows.
                            </p>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/contact" className="btn-primary">
                                Return to Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
