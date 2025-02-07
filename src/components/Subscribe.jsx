import Button from "./Button";

const Subscribe = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 mb-9">
      <div className="flex items-center justify-between bg-n-8 mt-10 p-8 lg:p-11">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
          <img
            src="src/assets/oatmeal.webp"
            alt="Meal Plan"
            className="w-full h-60 lg:h-80 object-cover"
          />
          <div className="flex flex-col">
            <div className="ml-0 mt-6 lg:mt-0 lg:ml-5 flex flex-col">
              <h2 className="font-code tracking-[0.175rem] text-md font-semibold text-n-2">
                FREE DOWNLOAD
              </h2>
              <h1 className="text-2xl block lg:text-4xl text-n-3 mt-3">
                Grab Your 14-Day High Protein Meal Plan
              </h1>
              <p className="font-code tracking-[0.1rem] font-light text-[15px] text-n-3 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nunc sapien, interdum quis quam ut, consequat tincidunt nunc.
                Amet egestas tortor et sed libero.
              </p>
            </div>
            <div className="ml-0 lg:ml-5 mt-8">
              <form className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 border border-n-11 font-code text-color-4 font-light placeholder:text-n-4 placeholder:text-md h-14"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 border border-n-11 font-code text-n-4 font-light placeholder:text-n-4 placeholder:text-md h-14"
                />
                <Button
                  className={
                    "text-[11px] font-code font-medium uppercase text-n-9 bg-color-3 hover:bg-n-2 hover:text-n-3 transition-colors  h-14 "
                  }
                  noPaddingLeft
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
