import Image from "next/image";
import HeaderButton from "@/components/header/HeaderButton";
import HeaderWallet from "@/components/header/HeaderWallet";
import CuteButton from "@/components/UI/CuteButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#FDFBF7] h-[92px] pl-[59px] pr-[17px] py-[15px] flex flex-row justify-between items-center border-b-4 border-black">

        {/* Logo & Namey */}
        <div className="flex items-center gap-2">
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <Image
              src="/icons/ripple_logo.svg"
              alt="Ripple_Logo"
              width={60}
              height={60}
            />
          </div>
          <h1 className="font-providenceSansBold text-black text-5xl mt-[5px]">
            Ripple
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-[12px] font-fredoka font-semibold text-black text-xl">
          <HeaderButton
            button_icon="/icons/marketplace.svg"
            button_name="Marketplace"
          />
          <HeaderButton
            button_icon="/icons/leaderboard.svg"
            button_name="Leaderboard"
          />
          <HeaderButton
            button_icon="/icons/account.svg"
            button_name="Account"
          />
          <HeaderWallet
            riplen_icon="/icons/riplen_coin.svg"
            wallet_balance="2354"
          />
        </div>
      </header>

      {/* Hero ig */}
      <main className="h-full bg-[#FDFBF7] border-b-4 border-black">

        {/* Main */}
        <div className="flex flex-row justify-center gap-[150px] pl-[101px] pr-[38px] pt-[40px]">

          {/* Banger title */}
          <div className="pt-[89px]">
            <div className="mb-[15px]">
              <h2 className="text-black text-6xl font-fredoka font-bold leading-tight relative inline-block mb-3">
                Drop a word,
                <br />
                Watch it <span className="text-blue-500">Ripple.
                </span>
                <Image
                  src="/icons/underline1.svg"
                  alt="underline"
                  width={230}
                  height={50}
                  className="w-[220px] absolute right-0 top-full"
                />
              </h2>

              <p className="text-[#404040] font-providenceSans  font-semibold text-xl">
                Participate in ripple rooms and submit words
                <br />
                or sentences in a shiritori styled manner and
                <br />
                create long chain of words or a story with other
                <br />
                participants, earn <span className="font-bold text-black">Riplens</span> and dress up your
                <br />
                <span className="text-black font-bold">Rippie</span> with silly outfits.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-1 gap-[32px]">
              <CuteButton
                button_color="#FF374F"
                button_name="Play Now ->"
              />
              <CuteButton
                button_color="#00E582"
                button_name="How to play ->"
              />
            </div>

            {/* User's info */}
            <div className="flex flex-row gap-[20px] mt-[30px]">
              <div className="flex flex-row">
                <Image
                  src="/icons/online_icon.svg"
                  alt="Splash Art"
                  width={1}
                  height={1}
                  className="w-5 h-5 mx-[8px]"
                  />
                <p className="font-providenceSans text-black text-[17px]">1045 Rippies onboard</p>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/icons/riplen_coin.svg"
                  alt="Splash Art"
                  width={1}
                  height={1}
                  className="w-5 h-5 mx-[8px]"
                />
                <p className="font-providenceSans text-black text-[17px]">4.2m Riplens earned by <br/>all the rippies</p>
              </div>
            </div>
          </div>

          {/* Splash art */}
          <div className="">
            <Image
              src="/splash_arts/placeholder_splash_art.svg"
              alt="Splash Art"
              width={1}
              height={1}
              className="w-180 h-180"
            />
          </div>
        </div>

        {/* Rooms showcase */}
        <div>
          Rooms

          {/* Vocabulary room */}
          <div>
            Vocabulary rooms
          </div>

          {/* Story room */}
          <div>
            Story rooms
          </div>
        </div>

        {/* Inbox ki bheekh maangna */}
        <div>
          Subscribe to inbox notifications
        </div>
      </main>

      {/* No one sees these stuff but its still very important */}
      <footer className="bg-[#FDFBF7]">
        <div>
          footer1
        </div>
        <div>
          footer2
        </div>
      </footer>
    </div>
  );
}
