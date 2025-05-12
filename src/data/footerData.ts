// footerData.ts

export const footerData = {
    company: {
      logo: "/logo/footer-logo.png",
      description:
        "Connecting fishing enthusiasts with experienced captains for unforgettable charter experiences.",
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    },
    sections: [
      {
        title: "For Anglers",
        links: [
          { label: "Find Trips", url: "/trips" },
          { label: "Join Group Trips", url: "/group-signup" },
          { label: "How It Works", url: "#" },
          { label: "Safety Guidelines", url: "#" }
        ]
      },
      {
        title: "For Captains",
        links: [
          { label: "List Your Boat", url: "/captain" },
          { label: "Captain Resources", url: "#" },
          { label: "Insurance Information", url: "#" },
          { label: "Safety Standards", url: "#" }
        ]
      },
      {
        title: "Support",
        contacts: [
          {
            type: "email",
            label: "support@fishingtripper.com",
            icon: "Mail",
            url: "mailto:support@fishingtripper.com"
          },
          {
            type: "phone",
            label: "+1 (800) 123-4567",
            icon: "Phone",
            url: "tel:+18001234567"
          }
        ],
        links: [
          { label: "FAQs", url: "#" },
          { label: "Terms & Conditions", url: "#" },
          { label: "Privacy Policy", url: "#" }
        ]
      }
    ]
  };
  