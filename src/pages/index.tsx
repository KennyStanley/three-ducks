import Header from "@/components/Header"
import Content from "@/components/Content";

export default function Home() {
  return (
      <>
          <main data-testid="index">
              <div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
                  <Header />
                  <Content /> 
              </div>
          </main>
      </>
  )
}