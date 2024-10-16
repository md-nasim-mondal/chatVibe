import React, { type ReactNode } from 'react';
import { PageWrapper } from './page-wrapper';
interface SectionContainerProps {
    children: ReactNode;
  }

const SectionContainer: React.FC<SectionContainerProps> = ({children}) => {
    return (
        <PageWrapper>
        <section className='py-12 mx-auto'>
            {children}
        </section>
        </PageWrapper>
    );
}

export default SectionContainer;
