import Image from "next/image";
import HeaderButton from "@/components/header/HeaderButton";
import HeaderWallet from "@/components/header/HeaderWallet";
import CuteButton from "@/components/UI/CuteButton";
import RoomSection from "@/components/UI/RoomSection";
import Footer from "@/components/UI/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#FDFBF7] px-4 sm:px-6 lg:pl-[59px] lg:pr-[17px] py-3 lg:py-[15px] flex flex-row flex-wrap gap-3 justify-between items-center border-b-4 border-black">

        {/* Logo & Namey */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] flex items-center justify-center shrink-0">
            <Image
              src="/icons/ripple_logo.svg"
              alt="Ripple_Logo"
              width={60}
              height={60}
              className="w-full h-full"
            />
          </div>
          <h1 className="font-providenceSansBold text-black text-2xl sm:text-3xl lg:text-5xl lg:mt-[5px]">
            Ripple
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-[12px] font-fredoka font-semibold text-black text-xl">
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
      <main className="h-full bg-[#FDFBF7] border-b-4 border-black px-6 sm:px-10 lg:pl-[101px] lg:pr-0">

        {/* Main */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-[150px] lg:pr-[38px] pt-10 lg:pt-[40px]">

          {/* Banger title */}
          <div className="lg:pt-[89px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6 lg:mb-[15px]">
              <h2 className="text-black text-4xl sm:text-5xl lg:text-6xl font-fredoka font-bold leading-tight mb-3">
                Drop a word,
                <br />
                Watch it{" "}
                <span className="relative inline-block text-[#3175EA]">
                  Ripple.
                  <Image
                    src="/icons/underlineBlue.svg"
                    alt=""
                    width={230}
                    height={50}
                    className="w-full h-auto absolute left-0 top-full"
                  />
                </span>
              </h2>

              <p className="text-[#404040] font-providenceSans font-semibold text-base sm:text-lg lg:text-xl max-w-md lg:max-w-xl">
                Participate in ripple rooms and submit words or sentences in a
                shiritori styled manner and create long chain of words or a
                story with other participants, earn{" "}
                <span className="font-bold text-black">Riplens</span> and
                dress up your{" "}
                <span className="text-black font-bold">Rippie</span> with
                silly outfits.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-[32px] w-full sm:w-auto">
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[20px] mt-6 lg:mt-[30px] items-center lg:items-start">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/icons/online_icon.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 shrink-0"
                />
                <p className="font-providenceSans text-black text-sm sm:text-[17px]">1045 Rippies onboard</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/icons/riplen_coin.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 shrink-0"
                />
                <p className="font-providenceSans text-black text-sm sm:text-[17px] text-center sm:text-left">4.2m Riplens earned by all the rippies</p>
              </div>
            </div>
          </div>

          {/* Splash art */}
          <div>
            <Image
              src="/splash_arts/placeholder_splash_art.svg"
              alt="Splash Art"
              width={400}
              height={400}
              className="w-56 sm:w-72 md:w-96 lg:w-[480px] xl:w-180 aspect-square h-auto"
            />
          </div>
        </div>

        {/* Rooms showcase */}
        <div className="pr-0 lg:pr-[101px]">

          <div className="relative">
            <h1 className="font-fredoka font-bold text-black text-3xl sm:text-4xl lg:text-5xl">Rooms to join</h1>
            <p className="font-providenceSans font-bold text-[#FF2A38] text-lg sm:text-xl lg:text-2xl">ends in 2 days</p>
            <Image
              src="/icons/underlineRed.svg"
              alt="underline"
              width={230}
              height={50}
              className="w-[160px] sm:w-[220px] absolute left-0 top-full"
            />
          </div>

          {/* Vocabulary room */}
          <div className="overflow-hidden">

            {/* Title */}
            <div className="flex flex-col justify-center items-center mt-10">
              <Image
                src="/icons/underlineBlueThin.svg"
                alt="underline"
                width={230}
                height={50}
                className="w-100"
              />
              <h1 className="font-fredoka font-semibold text-[#3175EA] text-4xl">Vocabulary Rooms</h1>
              <p className="font-providenceSans font-bold text-[#404040] text-center text-xl">Use your vocabulary and submit words starting with the ending letter <br />
                of the last word submitted Rarer and Longer the words, more it will score</p>
            </div>

            {/* Rooms */}
            <div className="mt-10 flex flex-row gap-7
                            overflow-x-auto pb-4 pr-3">
              <RoomSection
                roomName={"Cozy Cottage"}
                roomDesc={"Anything goes"}
                roomLastWord={"Rhetorical"}
                roomUsers={"51"}
                roomColor={"#FDA4AF"}
              />
              <RoomSection
                roomName={"Verbal Voyage"}
                roomDesc={"Verbs only"}
                roomLastWord={"Hugging"}
                roomUsers={"51"}
                roomColor={"#7DD3FC"}
              />
              <RoomSection
                roomName={"Missing Keys"}
                roomDesc={"Letters K, E, Y and S are banned"}
                roomLastWord={"Tailoring"}
                roomUsers={"51"}
                roomColor={"#6EE7B7"}
              />
              <RoomSection
                roomName={"Cozy Cottage"}
                roomDesc={"Anything goes"}
                roomLastWord={"Rhetorical"}
                roomUsers={"51"}
                roomColor={"#FDA4AF"}
              />
              <RoomSection
                roomName={"Verbal Voyage"}
                roomDesc={"Verbs only"}
                roomLastWord={"Hugging"}
                roomUsers={"51"}
                roomColor={"#7DD3FC"}
              />
            </div>
          </div>

          {/* Story room */}
          <div className="overflow-hidden">

            {/* Title */}
            <div className="flex flex-col justify-center items-center mt-10">
              <Image
                src="/icons/underlineBlueThin.svg"
                alt="underline"
                width={230}
                height={50}
                className="w-100"
              />
              <h1 className="font-fredoka font-semibold text-[#3175EA] text-4xl">Story Rooms</h1>
              <p className="font-providenceSans font-bold text-[#404040] text-center text-xl">Submit sentences with relation to the previously submitted sentences <br />
                to compile a story formed with strangers</p>
            </div>

            {/* Rooms */}
            <div className="mt-10 flex flex-row gap-7
                            overflow-x-auto pb-4 pr-3">
              <RoomSection
                roomName={"Soupy Stories"}
                roomDesc={"Horror/Comedy"}
                roomLastWord={"then Leon F Kennedy arrived with a chainsaw"}
                roomUsers={"51"}
                roomColor={"#FCD34D"}
              />
              <RoomSection
                roomName={"Autopilot Anarchy"}
                roomDesc={"most chaotic story ever"}
                roomLastWord={"because he was not rizzy enough to do that"}
                roomUsers={"51"}
                roomColor={"#C4B5FD"}
              />
              <RoomSection
                roomName={"Bedwars Bungus"}
                roomDesc={"Most uncomfortable bedtime story ever"}
                roomLastWord={"what should we do now?"}
                roomUsers={"51"}
                roomColor={"#F99763"}
              />
              <RoomSection
                roomName={"Autopilot Anarchy"}
                roomDesc={"most chaotic story ever"}
                roomLastWord={"because he was not rizzy enough to do that"}
                roomUsers={"51"}
                roomColor={"#C4B5FD"}
              />
              <RoomSection
                roomName={"Bedwars Bungus"}
                roomDesc={"Most uncomfortable bedtime story ever"}
                roomLastWord={"what should we do now?"}
                roomUsers={"51"}
                roomColor={"#F99763"}
              />
            </div>
          </div>

          {/* Inbox subscription ki bheekh */}
          <div className="my-20 px-40">
            <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-[#FFC934] py-8 pl-25 shadow-[10px_10px_0px_#000] flex flex-row gap-10 items-center">
              {/* Pink circle top right */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#FF6B8A] border-4 border-black" />
              {/* Blue circle bottom left */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#6DD4F0] border-4 border-black" />

              <div>
                <div className="flex flex-row gap-3 justify-center items-center bg-white rounded-full border-4 border-black w-fit h-min px-[19px] py-[5px] shadow-[4px_4px_0px_#000]">
                  <Image
                    src="icons/mail.svg"
                    alt="Mail Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <p className="font-fredoka font-semibold text-black text-xl">Newsletter</p>
                </div>
                <h3 className="font-fredoka font-bold text-black text-4xl mt-[25px]">
                  Words drops, <span className="text-[#FF374F]">straight</span> to <br />
                  your inbox
                </h3>
                <p className="font-providenceSans font-bold text-[#404040] text-xl mt-[20px]">Get reminders of weekly word challenges, <br />
                  market drops and limited time events <br />
                  No spam - pinky promise :]</p>
              </div>
              <div className="bg-white border-4 border-black rounded-xl py-[12px] px-[10px] flex flex-row gap-3">
                <input type="email" placeholder="your_email@gmail.com"
                  className="font-providenceSans text-black text-base border-2 border-black rounded-xl px-3"/>
                <button className="font-fredoka font-semibold text-black text-lg px-[15px] py-[5px] bg-[#03C49A] border-3 border-black rounded-xl hover:bg-[#00AD88] transition shadow-[2px_2px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
