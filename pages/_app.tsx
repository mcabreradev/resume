import React from "react";
import App from "next/app";
import { AnimatePresence, motion, Transition } from "framer-motion";

import Layout from "@components/UI/Layout";
import { capitalize } from "@utils/capitalize";

import '@styles/globals.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const spring: Transition = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren",
    };

    return (
      <div className="bg-accents-0 text-accents-1 m-0 p-0">
        <Layout>
          <div className="relative">
            {/* <h1 className="text-5xl hidden lg:block text-accents-2">
              {this.props.router.pathname.slice(1) === ""
                ? "About Me"
                : capitalize(this.props.router.pathname.slice(1))}
            </h1> */}
            <AnimatePresence>
              <div>
                <motion.div
                  transition={spring}
                  key={router.pathname}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  id="page-transition"
                >
                  <Component {...pageProps} key={router.pathname} />
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </Layout>

        <style jsx global>
          {`
            html {
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MyApp;
