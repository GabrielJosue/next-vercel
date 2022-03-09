import { FC,CSSProperties } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'



//crear styles afuera para evitar render
const style:CSSProperties ={
 color: '#0070f3',
 textDecoration:'underline'
}
//inteface
interface Props{
  text:string;
  href:string;

}
export const ActiveLink: FC<Props> = ({text,href}) => {
  const {asPath} =useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style:undefined}>{text}</a>
     </Link>
    
  )
}
