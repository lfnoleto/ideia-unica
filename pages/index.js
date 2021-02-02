import Head from 'next/head'


const Logo = () =>(
  <>
    <img src="./logo.png" width="150" className="p-2 hidden md:inline-block"/>
    <img src="./codar.png" width="150" className="p-2 md:hidden "/>
  </>
)

const Menu  = () => (
  <div className="p2 flex items-center ">
    <a href="http://github.com/lfnoleto" target="_blank">github</a> 
    <a href="http://instagram.com/lfnoleto" target="_blank"> Instagram </a> 
    <a href="http://youtube.com/lfnoleto" target="_blank"> Youtube </a>
	<a href="https://chat.blip.ai/?appKey=c3Rvcnl0ZWxsaW5nOjgzZTYxZmIxLWI4YTAtNGU1MC1hZjk5LTIzMzNjZGYwNTdhZA==" target="_blank"> CHATBOT </a>
  </div>
)

const Banner  = () => (
  <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-certer sm:items-start text-center sm:text-left">
    <span className="text-gray">A criatividade é a inteligencia se divertindo.</span>
    <div className="uppdercase text-4xl font-extrabold leading-snug">
    Desenvolva-se <span className="text-green">Evoluar</span> de verdade.
    </div>
    <span className="text-gray">A alegria não está nas coisas, está em nós.</span>
  </div>
)



const Header =()=>(
  <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
   <Logo/>
   <Menu/>
   
  </div>
)


export default function Home() {
  return (
    <div className="conteiner flex flex-col flex-1">
      <Head>
        <title>Lucas Noleto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>
	  
    </div>
  )
}
