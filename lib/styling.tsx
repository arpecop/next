import React  from 'react';
 
type ChildProps = { children: React.ReactNode };

export function useStyledComponentsRegistry() {
 

 

  function StyledComponentsRegistry({ children }: ChildProps) {
    if (typeof window !== 'undefined') return <>{children}</>;
    return (
      <div>
        {children as React.ReactChild}
      </div>
    );
  }

  return [StyledComponentsRegistry] as const;
}

export function useStyledJsxRegistry() {
 

   
  function StyledJsxRegistry({ children }: ChildProps) {
    return  children 
  }

  return [StyledJsxRegistry] as const;
}
