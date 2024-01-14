import SectionTitle from "./Reuse/SectionTitle.jsx";
import {
  adidas,
  balenciaga,
  chanel,
  gucci,
  lvmh,
  nike,
  puma,
  asos,
  dg} from "../../assets/home/logo"
export default function Trusted() {
  return (
    <section className="mt-14 bg-[#6D9886] rounded-md py-24">
      <div className="flex items-center md:justify-around px-4 gap-4 flex-wrap justify-center">
        <SectionTitle title="trusted by" classes="opacity-50" />
        <div className="lg:w-1/2 w-full flex flex-wrap items-center lg:justify-start justify-center gap-4 lg:mt-0 mt-4">
          <img src={adidas} alt="broken" className="w-30 h-[5rem] mb-4"/>
          <img src={balenciaga} alt="broken" className="w-30 h-[5rem] mb-4"/>
          <img src={chanel} alt="broken" className="w-30 h-[5rem] mb-4"/>
          <img src={gucci} alt="broken" className="w-30 h-[5rem] mb-4"/>
          <img src={lvmh} alt="broken" className="w-30 h-[5rem] mb-4"/>
          <img src={nike} alt="broken" className="w-30 h-[5rem] mb-4"/>
          <img src={puma} alt="broken" className="w-30 h-[5rem]"/>
          <img src={asos} alt="broken" className="w-30 h-[5rem]"/>
          <img src={dg} alt="broken" className="w-30 h-[5rem]"/>
        </div>
      </div>
    </section>
  );
}
