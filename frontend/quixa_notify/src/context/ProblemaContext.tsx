import React, { createContext, useState, ReactNode } from 'react';

export const ProblemaContext = createContext({
  problemaCadastrado: 0,
  changeProblemaCadastrado: () => {}
});

type ProblemaProviderProps = {
  children: ReactNode;
};

export const ProblemaProvider = ({ children }: ProblemaProviderProps) => {
  const [problemaCadastrado, setProblemaCadastrado] = useState(0);

  const changeProblemaCadastrado = () => {
    setProblemaCadastrado(problemaCadastrado + 1);
  }

  return (
    <ProblemaContext.Provider value={{ problemaCadastrado, changeProblemaCadastrado }}>
      {children}
    </ProblemaContext.Provider>
  );
};
