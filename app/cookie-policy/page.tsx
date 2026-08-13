import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Cookie Policy | Finrisers",
  description: "How Finrisers uses cookies and related technologies on its website.",
}

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="August 13, 2026">
      <p>
        This Cookie Policy was last updated on August 13, 2026 and applies to visitors of our website,
        https://www.finrisers.com.
      </p>

      <h2>1. Introduction</h2>
      <p>
        Our website, https://www.finrisers.com (hereinafter: &ldquo;the website&rdquo;) uses cookies and
        other related technologies (for convenience all technologies are referred to as &ldquo;cookies&rdquo;).
        Cookies may also be placed by third parties we work with. In the document below we inform you about
        the use of cookies on our website.
      </p>

      <h2>2. What are cookies?</h2>
      <p>
        A cookie is a small simple file that is sent along with pages of this website and stored by your
        browser on the hard drive of your computer or another device. The information stored therein may be
        returned to our servers or to the servers of the relevant third parties during a subsequent visit.
      </p>

      <h2>3. What are scripts?</h2>
      <p>
        A script is a piece of program code that is used to make our website function properly and
        interactively. This code is executed on our server or on your device.
      </p>

      <h2>4. What is a web beacon?</h2>
      <p>
        A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used
        to monitor traffic on a website. In order to do this, various data about you is stored using web
        beacons.
      </p>

      <h2>5. Cookies we may use</h2>
      <h3>5.1 Technical or functional cookies</h3>
      <p>
        Some cookies ensure that certain parts of the website work properly and that your user preferences
        remain known. By placing functional cookies, we make it easier for you to visit our website. This
        way, you do not need to repeatedly enter the same information when visiting our website. We may
        place these cookies without your consent.
      </p>
      <h3>5.2 Statistics cookies</h3>
      <p>
        We use statistics cookies to optimize the website experience for our users. With these statistics
        cookies we get insights into the usage of our website. We ask your permission before placing
        statistics cookies.
      </p>
      <h3>5.3 Marketing/tracking cookies</h3>
      <p>
        Marketing/tracking cookies are cookies, or any other form of local storage, used to create user
        profiles to display advertising or to track the user on this website or across several websites for
        similar marketing purposes.
      </p>

      <h2>6. Types of cookies used on this website</h2>
      <table>
        <thead>
          <tr>
            <th>Type of Cookie</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary cookies</td>
            <td>Required for the core operation and security of the website.</td>
          </tr>
          <tr>
            <td>Analytical/performance cookies</td>
            <td>Help us understand how visitors use our website so we can improve it.</td>
          </tr>
          <tr>
            <td>Functionality cookies</td>
            <td>Remember your preferences to personalise your experience on return visits.</td>
          </tr>
          <tr>
            <td>Marketing/tracking cookies</td>
            <td>Used to make advertising more relevant to you and your interests.</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Consent</h2>
      <p>
        By continuing to use our website, you consent to our use of cookies as described in this Cookie
        Policy. You can disable the use of cookies via your browser at any time, but please note that our
        website may no longer work properly.
      </p>

      <h2>8. Enabling/disabling and deleting cookies</h2>
      <p>
        You can use your internet browser to automatically or manually delete cookies. You can also specify
        that certain cookies may not be placed. Another option is to change the settings of your internet
        browser so that you receive a message each time a cookie is placed. For more information about
        these options, please refer to the instructions in the help section of your browser.
      </p>
      <p>
        Please note that our website may not work properly if all cookies are disabled. If you do delete the
        cookies in your browser, they may be placed again when you visit our website again.
      </p>

      <h2>9. Your rights with respect to personal data</h2>
      <p>You have the following rights with respect to your personal data:</p>
      <ul>
        <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
        <li><strong>Right of access:</strong> you have the right to access your personal data that is known to us.</li>
        <li><strong>Right to rectification:</strong> you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
        <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
        <li><strong>Right to data portability:</strong> you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
        <li><strong>Right to object:</strong> you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
      </ul>
      <p>
        To exercise these rights, please contact us using the details below. If you have a complaint about
        how we handle your data, we would like to hear from you, but you also have the right to submit a
        complaint to your relevant supervisory or regulatory authority.
      </p>

      <h2>10. Contact details</h2>
      <p>For questions and/or comments about our Cookie Policy, please contact us using the following details:</p>
      <ul>
        <li>Finrisers</li>
        <li>5900 Balcones Drive, Suite 5506</li>
        <li>Austin, TX 78731</li>
        <li>United States</li>
        <li>Website: https://www.finrisers.com</li>
        <li>Email: info@finrisers.com</li>
        <li>Phone: (737) 419-5117</li>
      </ul>
    </LegalPage>
  )
}
