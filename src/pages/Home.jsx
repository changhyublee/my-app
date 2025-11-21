import Banner from '../components/Banner';
import PortShips from '../components/PortShips';
import NewPartnerShips from '../components/NewPartnerShips';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="pt-6 pb-8">
        <div className="container mx-auto px-4">
          <Banner />
        </div>
      </section>

      {/* Port Ships Section */}
      <PortShips />

      {/* New Partner Ships Section */}
      <NewPartnerShips />

      {/* Footer */}
      <Footer />
    </div>
  );
}
