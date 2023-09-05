import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Clean Blog Website"
          des=" This is a simple blog website developed using Node.js, Express.js,
            and MongoDB. It allows users to add, update, and read blog posts.
            The project uses the EJS templating engine for rendering views.
          "
          listItem={["Nodejs", "MongoDB", "Expressjs", "Ejs-Template-Engine"]}
          link=""
          repoLink="https://github.com/fatimaali200/clean-blog-project"
        />
      </div>
    </div>
  );
};

export default Archive;
