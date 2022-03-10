import Form from './Form'




const Header = ({
    submitHandler,
    languageHandler, 
    language, 
    searchRef,
    todaysDateDisplay
    }) => {
  return (
    <header>
        <h1>News</h1>
        <h3>{todaysDateDisplay}</h3>
        <aside>
            <Form 
            submitHandler={submitHandler}
            languageHandler={languageHandler}
            language={language}
            searchRef={searchRef}/>
        </aside>
        
    </header>
  )
}

export default Header