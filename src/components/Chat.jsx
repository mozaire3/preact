import { useEffect, useState } from "preact/hooks";
import { GoogleGenerativeAI } from "@google/generative-ai";

const  Chat = () => {
  const [question, Setquestion] = useState("");
  const [input, Setinput] = useState("");
  const [reponse, Setreponse] = useState("");

  const requete = async (e) => {
    e.preventDefault();
    console.log(input);
    //   const requete = await fetch("");
    //   const reponse = await requete.json();

    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(
      "AIzaSyCt4eqO5FKr2UpdeLZrw4HRzFBwtKZHGZo"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = input;

    const result = await model.generateContent(prompt);
    Setreponse(result.response.text());
    console.log(result.response.text());
  };

  return (
    <>
      <div className=" relative border-red-500 col-span-5 p-4">
        {reponse}
        <div className="absolute bottom-16 inset-x-0">
          {/* <div>{reponse}</div> */}

          <div className="">
            <form action="" onSubmit={requete}>
              <div className="flex justify-center mb-0 ">
                <label
                  htmlFor="search-bar"
                  className="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                >
                  <input
                    id="search-bar"
                    placeholder="your keyword here"
                    name="question"
                    value=""
                    onChange={(e) => Setinput(e.target.value)}
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                  />
                  <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div className="relative">
                      <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                        <svg
                          className="opacity-0 animate-spin w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>

                      <div className="flex items-center transition-all opacity-1 valid:">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                          Search
                        </span>
                      </div>
                    </div>
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
