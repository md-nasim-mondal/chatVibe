import React, { type ReactNode } from 'react';
interface SectionContainerProps {
    children: ReactNode;
  }

const SectionContainer: React.FC<SectionContainerProps> = ({children}) => {
    return (
        <section className='py-12 mx-auto'>
            {children}
        </section>
    );
}

export default SectionContainer;
