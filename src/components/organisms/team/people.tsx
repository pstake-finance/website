import TeamMemberCard, {
  TeamMemberCardInterface
} from "./team-card";
import React from "react";
import Icon from "../../molecules/Icon";
import { useTranslation } from "next-export-i18n";


const People = () => {
  const { t } = useTranslation("common");

  const teamMembers: TeamMemberCardInterface[] = [
    {
      image: "/images/team/tushar-aggarwal.png",
      name: "Tushar Aggarwal",
      role: "Founder and CEO",
      info:t("TUSHAR_DESCRIPTION"),
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/Tushar307",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/tushar-aggarwal-2823b02b/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/mikhil-pandey.png",
      name: "Mikhil Pandey",
      role: "Co-Founder",
      info:t("MIKHIL_DESCRIPTION"),
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/dneorej",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/jeroendevelter/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/bart.png",
      name: "Bart Van Der Voort",
      role: "Chief Strategy Officer",
      info:t("BART_DESCRIPTION"),
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/loyzhihao",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/loyzhihao/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/marc.png",
      name: "Marc Puig Torres",
      info:t("MARC_DESCRIPTION"),
      role: "Chief Technology Officer",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/Sukriti2108",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/sukriti-taneja-b624731a0/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/aditya.png",
      name: "Aditya Vandker",
      info:t("ADITYA_DESCRIPTION"),
      role: "Head of Growth",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/betterclever",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/betterclever/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/rajesh.png",
      name: "Rajesh Iyer",
      info:t("RAJESH_DESCRIPTION"),
      role: "Head of Product",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/betterclever",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/betterclever/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/puneet.png",
      name: "Puneet Mahajan",
      info:t("PUNEET_DESCRIPTION"),
      role: "Head of Engineering",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/betterclever",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/betterclever/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },
    {
      image: "/images/team/rashi.png",
      name: "Rashi Mittal",
      info:t("RASHI_DESCRIPTION"),
      role: "Marketing",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/betterclever",
          icon: "team-x",
          color: "#141414",
          iconBg: "#C9C9C9"
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/betterclever/",
          icon: "team-linkedin",
          color: "#FFFFFF",
          iconBg: "#0A66C2"
        }
      ]
    },

  ];
  return (
    <div className="bg-[#141414] aos-init aos-animate mb-[60px]"  data-aos="zoom-in-right">
      <div className="max-w-[1220px] mx-auto  md:mx-4 pt-[170px] pb-[30px] lg:pb-[40px]">
        <h3 className="text-[40px] leading-[60px] text-light-high font-bold mb-3 md:mb-4 text-center">
          Meet the Team
          {t('TEAM_PAGE_TITLE')}
        </h3>
        <p className="text-[20px] leading-[25px] text-[#ADADAD] mb-[60px] md:mb-[20px[ text-center max-w-[620px] mx-auto">
          {t('TEAM_PAGE_SUB_TITLE')}
        </p>
      <div className={"grid grid-cols-2 gap-[60px] lg:gap-[30px]  lg:grid-cols-1"}>
        {teamMembers.map((member, index) => (
          <div key={index} className={"flex gap-[24px] md:gap-[12px] md:flex-col md:items-center"}>
            <div className={"w-[193px] h-[250px]"}>
              <img
                src={member.image}
                title={member.role}
                alt={member.role}
                className="mx-2 md:mb-3 w-[100%] h-[100%]"
              />
            </div>
            <div className={"flex-1 md:text-center"}>
              <p className={"text-[#FEFEFE] font-semibold text-[22px] leading-[33px] mb-1"}>{member.name}</p>
              <p className={"text-[#F5F5F5] text-[14px] leading-[21px] mb-2"}>{member.role}</p>
              <p className={"text-[#F5F5F5] text-[14px] leading-[21px] mb-5"}>{member.info}</p>
             <div className={"flex gap-[10px] md:justify-center"}>
               {
                 member.socialLinks.map((link) => (
                   <a href={link.link} key={link.link} target={"_blank"} rel="noreferrer" className={`flex justify-center items-center w-[24px] h-[24px] rounded-full ${link.name === "Twitter" ? "bg-[#C9C9C9]" : "bg-[#0A66C2]"}`}>
                     <Icon
                       viewClass={`socialIcon ${link.name === "Twitter" ? "fill-[#141414]" : "fill-[#FFFFFF]"} !w-[12px] !h-[12px]`}
                       icon={link.icon}
                     />
                   </a>
                 ))
               }
             </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default People;
