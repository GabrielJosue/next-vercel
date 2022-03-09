
import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
//import Layout
import {MainLayout} from "../components/layouts/MainLayout";
// import global styles

const AboutPage = () => {
  return (
   <>
   <h1>About Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/" replace>Home</Link>
        </h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.js</code>
        </p>
   </>
        
   
  );
};
export default AboutPage;

AboutPage.getLayout =function getLayout (page:JSX.Element) {
  return(
   <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
  </MainLayout>
  )
  
}
  
