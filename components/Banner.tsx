import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Fatima Ali
        <span className="text-textDark mt-2 lgl:mt-4">
          Backend Developer
        </span>{" "}
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-base md:max-w-[650px] text-textDark font-medium leading-loose"
      >
        Passionate Backend Developer proficient in JavaScript, Node.js, and
        experienced in both relational (SQL) and non-relational (NoSQL)
        databases. Committed to continuous growth for effective web solutions.
      </motion.p>
    </section>
  );
};

export default Banner;
