import Link from "next/link";

export default function GDPR() {
    return (
        <main className="pt-24 pb-12">
            <section className="max-w-4xl mx-auto px-6 md:px-12 mb-20">
                <div className="animate-fade-in">
                    <h1 className="heading-1 mb-8">GDPR <span className="text-primary-600">Compliance</span></h1>

                    <div className="prose prose-neutral max-w-none space-y-8">
                        <p className="text-body-lg text-neutral-600">
                            At <strong>RIVENDELL AI LIMITED</strong>, we treat data guardianship as a sacred duty. Our compliance framework is built upon the principles of transparency, security, and the &quot;Sanctuary of Data.&quot;
                        </p>

                        <section>
                            <h2 className="heading-3 mb-4">1. Data Controller</h2>
                            <p className="text-neutral-600">
                                <strong>RIVENDELL AI LIMITED</strong> (Company No. 16948146)<br />
                                20 Central Drive, Hornchurch, England, RM12 6AR<br />
                                Email: <a href="mailto:privacy@rivendellai.com" className="text-primary-600 hover:underline">privacy@rivendellai.com</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">2. Nature of our Crafts (Legitimate Interest)</h2>
                            <p className="text-neutral-600 mb-4">
                                Our processing of data is aligned with our registered business activities (SIC Codes):
                            </p>
                            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                                <li><strong>58290:</strong> Other software publishing</li>
                                <li><strong>62012:</strong> Business and domestic software development</li>
                                <li><strong>62020:</strong> Information technology consultancy activities</li>
                                <li><strong>62090:</strong> Other information technology service activities</li>
                            </ul>
                            <p className="text-neutral-600 mt-4">
                                We process personal data based on <strong>Legitimate Interest</strong> to provide these expert services or via <strong>Explicit Consent</strong> provided through our council forms.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">3. The Three Barriers of Security</h2>
                            <p className="text-neutral-600 mb-4">
                                We protect the realm&apos;s data through:
                            </p>
                            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                                <li><strong>Physical Gates:</strong> Cloud infrastructure hosted by industry leaders with SOC2/ISO 27001 certifications.</li>
                                <li><strong>The Shield of Encryption:</strong> Data is encrypted using AES-256 at rest and TLS 1.3 in transit.</li>
                                <li><strong>Vigilant Oversight:</strong> Access to client data is strictly limited to the necessary council members (Saleh Tarek & Sinthia Nomrota) and logged.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">4. Data Subject Requests</h2>
                            <p className="text-neutral-600 mb-4">
                                Whether you are a Seeker on the Path or a Legend of the Council, you wield full rights over your data. You may request access, erasure, or portability at any time. We respond to all &quot;Riddles of Data&quot; within 30 days as required by UK law.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-neutral-200">
                            <p className="text-sm text-neutral-500 italic">
                                RIVENDELL AI LIMITED is registered in England and Wales. This compliance statement is reviewed annually.
                            </p>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/privacy" className="btn-primary">
                                View Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
