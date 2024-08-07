import React, { useEffect, useState } from "react";
import ButtonLink from "../atoms/buttonLink/ButtonLink";
import Modal from "../atoms/modal/Modal";
import Button from "../atoms/button/Button";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const InfoModal = () => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem(`info-modal`) !== "hide"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(`info-modal`, "hide");
    setShow(false);
  };

  const handleCheckBox = (evt: any) => {
    console.log(evt, "checkb-x");
  };

  return (
    <Modal
      show={show}
      onClose={handleClose}
      header=""
      className="termsModal"
      staticBackDrop={true}
      closeButton={true}
    >
      <div className="content max-h-[600px] overflow-auto">
        <div>
          <Image src={"/images/logo.svg"} className={"mb-4 "} alt={"dd"} width={140} height={24} />
          <p className={"mb-4 text-light-full text-lg"}>
            <span className={"font-medium "}>
              {t("INFO_MODAL_TITLE")}
            </span>
            </p>
        </div>
        <p className={" text-light-emphasis text-base mb-4"}>
          {t("INFO_MODAL_CONTENT")}
        </p>
        <div className={"flex items-center gap-6 md:flex-col"}>
          <ButtonLink
            className={`!rounded-[8px] !bg-[#F6931A1A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton py-3 md:text-base !w-[240px] font-semibold md:!h-[42px] !h-[48px] md:!w-[100%]`}
            variant={"outline"}
            href={"https://app.btc.pstake.finance"}
            scale="md"
            target={"_blank"}
            isDisabled={false}
          >
              <span className="nav-link pophover tooltip-multiline app-btn">
                Stake Bitcoin Now
              </span>
          </ButtonLink>
        </div>
      </div>
    </Modal>
  );
};

export default InfoModal;
