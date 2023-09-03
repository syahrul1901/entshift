import FloatingWhatsAppButton from "components/FloatingWhatsAppButton";
import Header from "components/layouts/Navbar/Header";
import Footer from "../Footer/footer";
const AppShell = (props) => {
  const { children } = props;
  return (
    <main>
      <Header />
      {children}
      <FloatingWhatsAppButton />
      <Footer />
    </main>
  );
};

export default AppShell;
