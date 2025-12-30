import { useEffect } from 'react';
import { Layout } from "@/components/Layout";
import { Solutions } from "@/components/Solutions";

export const SolutionsPage = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout className="!pt-10">
            <Solutions />
        </Layout>
    );
};

export default SolutionsPage;
