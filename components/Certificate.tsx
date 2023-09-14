import SectionTitle from "./SectionTitle";
import { recodedCert } from "@/public/assets";
import Image from "next/image";
const Certificate = () => {
  return (
    <section
      id="certificate"
      className="max-w-contentContainer mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="My Certificates" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://api.accredible.com/v1/auth/invite?code=64688c89c8279559207e&credential_id=75c1aadd-9a72-468b-bb78-0d5da179af72&url=https%3A%2F%2Fwww.credential.net%2F75c1aadd-9a72-468b-bb78-0d5da179af72&ident=fc125463-4dfc-4600-833a-f2562f8bdbe1"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={recodedCert}
                  alt="recodedCertificatImg"
                />
              </div>
            </a>
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://api.accredible.com/v1/auth/invite?code=64688c89c8279559207e&credential_id=75c1aadd-9a72-468b-bb78-0d5da179af72&url=https%3A%2F%2Fwww.credential.net%2F75c1aadd-9a72-468b-bb78-0d5da179af72&ident=fc125463-4dfc-4600-833a-f2562f8bdbe1"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={recodedCert}
                  alt="recodedCertificatImg"
                />
              </div>
            </a>
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://api.accredible.com/v1/auth/invite?code=64688c89c8279559207e&credential_id=75c1aadd-9a72-468b-bb78-0d5da179af72&url=https%3A%2F%2Fwww.credential.net%2F75c1aadd-9a72-468b-bb78-0d5da179af72&ident=fc125463-4dfc-4600-833a-f2562f8bdbe1"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={recodedCert}
                  alt="recodedCertificatImg"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
