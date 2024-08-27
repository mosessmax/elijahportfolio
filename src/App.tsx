import React from 'react'

const Header: React.FC = () => (
  <header className="flex flex-col sm:text-sm text-base dark:text-slate-12 gap-1 mb-10 text-slate-light-12">
    <h1>Remilekun Elijah</h1>
    <h2>fullstack developer in Lagos NGA</h2>
  </header>
);
  // const [count, setCount] = useState(0)


  const App: React.FC = () => {
    return <body className='bg-slate-1 dark:bg-slate-12 text-slate-light-12 dark:text-slate-1'>
      <div className='container mx-auto px-4'>
        <Header />
        <main>
          <p>
            I'm a fullstack developer based in Lagos, Nigeria. I specialize in building web applications using React and Node.js.
          </p>
        </main>
      </div>
    </body>;
  }
export default App;
