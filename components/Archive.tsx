import ArchiveCard from "./ArchiveCard";
import SectionTitle from "./SectionTitle";

// here if u add a project section just remove section name and id and change it to div
const Archive = () => {
  return (
    <section id="project" className="max-w-contentContainer mx-auto px-4 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center">
        {/**<h2 className="text-3xl font-titleFont font-semibold">
          Other Projects
        </h2> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="HomeTaste (Backend)"
          des="HomeTaste is a platform that brings together busy individuals, such as students, with skilled local cooks who offer a diverse selection of delicious homemade dishes."
          listItem={[
            "Nodejs",
            "MongoDB",
            "Expressjs",
            "Swagger",
            "JWT",
            "Passport",
            "Supertest",
            "Cloudinray",
          ]}
          link="https://home-taste-api.onrender.com/api-docs/"
          repoLink="https://github.com/fatimaali200/HomeTaste"
        />

        <ArchiveCard
          title="Clean Blog Website"
          des="This is a simple blog website developed using Node.js, Express.js,and MongoDB. It allows users to add, update, and read blog posts.The project uses the EJS templating engine for rendering views."
          listItem={["Nodejs", "MongoDB", "Expressjs", "Ejs-Template-Engine"]}
          link=" "
          repoLink="https://github.com/fatimaali200/clean-blog-project"
        />
      </div>
    </section>
  );
};

export default Archive;
