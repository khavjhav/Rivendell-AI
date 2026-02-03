import Link from "next/link";

export default function Terms() {
    return (
        <main className="pt-24 pb-12">
            <section className="max-w-4xl mx-auto px-6 md:px-12 mb-20">
                <div className="animate-fade-in">
                    <h1 className="heading-1 mb-8">Terms of <span className="text-primary-600">Service</span></h1>

                    <div className="prose prose-neutral max-w-none space-y-8">
                        <p className="text-body-lg text-neutral-600">
                            Welcome to the Council of Rivendell AI. These terms define the covenants between your realm and <strong>RIVENDELL AI LIMITED</strong> (Company No. 16948146), a private limited company registered in England and Wales with its office at 20 Central Drive, Hornchurch, RM12 6AR. By engaging our council, you agree to these provisions governed by the laws of England and Wales.
                        </p>

                        <section>
                            <h2 className="heading-3 mb-4">1. Engagement & Councils</h2>
                            <p className="text-neutral-600 mb-4">
                                Our fellowship begins with a council (consultation) to understand your needs. By engaging our services, you agree to provide truthful information regarding your quest&apos;s requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">2. Subscription Paths (Monthly Covenants)</h2>
                            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                                <li><strong>Billing:</strong> Subscriptions are billed monthly in advance.</li>
                                <li><strong>Notice:</strong> We require 30 days notice for any adjustments to your covenant (upgrades, downgrades, or departures).</li>
                                <li><strong>Deliverables:</strong> We commit to delivering the crafts specified in your chosen path each moon cycle.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">3. Fixed-Price Quests</h2>
                            <p className="text-neutral-600 mb-4">
                                For singular builds, we provide a clear proposal with defined checkpoints (milestones) and investment quotes. Work begins once the opening tribute (deposit) is received.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">4. Intellectual Property</h2>
                            <p className="text-neutral-600 mb-4">
                                Once full payment for a quest or milestone is received, the artifacts and code forged specifically for you belong to your realm. Rivendell retains the rights to its proprietary tools and underlying wisdom used to build them.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">5. Conduct & Respect</h2>
                            <p className="text-neutral-600 mb-4">
                                We pride ourselves on honest fellowship. Any form of shadow or malice (harassment, illegal activity, or failure to fulfill financial commitments) may result in the immediate termination of our covenant.
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-3 mb-4">6. Limitation of Liability</h2>
                            <p className="text-neutral-600 mb-4">
                                While our crafts are forged with the greatest care, Rivendell shall not be held liable for indirect losses or unforeseen storms once a project is approved and launched by your realm.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-neutral-200">
                            <p className="text-sm text-neutral-500 italic">
                                Last Updated: January 23, 2026.
                            </p>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/packages" className="btn-primary">
                                Return to Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
