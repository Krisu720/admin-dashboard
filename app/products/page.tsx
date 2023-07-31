import Breadcrumbs from '@/components/Breadcrumbs'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div>
    <Breadcrumbs items={[{name: "products",href:"products"}]}/>
    <div className='h-4' />
    <h1 className='text-3xl font-bold'>Products</h1>
  </div>
}

export default page