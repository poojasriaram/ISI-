import { useEffect } from 'react';
import { Layout } from "@/components/Layout";
import { Customers } from "@/components/Customers";

export const CustomersPage = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout className="!pt-10">
            <Customers />
        </Layout>
    );
};

export default CustomersPage;
