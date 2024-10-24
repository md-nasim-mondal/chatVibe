import Statistics from '@/components/dashboard/adminDashboard/Statistics';
import ProtectAdmin from '@/components/protectRoute/ProtectAdmin';
import React from 'react';

const page = () => {
    return (
        <ProtectAdmin>
           <Statistics/> 
        </ProtectAdmin>
    );
};

export default page;