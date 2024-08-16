import React, { useEffect, useState } from "react";
import ButtonLink from "../atoms/buttonLink/ButtonLink";
import Modal from "../atoms/modal/Modal";
import { useAppStore } from "../../store/store";
import { shallow } from "zustand/shallow";
import { BABYLON_RUSH_END_DATE } from "../../utils/config";

const InfoModal = () => {
  const [show, setShow] = useState(true);
  const targetDate = new Date(BABYLON_RUSH_END_DATE);

  const [btcTvl] = useAppStore((state) => [state.btcTvl], shallow);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem(`info-modal`) !== "hide") {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }, []);

  const handleClose = () => {
    // localStorage.setItem(`info-modal`, "hide");
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onClose={handleClose}
      header=""
      className="info-modal"
      staticBackDrop={true}
      closeButton={true}
    >
      <div className="content max-h-[564px] overflow-auto">
        <div className={"flex md:flex-col"}>
          <div
            className={
              "h-[564px] md:hidden w-[362px] rounded-tl-md rounded-bl-md"
            }
          >
            <img
              src={"/images/babylon-rush.webp"}
              className={"h-full rounded-tl-md rounded-bl-md"}
              alt={"rush"}
            />
          </div>
          <div className={"py-[40px] p-[34px] flex-1"}>
            <p
              className={
                "text-[#fff] font-semibold text-[24px] lg:text-[18px] mb-4"
              }
            >
              Welcome to pSTAKE&apos;s Babylon Rush!
            </p>
            <p className={"mb-4 text-[#E0E0E0] text-[14px]"}>
              pSTAKE is rewarding its early Bitcoin Liquid Staking adopters to
              celebrate crossing $1M TVL.
            </p>
            <p className={"mb-4 text-[#E0E0E0] text-[14px]"}>
              All existing and new BTC depositors will share up to 100,000
              $PSTAKE tokens.
            </p>
            <p className={"mb-6 text-[#E0E0E0] text-[14px]"}>
              Cherry on top? Get hassle-free exposure to the upcoming Babylon
              launch.
            </p>
            <div className={"flex mb-4"}>
              <div className={"flex-1"}>
                <p className={"text-[#E0E0E0] text-[14px]"}>
                  pSTAKE Deposit Cap
                </p>
                <p
                  className={
                    "text-[22px] lg:text-base font-semibold text-[#FCFCFC]"
                  }
                >
                  {Number(btcTvl).toFixed(2)}
                  /50 <span className={"text-[#A6A6A6]"}>BTC</span>
                </p>
              </div>
              <div className={"flex-1"}>
                <p className={"text-[#E0E0E0] text-[14px]"}>
                  Total Reward Pool
                </p>
                <p
                  className={
                    "text-[22px] lg:text-base font-semibold text-[#FCFCFC]"
                  }
                >
                  100,000 <span className={"text-[#A6A6A6]"}>$PSTAKE</span>
                </p>
              </div>
            </div>
            <div className={"mb-[60px] lg:mb-[20px]"}>
              <p className={"text-[#E0E0E0] text-[12px] mb-2"}>Time Left</p>
              <div className={"flex items-center gap-[6px]"}>
                <div
                  className={
                    "w-[70px] p-[6px] rounded-[5px] border-[0.556px] border-[#404040]"
                  }
                >
                  <p
                    className={
                      "text-center text-[#FFFFFF] text-[20px] font-semibold border-b-[0.56px] border-[#F7931A]"
                    }
                  >
                    {timeLeft.days}
                    <span className={"text-[#A6A6A6] pl-1"}>d</span>
                  </p>
                </div>
                <span>:</span>
                <div
                  className={
                    "w-[70px] p-[6px] rounded-[5px] border-[0.556px] border-[#404040]"
                  }
                >
                  <p
                    className={
                      "text-center text-[#FFFFFF] text-[20px] font-semibold border-b-[0.56px] border-[#F7931A]"
                    }
                  >
                    {timeLeft.hours}
                    <span className={"text-[#A6A6A6] pl-1"}>h</span>
                  </p>
                </div>
                <span>:</span>
                <div
                  className={
                    "w-[70px] p-[6px] rounded-[5px] border-[0.556px] border-[#404040]"
                  }
                >
                  <p
                    className={
                      "text-center text-[20px] text-[#FFFFFF] font-semibold border-b-[0.56px] border-[#F7931A]"
                    }
                  >
                    {timeLeft.minutes}
                    <span className={"text-[#A6A6A6] pl-1"}>m</span>
                  </p>
                </div>
                <span>:</span>
                <div
                  className={
                    "w-[70px] p-[6px] rounded-[5px] border-[0.556px] border-[#404040]"
                  }
                >
                  <p
                    className={
                      "text-center text-[20px] text-[#FFFFFF] font-semibold border-b-[0.56px] border-[#F7931A]"
                    }
                  >
                    {timeLeft.seconds}
                    <span className={"text-[#A6A6A6] pl-1"}>s</span>
                  </p>
                </div>
              </div>
            </div>
            <ButtonLink
              className={`!rounded-[24px] !bg-[#F7931A] hover:!bg-[#F6931A4D] border !border-[#EE972C] !text-[#141414] dropDownButton py-3 md:text-base !w-[240px] font-semibold md:!h-[42px] !h-[48px] md:!w-[100%]`}
              variant={"outline"}
              href={"https://app.btc.pstake.finance"}
              scale="md"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn">
                Stake BTC
              </span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InfoModal;
