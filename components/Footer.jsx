import Socials from './Socials';


const Footer = () => {
  return (
    <footer className="py-4 border-t-2 border-accent bg-accent/10">
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <Socials className="flex gap-x-6 text-[20px]"/>
          <div>
            Copyright &copy; Maftei Alexandru. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer