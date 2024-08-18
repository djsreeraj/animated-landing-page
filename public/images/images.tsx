import Image from 'next/image'
import Link from 'next/link'
 
export function Logo() {
  return <div>
      <Link href="/" passHref style={{ cursor: 'pointer', display: 'block' }}>
          <Image src="/images/logo.png" alt="Montoyo Logo" width={60} height={38} />
      </Link>

  </div>
}
 