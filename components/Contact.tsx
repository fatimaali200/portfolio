const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="font-titleFont text-5xl font-semibold">
        Let&apos;s Get in Touch
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        If you&apos;d like to connect or have any inquiries, please don&apos;t
        hesitate to reach out. I&apos;m always eager to collaborate, discuss new
        projects, or answer any questions you may have.
      </p>
      <a href="mailto:ffatima.ali200@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
