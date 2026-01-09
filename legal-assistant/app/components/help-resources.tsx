import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HelpResources() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 space-y-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Help & Resources</h1>
      <p className="text-muted-foreground">
        Find additional support and resources to help you navigate the Indian legal system. Whether you need
        professional legal advice, access to legal aid, or quick answers to common questions, we've got you covered.
        Explore the sections below to get the help you need.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="legal-aid">
          <AccordionTrigger className="text-primary hover:text-primary/80">1. Legal Aid</AccordionTrigger>
          <AccordionContent>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Legal Aid</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Legal aid services in India provide free or low-cost legal assistance to individuals who cannot afford
                  private legal representation. These services ensure that everyone has access to justice, regardless of
                  their financial situation.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-card-foreground space-y-4">
                <div>
                  <h3 className="font-semibold">National Legal Services Authority (NALSA):</h3>
                  <p>
                    NALSA provides free legal services to eligible individuals, including women, children, and
                    marginalized groups.
                  </p>
                  <p>
                    Website:{" "}
                    <a href="https://nalsa.gov.in" className="text-accent hover:underline">
                      NALSA
                    </a>
                  </p>
                  <p>Helpline: 15100 (State Legal Services Authority Helpline)</p>
                </div>
                <div>
                  <h3 className="font-semibold">State Legal Services Authorities:</h3>
                  <p>
                    Each state in India has its own legal services authority that offers free legal aid. Find your
                    state's authority for localized support.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      <a href="https://dslsa.org" className="text-accent hover:underline">
                        Delhi Legal Services Authority
                      </a>
                    </li>
                    <li>
                      <a href="https://mslsa.gov.in" className="text-accent hover:underline">
                        Maharashtra State Legal Services Authority
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">NGOs Offering Legal Aid:</h3>
                  <p>
                    Many non-governmental organizations (NGOs) provide free legal assistance, especially for issues like
                    human rights, domestic violence, and labor disputes.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      <a href="https://hrln.org" className="text-accent hover:underline">
                        Human Rights Law Network (HRLN)
                      </a>
                    </li>
                    <li>
                      <a href="https://majlislaw.com" className="text-accent hover:underline">
                        Majlis Legal Centre
                      </a>
                    </li>
                    <li>
                      <a href="https://www.commoncause.in" className="text-accent hover:underline">
                        Common Cause
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Pro Bono Lawyers:</h3>
                  <p>
                    Many lawyers offer pro bono (free) services for those in need. Check with local bar associations for
                    referrals.
                  </p>
                  <p>
                    <a href="https://www.indianbarassociation.org" className="text-accent hover:underline">
                      Indian Bar Association
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faqs">
          <AccordionTrigger className="text-primary hover:text-primary/80">2. FAQs</AccordionTrigger>
          <AccordionContent>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">FAQs</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Browse frequently asked questions and answers on various legal topics. This section is designed to
                  provide quick, reliable information for common legal queries.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-card-foreground space-y-4">
                <div>
                  <h3 className="font-semibold">Q: What should I do if I'm unfairly dismissed from my job?</h3>
                  <p>
                    A: You can file a complaint with the labor court under the Industrial Disputes Act, 1947. Visit the{" "}
                    <a href="https://labour.gov.in" className="text-accent hover:underline">
                      Ministry of Labour & Employment
                    </a>{" "}
                    for more details.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Q: How do I file a consumer complaint?</h3>
                  <p>
                    A: You can file a complaint with the Consumer Forum or online through the{" "}
                    <a href="https://consumerhelpline.gov.in" className="text-accent hover:underline">
                      National Consumer Helpline
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Q: What are my rights if I'm arrested?</h3>
                  <p>
                    A: You have the right to remain silent, the right to legal representation, and the right to be
                    informed of the charges against you under Article 22 of the Indian Constitution. For more details,
                    visit{" "}
                    <a href="https://indiankanoon.org" className="text-accent hover:underline">
                      Indian Kanoon
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Q: How do I draft a will?</h3>
                  <p>
                    A: A will must be in writing, signed by the testator, and witnessed by two individuals. You can use
                    our document templates for guidance or refer to the Indian Succession Act, 1925.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="glossary">
          <AccordionTrigger className="text-primary hover:text-primary/80">3. Glossary</AccordionTrigger>
          <AccordionContent>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Glossary</CardTitle>
                <CardDescription className="text-muted-foreground">
                  A comprehensive glossary of legal terms to help you understand complex legal jargon. This section is
                  designed to make legal language more accessible and easier to comprehend.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-card-foreground space-y-4">
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Affidavit:</span> A written statement confirmed by oath or
                    affirmation, used as evidence in court.
                  </li>
                  <li>
                    <span className="font-semibold">Bail:</span> The temporary release of an accused person awaiting
                    trial, sometimes on condition that a sum of money is lodged to guarantee their appearance in court.
                  </li>
                  <li>
                    <span className="font-semibold">Defendant:</span> A person accused of a crime or sued in a civil
                    lawsuit.
                  </li>
                  <li>
                    <span className="font-semibold">Injunction:</span> A court order requiring a party to do or refrain
                    from doing a specific act.
                  </li>
                  <li>
                    <span className="font-semibold">Plaintiff:</span> A person who brings a case against another in a
                    court of law.
                  </li>
                  <li>
                    <span className="font-semibold">Subpoena:</span> A writ ordering a person to attend a court or
                    produce documents.
                  </li>
                  <li>
                    <span className="font-semibold">FIR (First Information Report):</span> A written document prepared
                    by the police when they receive information about the commission of a cognizable offense.
                  </li>
                  <li>
                    <span className="font-semibold">IPC (Indian Penal Code):</span> The official criminal code of India,
                    covering all substantive aspects of criminal law.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contact-lawyer">
          <AccordionTrigger className="text-primary hover:text-primary/80">4. Contact a Lawyer</AccordionTrigger>
          <AccordionContent>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Contact a Lawyer</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Connect with a qualified lawyer for personalized legal advice. Whether you need help with a specific
                  case or general legal guidance, we can help you find the right professional.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-card-foreground space-y-4">
                <div>
                  <h3 className="font-semibold">How It Works:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Search by Practice Area: Find lawyers specializing in criminal law, family law, property disputes,
                      etc.
                    </li>
                    <li>Location-Based Search: Search for lawyers in your city or region for convenient access.</li>
                    <li>Consultation Options: Choose between in-person, phone, or online consultations.</li>
                    <li>
                      Verified Lawyers: All listed lawyers are verified and have relevant experience in their field.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Contact Options:</h3>
                  <ul className="list-disc list-inside">
                    <li>Online Form: Fill out a form to request a callback or consultation.</li>
                    <li>Direct Call: Call our helpline to speak with a legal advisor.</li>
                    <li>Email: Send your query to [legalhelp@leagle.com].</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Resources:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <a href="https://www.barcouncilofindia.org" className="text-accent hover:underline">
                        Bar Council of India
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lawyerscollective.org" className="text-accent hover:underline">
                        Lawyers Collective
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="emergency-help">
          <AccordionTrigger className="text-primary hover:text-primary/80">5. Emergency Help</AccordionTrigger>
          <AccordionContent>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Emergency Help</CardTitle>
                <CardDescription className="text-muted-foreground">
                  If you need urgent legal assistance, we're here to help. Our emergency helpline connects you with
                  legal professionals who can provide immediate support.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-card-foreground space-y-4">
                <div>
                  <h3 className="font-semibold">24/7 Helpline:</h3>
                  <p>Call 1-800-LEGAL-AID anytime for immediate assistance.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Types of Emergencies Covered:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <span className="font-semibold">Domestic Violence:</span> Get help with restraining orders and
                      safe housing under the Protection of Women from Domestic Violence Act, 2005. Visit{" "}
                      <a href="http://ncw.nic.in" className="text-accent hover:underline">
                        NCW
                      </a>{" "}
                      for more details.
                    </li>
                    <li>
                      <span className="font-semibold">Arrest or Detention:</span> Connect with a lawyer to understand
                      your rights under Article 22 of the Indian Constitution. For more information, visit{" "}
                      <a href="https://indiankanoon.org" className="text-accent hover:underline">
                        Indian Kanoon
                      </a>
                      .
                    </li>
                    <li>
                      <span className="font-semibold">Eviction:</span> Get advice on how to handle unlawful eviction
                      notices under the Rent Control Act of your state.
                    </li>
                    <li>
                      <span className="font-semibold">Consumer Fraud:</span> Report fraud and seek immediate legal
                      remedies under the Consumer Protection Act, 2019. Visit{" "}
                      <a href="https://consumerhelpline.gov.in" className="text-accent hover:underline">
                        National Consumer Helpline
                      </a>
                      .
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Follow-Up Support:</h3>
                  <p>After the initial call, we can connect you with long-term legal resources if needed.</p>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}

