import React, { useState } from 'react'

const initialState = {
  all: {},
  images: {},
  videos: {},
  news: {},
}

const ResultTempContext = React.createContext(initialState)

const ResultTempProvider = ({ children }) => {
  const [results, setResults] = useState(initialState)

  return (
    <ResultTempContext.Provider value={{ results, setResults }}>
      {children}
    </ResultTempContext.Provider>
  )
}

export { ResultTempContext, ResultTempProvider }