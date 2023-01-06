import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FbApp} from "../pages/facebook/facebookindex";
import {getCookie, setCookie} from "@/utils/cookies";

function FBLogin({
  app,
  env,
  code,
}: {
  app?: FbApp;
  env: "prod" | "dev";
  code?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const clientId = "456304742501728";
  const redirectUri =
    env === "dev" ? "https://localhost:3001/fb/" : "https://kloun.lol/fb/";
  const scope = "public_profile,email";
  const responseType = "code";
  const clientSecret = "NjJhYzRjNWFkMTc4ZjcxYjJmMDBiODQ0ZDdmNDVlZjY=";

  useEffect(() => {
    const tok = getCookie("token");
    if (tok) {
      setToken(tok);
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const tokenResponse = await fetch(
        `https://graph.facebook.com/oauth/access_token?client_id=${clientId}&client_secret=${atob(
          clientSecret
        )}&redirect_uri=${redirectUri}&code=${code}`
      );
      const tokenData = await tokenResponse.json();
      if (tokenData.access_token) {
        console.log("first timer");
        setCookie("token", tokenData.access_token);
        setToken(tokenData.access_token);
        console.log(tokenData);
        const redirect = getCookie("redirect");
        router.push(redirectUri + "" + redirect);
      }
    };

    if (code) {
      console.log("there is code");
      getUser();
    }
  }, [code]);

  const handleLoginClick = () => {
    setLoading(true);
    setCookie("redirect", app?.slug || "");
    const loginUrl = `https://www.facebook.com/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

    window.location.href = loginUrl;
  };
  if (app?.cat && !token) {
    return (
      <div className="flex justify-center items-center">
        <button
          className="text-white  transition duration-300 max-w-xs w-full rounded-3xl uppercase flex text-sm font-bold p-3  relative "
          style={{backgroundColor: "#1877F3"}}
          onClick={handleLoginClick}
        >
          <div className="absolute h-full left-3 top-0 flex justify-center items-center">
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 fill-white drop-shadow-md"
                xmlns="http://w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-white drop-shadow-md"
                role="img"
                xmlns="http://w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            )}
          </div>
          <div className="w-full ml-6 flex justify-center items-center pt-0.5 drop-shadow-md">
            Използвай facebook
          </div>
        </button>
      </div>
    );
  } else {
    return <></>;
  }
}
export default FBLogin;
