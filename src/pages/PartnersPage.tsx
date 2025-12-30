import { useEffect } from 'react';
import { Layout } from "@/components/Layout";
import { Partners } from "@/components/Partners";

export const PartnersPage = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout className="!pt-10">
            <Partners />
        </Layout>
    );
};

export default PartnersPage;
