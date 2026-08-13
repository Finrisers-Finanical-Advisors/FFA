import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "External Privacy Notice | Finrisers",
  description: "How Finrisers collects, uses, and protects your personal data.",
}

export default function ExternalPrivacyNoticePage() {
  return (
    <LegalPage title="External Privacy Notice" updated="August 13, 2026">
      <h2>1. Who we are and what we do</h2>
      <h3>Who we are</h3>
      <p>
        We are Finrisers (&ldquo;Finrisers&rdquo;, &ldquo;us&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;).
        Our registered office is at 5900 Balcones Drive, Suite 5506, Austin, TX 78731, United States.
      </p>
      <h3>What we do</h3>
      <p>
        We are a business advisory, management consulting, and financial services firm that provides a full
        range of bespoke tax and accountancy services. We are committed to protecting the privacy and
        security of the Personal Data we process about you.
      </p>
      <h3>Controller</h3>
      <p>
        Unless we notify you otherwise, we are the controller of the Personal Data we process about you.
        This means that we decide what Personal Data to collect and how to process it.
      </p>

      <h2>2. Purpose of this privacy notice</h2>
      <p>
        The purpose of this privacy notice is to explain what Personal Data we collect about you and how we
        process it. This privacy notice also explains your rights, so please read it carefully. If you have
        any questions, you can contact us using the information provided below under the &lsquo;How to
        contact us&rsquo; section.
      </p>

      <h2>3. Who this privacy notice applies to</h2>
      <p>This privacy notice applies to you if:</p>
      <ul>
        <li>You visit our website</li>
        <li>You purchase services from us</li>
        <li>You enquire about our products and/or services</li>
      </ul>

      <h2>4. What Personal Data is</h2>
      <p>
        &lsquo;Personal Data&rsquo; means any information from which someone can be identified either
        directly or indirectly. For example, you can be identified by your name or an online identifier.
      </p>

      <h2>5. Personal Data we collect</h2>
      <p>
        The type of Personal Data we collect about you will depend on our relationship with you. For the
        type of Personal Data we collect see the table below in the section entitled &lsquo;Purposes &amp;
        lawful bases for processing&rsquo;.
      </p>

      <h2>6. How we collect your Personal Data</h2>
      <p>
        We collect most of the Personal Data directly from you in person, by telephone, text, email and/or
        via our website.
      </p>
      <p>However, we may also collect your Personal Data from third parties such as:</p>
      <ul>
        <li>reputable companies who provide lead generation contact lists</li>
        <li>others to whom you have provided consent</li>
        <li>publicly available sources such as social media platforms</li>
      </ul>

      <h2>7. Purposes &amp; lawful bases for processing</h2>
      <p>
        We will only use your Personal Data when the law allows. Most commonly, we may use your Personal
        Data in the following (but not limited to) circumstances:
      </p>
      <ul>
        <li>Provision of accounting and other professional services</li>
        <li>Client management</li>
        <li>Due diligence</li>
        <li>Statutory compliance (e.g. anti-money laundering regulations)</li>
        <li>Quality control and to improve/expand our services</li>
        <li>Internal assessments</li>
        <li>Marketing and promotion</li>
        <li>Quotations</li>
        <li>Invitation to events</li>
        <li>Recruitment</li>
        <li>Credit control/debt management</li>
        <li>General internal administration</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Categories of Personal Data</th>
            <th>Purpose of Processing</th>
            <th>Lawful Basis</th>
          </tr>
        </thead>
        <tbody>
          {[
            "Contact details (name, address, email address, telephone number)",
            "Length of service (including all continuous service)",
            "Proof of identity/government ID",
            "Basic rate of pay/annual salary",
            "Date of birth & age",
            "Marital status",
            "National Insurance/Social Security number",
            "Type of contract (permanent/temporary/fixed term/casual etc.)",
            "Number of working days per week/contracted hours",
            "Holiday/absence records",
            "Financial details of insurances and health cover",
            "Bonus details",
            "Pension information",
          ].map((row) => (
            <tr key={row}>
              <td>{row}</td>
              <td>To provide our services to you</td>
              <td>Contract</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Where Personal Data is processed because it is necessary for the performance of a contract to which
        you are a party, we will be unable to provide our services without the required information.
      </p>

      <h2>8. Sharing your Personal Data</h2>
      <p>
        We may share your Personal Data with our carefully selected third parties, for example, we may use
        a supplier to provide services which support the services which we provide to you. In this case, we
        remain responsible for your Personal Data and will ensure we have a written agreement in place with
        any third-party provider. We currently use third-party suppliers:
      </p>
      <ul>
        <li>for invoice purposes</li>
        <li>to set up direct debits and payments</li>
        <li>for software for internal business purposes</li>
        <li>for communicating with all Finrisers&rsquo; stakeholders</li>
      </ul>

      <h2>9. International Transfers</h2>
      <p>
        Your Personal Data may be transferred to and processed in countries other than the one in which you
        are located. This may happen because the organisations we use to provide our services to you may be
        based in, or have servers based in, other countries.
      </p>
      <p>
        Where we transfer your Personal Data internationally, we take appropriate steps to ensure it
        continues to be protected to a standard consistent with applicable data protection laws, including
        through the use of standard contractual clauses, adequacy decisions, or other legally recognised
        safeguards where required.
      </p>

      <h2>10. Your rights and how to complain</h2>
      <p>You have certain rights in relation to the processing of your Personal Data, including:</p>
      <ul>
        <li>
          <strong>Right to be informed</strong> &mdash; you have the right to know what personal data we
          collect about you, how we use it, for what purpose and in accordance with which lawful basis, who
          we share it with and how long we keep it. We use our privacy notice to explain this.
        </li>
        <li>
          <strong>Right of access</strong> (commonly known as a &ldquo;Subject Access Request&rdquo;) &mdash;
          you have the right to receive a copy of the Personal Data we hold about you.
        </li>
        <li><strong>Right to rectification</strong> &mdash; you have the right to have any incomplete or inaccurate information we hold about you corrected.</li>
        <li><strong>Right to erasure</strong> (commonly known as the right to be forgotten) &mdash; you have the right to ask us to delete your Personal Data.</li>
        <li>
          <strong>Right to object to processing</strong> &mdash; you have the right to object to us
          processing your Personal Data. If you object to us using your Personal Data for marketing
          purposes, we will stop sending you marketing material.
        </li>
        <li><strong>Right to restrict processing</strong> &mdash; you have the right to restrict our use of your Personal Data.</li>
        <li><strong>Right to portability</strong> &mdash; you have the right to ask us to transfer your Personal Data to another party.</li>
        <li>
          <strong>Automated decision-making</strong> &mdash; you have the right not to be subject to a
          decision based solely on automated processing which will significantly affect you. We do not use
          automated decision-making.
        </li>
        <li>
          <strong>Right to withdraw consent</strong> &mdash; if you have provided your consent for us to
          process your Personal Data for a specific purpose, you have the right to withdraw your consent at
          any time. If you do withdraw your consent, we will no longer process your information for the
          purpose(s) you originally agreed to, unless we are permitted by law to do so.
        </li>
        <li>
          <strong>Right to lodge a complaint</strong> &mdash; you have the right to lodge a complaint with
          the relevant supervisory or regulatory authority if you are concerned about the way in which we
          are handling your Personal Data.
        </li>
      </ul>
      <h3>How to exercise your rights</h3>
      <p>
        You will not usually need to pay a fee to exercise any of the above rights. However, we may charge
        a reasonable fee if your request is clearly unfounded or excessive. Alternatively, we may refuse to
        comply with the request in such circumstances.
      </p>
      <p>
        If you wish to exercise your rights, you may contact us using the details set out below within the
        section called &lsquo;How to contact us&rsquo;. We may need to request specific information from
        you to confirm your identity before we can process your request. Once in receipt of this, we will
        process your request without undue delay and within one month. In some cases, such as with complex
        requests, it may take us longer than this and, if so, we will keep you updated.
      </p>

      <h2>11. How long do we retain your data?</h2>
      <p>
        We will retain your Personal Data for as long as is necessary to provide you with our services and
        for a reasonable period thereafter to enable us to meet our contractual and legal obligations and to
        deal with any complaints and claims that may arise.
      </p>
      <p>
        At the end of the retention period, your Personal Data will be securely deleted or anonymised, for
        example by aggregation with other data, so that it can be used in a non-identifiable way for
        statistical analysis and business planning.
      </p>

      <h2>12. How to contact us</h2>
      <p>
        If you wish to contact us in relation to this privacy notice or if you wish to exercise any of your
        rights outlined above, please contact us as follows:
      </p>
      <ul>
        <li>Postal address: Finrisers, 5900 Balcones Drive, Suite 5506, Austin, TX 78731, United States</li>
        <li>Email address: info@finrisers.com</li>
        <li>Telephone: (737) 419-5117</li>
      </ul>

      <h2>13. Changes to this privacy notice</h2>
      <p>
        We may update this notice (and any supplemental privacy notice) from time to time as shown above.
        We will notify you of changes where required by applicable law to do so.
      </p>
    </LegalPage>
  )
}
