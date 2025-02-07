import { useEffect } from "react";
const LifeStylePage_3 = () => {
  useEffect(() => {
    // Load Pinterest script after the component mounts
    const loadPinterest = () => {
      if (window.PinUtils) {
        window.PinUtils.build(); // If Pinterest script is already loaded, initialize it.
      } else {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.src = "//assets.pinterest.com/js/pinit.js";
        script.onload = () => {
          if (window.PinUtils) {
            window.PinUtils.build(); // Initialize Pinterest once script is loaded.
          }
        };
        document.body.appendChild(script);
      }
    };

    // Delay loading the Pinterest button to make sure everything is rendered.
    const timer = setTimeout(loadPinterest, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="w-full lg:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Lifestyle
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 30, 2024
          </span>

          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            Self-Care Rituals for Stress Relief and Mental Well-being
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/lifestyle_img/selfcare_rituals.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="Self-Care Rituals for Stress Relief and Mental Well-being"
                data-pin-media="https://virlama.com/assets/lifestyle_img/selfcare_rituals.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/lifestyle/3"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            In our busy, fast-paced lives, stress can easily take a toll on our
            mental and physical health. That's why establishing self-care
            rituals is essential for maintaining balance and well-being. These
            rituals are not just about pampering yourself but are powerful tools
            to help reduce anxiety, boost mood, and enhance overall mental
            health. Ready to reclaim your calm? Here are some self-care rituals
            to incorporate into your routine for effective stress relief and
            mental well-being.
          </p>

          <div className="flex flex-col w-full">
            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Morning Mindfulness: Start Your Day with Intention
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Dedicate the first 10-15 minutes of your morning to mindfulness
              practices such as deep breathing, meditation, or gentle
              stretching. By focusing on your breath and practicing mindfulness,
              you can clear your mind of worries, cultivate inner peace, and set
              a positive tone for the rest of the day. Pair this with a cup of
              herbal tea or a gratitude journaling session to help center your
              thoughts and emotions. Over time, this practice can significantly
              reduce stress levels and increase your sense of well-being.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Digital Detox: Unplug to Recharge
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              In today’s hyper-connected world, constant notifications and
              screen time can quickly lead to mental fatigue and stress. Make it
              a habit to disconnect from all electronic devices for at least 30
              minutes each day. Use this time to read a book, enjoy a nature
              walk, or sit quietly in reflection. Stepping away from the digital
              noise allows your mind to rest and recharge, promoting better
              focus and mental clarity when you return to your devices. It’s a
              simple yet powerful way to maintain mental wellness and avoid
              burnout.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Move Your Body: Gentle Exercise for Mental Clarity
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Regular physical activity is one of the most effective ways to
              manage stress and boost mental well-being. Whether it’s practicing
              yoga, going for a brisk walk, or dancing to your favorite music,
              find a form of movement that brings you joy. Exercise triggers the
              release of endorphins—your body's natural mood boosters—which help
              combat anxiety and improve mental clarity. Even short bursts of
              movement, like stretching or taking the stairs, can have a
              positive impact on your overall mental health throughout the day.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Create a Relaxation Zone: Your Personal Sanctuary
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Having a designated space in your home for relaxation and
              self-care can help you unwind and disconnect from the stresses of
              the day. Choose a corner or room that feels comfortable, and fill
              it with items that bring you peace—like soft cushions, cozy
              blankets, candles, or your favorite books and art. Make this your
              go-to place for meditation, journaling, or simply sitting quietly.
              Over time, this space will become synonymous with relaxation in
              your mind, making it easier to switch off and relax whenever
              you're there.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Nourish Your Body: Mindful Eating and Hydration
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              What you eat can have a profound impact on your mood and stress
              levels. Incorporate more whole foods like fruits, vegetables,
              nuts, and lean proteins into your diet for sustained energy and
              mental clarity. Hydration is also key—drink plenty of water
              throughout the day to keep your mind and body functioning
              optimally. Practice mindful eating by savoring each bite, noticing
              the flavors, and appreciating the nourishment your food provides.
              This simple ritual can turn even a quick meal into a moment of
              calm and gratitude, helping you stay present and relaxed.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Nightly Unwind: Creating an Evening Ritual
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              As the day winds down, it's essential to create a calming evening
              ritual to help transition from the busyness of the day to restful
              sleep. About an hour before bed, dim the lights, put away
              electronic devices, and engage in soothing activities like
              reading, taking a warm bath, or practicing gentle yoga.
              Aromatherapy with calming scents like lavender or chamomile can
              further signal to your body that it’s time to unwind. By
              establishing this consistent routine, you’ll improve the quality
              of your sleep and wake up feeling more refreshed and rejuvenated.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Express Yourself: The Power of Creative Outlets
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Creativity is a wonderful way to release stress and express
              emotions that may be difficult to verbalize. Engaging in creative
              activities like drawing, painting, writing, or playing music can
              help you process your feelings, release tension, and focus your
              mind. Find a hobby that brings you joy and make time for it
              regularly. Creative expression is not only therapeutic but can
              also provide a much-needed mental break from everyday stressors.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Cultivate Gratitude: Focus on the Positive
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Gratitude is a simple yet powerful tool for shifting your focus
              from stress and worry to appreciation and contentment. Take a few
              moments each day to reflect on what you are grateful for, no
              matter how small. Keep a gratitude journal where you jot down at
              least three things you’re thankful for each day. This practice
              helps you maintain a positive mindset, even in challenging times,
              and fosters a greater sense of overall happiness.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Integrating these self-care rituals into your routine can help
              reduce stress and improve mental well-being. Remember to take time
              for yourself—self-care is essential!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStylePage_3;
