import { useEffect } from "react";

const LifeStylePage_2 = () => {
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
            Lifestyle & Wellness
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 15, 2024
          </span>

          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            The Most Popular Herbs in Chinese Medicine
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/lifestyle_img/chinese_herbs.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="The Most Popular Herbs in Chinese Medicine"
                data-pin-media="https://virlama.com/assets/lifestyle_img/chinese_herbs.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/lifestyle/2"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            Chinese medicine has been practiced for thousands of years, and one
            of its most fascinating aspects is the use of herbs to promote
            health and balance in the body. These powerful plants are not just
            remedies; they are an integral part of a holistic approach to
            health, targeting everything from energy levels and digestion to
            stress and skin health. Let’s explore some of the most popular herbs
            in Chinese medicine and how they can benefit your body and mind.
          </p>

          <div className="flex flex-col w-full">
            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Ginseng: The Ultimate Energy Booster
            </h2>
            <div className="flex justify-center mb-6">
              <img
                className="max-h-[500px] mb-3"
                src="/assets/lifestyle_img/ruchipan_Ginseng_clip_art_on_a_white_background_with_a_simple_d_e426b65a-c093-4de1-887c-7b2551b7f018.png"
                alt="Ginseng"
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>Ginseng</strong> is one of the most well-known herbs in
              Chinese medicine, often referred to as the “king of herbs.” It is
              valued for its ability to boost energy levels, enhance physical
              performance, and support overall vitality. Ginseng is an
              adaptogen, meaning it helps the body adapt to stress and maintain
              balance.
            </p>
            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Increases energy and stamina:</strong> Ideal for those
                feeling fatigued or run down.
              </li>
              <li className="mb-4">
                <strong>Supports immune function:</strong> Helps the body resist
                infections and illnesses.
              </li>
              <li className="mb-4">
                <strong>Enhances mental clarity:</strong> Improves focus,
                concentration, and cognitive function.
              </li>
            </ul>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>How to Use:</strong> Ginseng is commonly taken in tea
              form, as a supplement, or even added to soups and broths for a
              nourishing boost.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Goji Berry: The Longevity Fruit
            </h2>
            <div className="flex justify-center mb-6">
              <img
                className="max-h-[500px] mb-3"
                src="/assets/lifestyle_img/ruchipan_Goji_Berry_clip_art_on_a_white_background_with_a_simpl_0c6c7e09-2624-4810-9a28-2999d8064a0a.png"
                alt="Goji Berry"
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>Goji Berries</strong>, also known as wolfberries, are a
              staple in Chinese medicine for promoting longevity and overall
              health. Packed with antioxidants, these bright red berries are
              said to nourish the liver, boost eye health, and support the
              immune system. They are also believed to enhance energy and mood.
            </p>
            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Rich in antioxidants:</strong> Protects cells from
                damage and supports healthy aging.
              </li>
              <li className="mb-4">
                <strong>Improves eye health:</strong> Contains high levels of
                zeaxanthin, which helps prevent age-related eye issues.
              </li>
              <li className="mb-4">
                <strong>Supports the immune system:</strong> Helps to strengthen
                the body's defenses against illness.
              </li>
            </ul>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>How to Use:</strong> Goji berries can be eaten raw, added
              to teas, or sprinkled on top of salads and yogurts for a sweet,
              health-boosting snack.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Astragalus: The Defender of Health
            </h2>
            <div className="flex justify-center mb-6">
              <img
                className="max-h-[500px] mb-3"
                src="/assets/lifestyle_img/ruchipan_Astragalus_clip_art_on_a_white_background_with_a_simpl_d933d3eb-1e97-4a0c-8979-99c2128de5d6.png"
                alt="Astragalus"
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>Astragalus</strong> is a powerful herb used to strengthen
              the immune system, increase energy, and protect against illness.
              Often called the “defender of health,” it is particularly valued
              for its ability to support the body’s natural defenses and boost
              overall vitality.
            </p>
            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Boosts immune function:</strong> Enhances the body’s
                resistance to infections and disease.
              </li>
              <li className="mb-4">
                <strong>Supports heart health:</strong> Helps to maintain
                healthy blood pressure and cholesterol levels.
              </li>
              <li className="mb-4">
                <strong>Promotes longevity:</strong> Known for its anti-aging
                properties and ability to enhance overall vitality.
              </li>
            </ul>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>How to Use:</strong> Astragalus root can be brewed into a
              tea or added to soups and stews to impart its protective
              properties.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Reishi Mushroom: The Herb of Immortality
            </h2>
            <div className="flex justify-center mb-6">
              <img
                className="max-h-[500px] mb-3"
                src="/assets/lifestyle_img/ruchipan_Reishi_Mushroom_growing_from_the_tree_clip_art_on_a_wh_550f0ccf-eab1-4056-a20a-8d15569ebc87.png"
                alt="Reishi Mushroom"
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Known as the “herb of immortality,”{" "}
              <strong>Reishi Mushroom</strong> is a powerful adaptogen that
              supports the body’s natural healing processes. It is prized for
              its ability to reduce stress, boost the immune system, and promote
              restful sleep. Reishi is often used in Chinese medicine to improve
              overall wellness and longevity.
            </p>
            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Reduces stress and anxiety:</strong> Helps to calm the
                mind and promote relaxation.
              </li>
              <li className="mb-4">
                <strong>Supports immune health:</strong> Strengthens the immune
                system and enhances the body’s ability to fight off infections.
              </li>
              <li className="mb-4">
                <strong>Improves sleep quality:</strong> Promotes deeper, more
                restful sleep.
              </li>
            </ul>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>How to Use:</strong> Reishi can be consumed as a tea, in
              powdered form, or as a supplement. It is often taken in the
              evening to support relaxation and sleep.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Ginger: The Digestive Hero
            </h2>
            <div className="flex justify-center mb-6">
              <img
                className="max-h-[500px] mb-3"
                src="/assets/lifestyle_img/ruchipan_Ginger_clip_art_on_a_white_background_with_a_simple_de_d6c387be-f779-4a85-bdd1-b4fa1b39f554.png"
                alt="Ginger"
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>Ginger</strong> is a versatile herb that has been used in
              Chinese medicine for centuries to aid digestion, reduce
              inflammation, and warm the body. It is particularly effective for
              alleviating nausea and improving digestive health.
            </p>
            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Aids digestion:</strong> Helps to relieve indigestion,
                bloating, and nausea.
              </li>
              <li className="mb-4">
                <strong>Reduces inflammation:</strong> Acts as a natural
                anti-inflammatory, helping to reduce pain and swelling.
              </li>
              <li className="mb-4">
                <strong>Boosts circulation:</strong> Warms the body and improves
                blood flow.
              </li>
            </ul>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>How to Use:</strong> Fresh or dried ginger can be added to
              teas, soups, and stir-fries. It is also available in supplement
              form for targeted digestive support.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Licorice Root: The Harmonizer
            </h2>
            <div className="flex justify-center mb-6">
              <img
                className="max-h-[500px] mb-3"
                src="/assets/lifestyle_img/ruchipan_Licorice_Root_clip_art_on_a_white_background_with_a_si_4a57a97d-6112-4c18-a7f5-1c4e8cdf28e8.png"
                alt="Licorice Root"
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>Licorice Root</strong> is used in Chinese medicine to
              harmonize and balance the effects of other herbs. It has a
              naturally sweet flavor and is known for its ability to soothe the
              stomach, support respiratory health, and reduce stress.
            </p>
            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Soothes the digestive tract:</strong> Helps to relieve
                symptoms of indigestion and gastritis.
              </li>
              <li className="mb-4">
                <strong>Supports respiratory health:</strong> Alleviates coughs
                and sore throats.
              </li>
              <li className="mb-4">
                <strong>Balances hormones:</strong> Helps to regulate cortisol
                levels, reducing stress and fatigue.
              </li>
            </ul>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>How to Use:</strong> Licorice root can be brewed into a
              tea or added to herbal blends to enhance their effects and improve
              flavor.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
              Chinese herbs have been revered for their healing properties for
              centuries. Whether you’re looking to boost your energy, support
              your immune system, or find natural ways to manage stress, these
              herbs offer a holistic approach to health and wellness. Always
              consult with a healthcare professional before starting any herbal
              regimen, especially if you have pre-existing conditions or are
              taking other medications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStylePage_2;
