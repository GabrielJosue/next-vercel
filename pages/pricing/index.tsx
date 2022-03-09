import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
const PricingPage = ()=>{
  return(
   <MainLayout>
    <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/contact" replace>Contact</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing/index.jsx</code>
        </p>
  </MainLayout>
  )

}
export default PricingPage;