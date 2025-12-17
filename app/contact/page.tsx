import Header from "../components/Header"
import Layout from "../components/Layout";
import Form from "../components/Form"

export default function contact () {
    return (
        <Layout>
            <h1 className="contact-page-title">Contact Page</h1>
            <h2>Contactez nous</h2>
            <Form/>
        </Layout>
    );
}