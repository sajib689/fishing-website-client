// Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone
} from "lucide-react";
import { footerData } from "../../data/footerData";

const iconMap: Record<string, React.ReactNode> = {
    Twitter: <Twitter className="h-5 w-5" />,
    Facebook: <Facebook className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
    Mail: <Mail className="h-4 w-4 mr-2 text-[#757575]" />,
    Phone: <Phone className="h-4 w-4 mr-2 text-[#757575]" />
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] text-white px-5 sm:px-6 lg:px-8">
      <div className="border-t border-[#E0E0E0] max-w-7xl mx-auto"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src={footerData.company.logo}
                alt="Footer Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[#757575] text-[16px]">
              {footerData.company.description}
            </p>
            <div className="flex space-x-4">
              {footerData.company.socialLinks.map(({ platform, url }) => (
                <Link
                  key={platform}
                  href={url}
                  className="text-[#171717] hover:text-[#000] transition duration-150 ease-in-out"
                >
                  {iconMap[platform]}
                </Link>
              ))}
            </div>
          </div>

          {/* Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-[#171717] uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {/* Contacts (email, phone) */}
                {"contacts" in section &&
                  section.contacts?.map(({ type, label, icon, url }) => (
                    <li key={type} className="flex items-center">
                      {iconMap[icon]}
                      <a
                        href={url}
                        className="text-[#757575] hover:text-[#000] transition duration-150 ease-in-out"
                      >
                        {label}
                      </a>
                    </li>
                  ))}

                {/* Navigation Links */}
                {section.links?.map(({ label, url }) => (
                  <li key={label}>
                    <Link
                      href={url}
                      className="text-[#757575] hover:text-[#000] transition duration-150 ease-in-out text-[16px]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="">
          <p className="text-[#757575] text-sm text-start">
            Copyright &copy; {new Date().getFullYear()} Cabana Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
