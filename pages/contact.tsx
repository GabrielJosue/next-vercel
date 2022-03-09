
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";
const ContactPage = () => {
  return (
  <MainLayout>
    <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/about" replace>About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.js</code>
        </p>
  </MainLayout>
  
  );
};
export default ContactPage;